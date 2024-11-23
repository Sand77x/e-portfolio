var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const getUrl = '/api/get';
function getModuleData(name) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`${getUrl}?input=${name}`);
        const json = yield response.json();
        return {
            html: json.html,
            error: json.error,
            reply: json.reply,
        };
    });
}
function scrollAndFocus() {
    $('#terminal-user-input').trigger('focus');
    const height = $('#terminal').height();
    $('#terminal').scrollTop(height * 10); // scroll to the bottom
}
// generate past history
function generateHistory(input, output) {
    return `<div id="terminal-input" class="terminal-item">
                <p class="terminal-item-label"><span class="user-label">unknown_user</span>@123.456 <span class="tilde">~</span></p>
                <div>$ ${input}</div>
                <div>${output}</div>
            </div>`;
}
// handle entering commands
function handleInput(e) {
    return __awaiter(this, void 0, void 0, function* () {
        e.preventDefault(); // prevent page reload
        const userInput = $('#terminal-user-input').val();
        const data = yield getModuleData(userInput);
        if (userInput === 'mouse') {
            enterMouseMode();
            return;
        }
        $('#terminal-user-input').val(''); // clear input
        // dunno why but it doesn't scroll to the bottom
        // so i put a large scale
        scrollAndFocus();
        $('#terminal-history').append(generateHistory(userInput, data.reply)); // add history on top
        if (!data.error) {
            $('#output').html('').append(data.html); // change output
        }
    });
}
// handle button press
function handlePress(button) {
    return __awaiter(this, void 0, void 0, function* () {
        const command = button.data().command;
        const data = yield getModuleData(command);
        if (command === 'terminal') {
            enterTerminalMode();
            return;
        }
        $('#output').html('').append(data.html); // change output
    });
}
function enterMouseMode() {
    $('#mouse-mode').css('display', 'flex');
    $('#terminal').css('display', 'none');
}
function enterTerminalMode() {
    $('#terminal').css('display', 'block');
    $('#mouse-mode').css('display', 'none');
    $('#terminal-user-input').val(''); // clear input
    scrollAndFocus();
}
// event handlers
jQuery(() => {
    // get input from user on submit
    // should pass this to back and get back html
    $('#terminal-input').on('submit', handleInput);
    // focus on input when clicking anywhere in terminal
    $('#terminal').on('click', () => {
        scrollAndFocus();
    });
    $('#mouse-mode')
        .children('button')
        .each((ind, val) => {
        $(val).on('click', () => handlePress($(val)));
    });
});
//# sourceMappingURL=events.js.map