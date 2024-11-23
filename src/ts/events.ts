interface Module {
    html: string;
    error: string | null;
    reply: string;
}

const getUrl = '/api/get';
async function getModuleData(name: string): Promise<Module> {
    const response = await fetch(`${getUrl}?input=${name}`);
    const json = await response.json();

    return {
        html: json.html,
        error: json.error,
        reply: json.reply,
    };
}

function scrollAndFocus(): void {
    $('#terminal-user-input').trigger('focus');
    $('#terminal').scrollTop($('#terminal').height() * 10); // scroll to the bottom
}

// generate past history
function generateHistory(input: string, output: string) {
    return `<div id="terminal-input" class="terminal-item">
                <p class="terminal-item-label"><span class="user-label">unknown_user</span>@123.456 <span class="tilde">~</span></p>
                <div>$ ${input}</div>
                <div>${output}</div>
            </div>`;
}

// handle entering commands
async function handleInput(e) {
    e.preventDefault(); // prevent page reload

    const userInput = <string>$('#terminal-user-input').val();
    const data = await getModuleData(userInput);

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
}

// handle button press
async function handlePress(button) {
    const command = button.data().command;
    const data = await getModuleData(command);

    if (command === 'terminal') {
        enterTerminalMode();
        return;
    }

    $('#output').html('').append(data.html); // change output
}

function enterMouseMode(): void {
    $('#mouse-mode').css('display', 'flex');
    $('#terminal').css('display', 'none');
}

function enterTerminalMode(): void {
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
