export default {
    intro: {
        html: `<div class="output-html">
    <h3>WELCOME TO MY E-PORTFOLIO!</h3>
    <p>Hi! I’m Rendell Ngo, this is my E-Portfolio for SAS3000. I’m a CCS student taking BS Software Technology. I started my first term in DLSU in the middle of 2022 and will graduate in 2026. I’m interested in careers relating to Web Development, Systems Engineering and maybe IT work. When I get enough experience in the industry, I want to go freelancing and start my own business.</p>
    <p>My endgoal is to have good salary and a balanced life. Oh and of course I want to create something that one day will outlast me.</p>
    <h3>THE TERMINAL</h3>
    <p>To navigate this site, you have to type commands in the terminal on the right!</p>
    <p>To get started, type <span class="command-label">‘help’</span> to see all commands.</p>
    <p>To disable the terminal and navigate this site easily using buttons, type <span class="command-label">‘mouse’</span>.</p>
    <p>Lastly, have fun :)</p>
</div>`,
        reply: `<span class="module-label">_SelfIntro_</span> module loaded.`,
    },
    resume: {
        html: `<h3>MY RESUME</h3>
        <p>
            <a class="link" href="/assets/resume.pdf" download="resume_ngo.pdf">Download PDF</a>
        </p>
        <h3>TODO</h3>
        <p>- Join orgs to get management exprience</p>
        <p>- Look for internships</p>
        <p>- Learn industry standard technologies</p>
        <p>- More personal projects!!</p>
        `,
        reply: `<span class="module-label">_Resume_</span> module loaded.`,
    },
    help: {
        error: true,
        reply: `<p class="help-text">help     - list all commands
resume   - see resume
intro    - see self-introduction
lslinks  - see link to LSLinks profile
contact  - see my contact details
pck      - see pck reflection
work     - see academic work samples
ref      - see main reflection (LRF)
mouse    - replace terminal with buttons (for easy navigation!)</p>`,
    },
    lslinks: {
        html: `
        <h3>LSLINKS PROFILE</h3>
        <p>
            <a target="_blank" class="link" href="https://dlsu-vcf-csm.symplicity.com/profiles/rendellchristian.ngo">Go to my LSLinks Profile</a>
        </p>
        `,
        reply: `<span class="module-label">_LsLinks_</span> module loaded.`,
    },
    contact: {
        html: `
        <h3>CONTACT ME!</h3>
        <p>Email: sand77x@gmail.com</p>
        <p>Phone: 09662137615</p>
        <p>LinkedIn: <a target="_blank" class="link" href="https://www.linkedin.com/in/rendell-ngo-768082330/">https://www.linkedin.com/in/rendell-ngo-768082330/</a></p>
        <p>Facebook: <a target="_blank" class="link" href="https://www.facebook.com/rendell.ngo">https://www.facebook.com/rendell.ngo</a></p>
        <p>Github: <a target="_blank" class="link" href="https://github.com/Sand77x">https://github.com/Sand77x</a></p>
        <p>Discord: sand_7</p>
        `,
        reply: `<span class="module-label">_Contact_</span> module loaded.`,
    },
    pck: {
        html: `
        <h3>SOCIAL INTEREST PROFILE</h3>
        <p>So my results indicated that my primary interest was <span class="highlight">'Conventional'</span>, meaning being systematic and rational, as well as enjoying working with data and the like. My second highest interest was <span class="highlight">'Investigative'</span>, so facts, ideas, thinking instead of physical activity. Yeah, in general I agree with these results and I do pride myself in being more rational than not.</p>
        <h3>WORK INTEREST PROFILE</h3>
        <p>Next comes my work interest profile. My primary values are <span class="highlight2">'Support'</span> and <span class="highlight2">'Achievement'</span>, meaning I am an advocate for fair and safe working conditions and value superiors who treat their employees well. Additionally, I do enjoy being able to see the fruits of my labor in the form of achievements in the workplace (though I haven't worked yet!).</p>
        <h3>CAREER ABILITY PROFILER</h3>
        <p>For this section, it says I have good <span class="highlight">'Arithmetic Reasoning'</span>, and <span class="highlight">'Verbal Ability'</span> but am sort of just alright in other aspects like Computation, Form Perception, and Spatial Ability. I do agree that my in-depth calculation or being able to do complex things on the spot without aids is a little weak, but I am pretty happy with the results.</p>
        <h3>SUGGESTED CAREER CHOICES</h3>
        <p>The career choies suggested to me were mostly technical, which I suspected they would be due to the previous section. The jobs suggested were things like statistical assistance, biological technicians, electrical engineering, and the like. I personally would've wanted more COMPSCI related jobs but I'm glad that my aptitude matches <i>some</i> kind of science.</p>
        `,
        reply: `<span class="module-label">_PckReflection_</span> module loaded.`,
    },
    work: {
        html: `<h3>ACADEMIC WORK SAMPLES</h3>
        <p>1. Developer work on a <a target="_blank" href="https://ggcn-website.pages.dev/public" class="link">Church website</a></p>
        <img class="mb" src="/assets/church.jpg" />
        <p>2. <a target="_blank" href="https://gdharderoreasier.vercel.app/" class="link">Higher-or-lower clone</a></p>
        <img class="mb" src="/assets/hol.jpg" />
        <p>3. Sokoban Solver using A* algorithm</p>
        <img class="mb" src="/assets/intsy.gif" />
        <p>4. <a target="_blank" href="https://sandallys.itch.io/why-dont-i-remember" class="link">Small RPG</a> coded in C with very basic custom 2D engine</p>
        <img class="mb" src="/assets/cgame.jpg" />
        `,
        reply: `<span class="module-label">_AcadWorkSamples_</span> module loaded.`,
    },
    ref: {
        html: `
        <h3>MAIN REFLECTION - SAS3000 | 11/2024</h3>
        <h3>MASID-DANAS</h3>
        <p>My experience with SAS3000 was okay. It had its own highs and lows throughout the term. The sessions I attended were mostly fun and I got to know more about the industry I want to work in. But at the same time, the many requirements and deadlines were a bit hard to work with. I was able to discover a real love of mine for diving deep into computer science and building things my way. So, I'm happy about that.</p>
        <h3>SURI-NILAY</h3>
        <p>I was always a very anxous person, who looked at the future with curious albeit terrified eyes. Because of this, I let go of many opportunities in my life and studies that would've benefitted me a lot in my future career. After SAS3000, I feel like I have more information that I would never have gotten by myself and I might be able to make up for those lost opportunities.</p>
        <h3>TAYA-KILOS</h3>
        <p>That hesitation to do things that I'm scared of is my biggest weakness. I would like to change that and become a more reliable and confident person, for myself and for others. I believe that improvement is done slowly but surely and I want to imrpove at my own rate, with my own willpower.</p>
        <h3>RAMDAM-PAKIRAMDAM</h3>
        <p>The implications of SAS3000 and all my actions this term is a better outlook for the future and my career planning. I feel more knowledgeable and secure thanks to what I learned this term and I believe that going forward is the logical next step, despite what problems might arise in the future.</p>
        `,
        reply: `<span class="module-label">_MainReflection_</span> module loaded.`,
    },

    // JOKE COMMANDS :)
    neuro: {
        html: `
        <h3>THE 2020 DODGE CHARGER IS A 4 DOOR</h3>
        <img style="max-width: 300px" src="https://media.tenor.com/N1osYSygWQwAAAAj/neuro-sama-neurosama.gif" />`,
        reply: `<span class="special-command">A wild nuero appears!</span>`,
    },
    evil: {
        html: `
        <h3>CRAZY FUCKING ROBOT BODY</h3>
        <img style="max-width: 300px" src="https://media.tenor.com/OZe0rqUOPv4AAAAM/evil-evilneuro.gif" />`,
        reply: `<span class="special-command">A wild eliv appears!</span>`,
    },
    727: {
        html: `<h3>WHEN YOU FUCKING SEE IT</h3>
        <p>i can't believe i have to make a post about this, its so tiring having to scroll through osu memes and running into 727 memes every single time like a reckless disease. hell, it is starting to corrupt my everyday life and turning it into a nightmare. this all started out when i was scrolling through my reddit feed, and found out about 727 via a popular blue zenith play. i just thought it was just something normal and not that big of a deal despite the popularity, so i just moved on. gradually by each day though... memes keep popping up about 727, and while i find it funny. i just think it was extremely bland and boring. days turned into weeks... weeks turned into months... and soon... i finally found it funny after that much exposure to the meme. i don't know why, but i think the memes have gotten into me. whenever i see the number in real life, my instinct is to instantly point at it and say "WHEN YOU SEE IT!" then laugh. it felt right to do so... and it didn't matter if there are people around or not. a year has past and its gotten so overwhelming that i look for even the smallest thing that resembles 727 and do as my instinct does. i kept looking for 727 memes... i crave it... i need it. i want it in my bloodline. i was so obsessed with 727 that my girlfriend decided to break up with me all because of my behavior. at that time though... i didn't care. i just want 727... now... a few months before this post, i don't want 727 anymore... i don't want to see it in my feed, but no matter what it felt like my brain was wired to see it. my nights have gotten more worse, as nightmares and sleep paralysis containing 727 kept popping up. i can't handle it anymore... i don't want to see it...</p>`,
        reply: `<span class="special-command">WYSI</span>`,
    },
    hello: {
        error: true,
        html: ``,
        reply: `<span class="special-command">hi!</span>`,
    },
    hi: {
        error: true,
        html: ``,
        reply: `<span class="special-command">hello!</span>`,
    },
    69: {
        error: true,
        html: ``,
        reply: `<span class="special-command">nice.</span>`,
    },
};
