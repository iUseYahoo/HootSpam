const KahootSpam = require('kahoot-spammer')
const chalk = require('chalk');
const {
    parse
} = require('path');
const log = console.log;
const ReadLine = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})

var username = '';
var kahootcode = '';
var amount = '';

console.clear();
log(chalk.blueBright(`========================================================================================
=                                                                                      =
=      ██╗  ██╗ ██████╗  ██████╗ ████████╗    ███████╗██████╗  █████╗ ███╗   ███╗      =
=      ██║  ██║██╔═══██╗██╔═══██╗╚══██╔══╝    ██╔════╝██╔══██╗██╔══██╗████╗ ████║      =
=      ███████║██║   ██║██║   ██║   ██║       ███████╗██████╔╝███████║██╔████╔██║      =
=      ██╔══██║██║   ██║██║   ██║   ██║       ╚════██║██╔═══╝ ██╔══██║██║╚██╔╝██║      =
=      ██║  ██║╚██████╔╝╚██████╔╝   ██║       ███████║██║     ██║  ██║██║ ╚═╝ ██║      =
=      ╚═╝  ╚═╝ ╚═════╝  ╚═════╝    ╚═╝       ╚══════╝╚═╝     ╚═╝  ╚═╝╚═╝     ╚═╝      =
=                             https://github.com/iUseYahoo                             =
========================================================================================`))

async function Main() {
    ReadLine.question("Kahoot Code: ", KC => {
        kahootcode = KC

        ReadLine.question("Amount: ", KA => {
            amount = KA

            ReadLine.question("Username: ", KU => {
                username = KU

                let api = KahootSpam
                api.spam(kahootcode, username.toString(), amount);
            })
        })
    })
};
Main().catch(error => {
    console.error(error)
})

// Kahoot Spammer package from https://github.com/tthomxs
