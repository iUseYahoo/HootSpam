// all required imports
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

// recommened to keep these as they are, default
var username = '';
var kahootcode = '';
var amount = '';

// clear the console to make the console look clean
console.clear();

// prints the logo of hootspam in ASCII Shadow
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

// Main function for the main code
async function Main() {
    // user input hoot code
    ReadLine.question("Kahoot Code: ", KC => {
        kahootcode = KC
        
        // user input hoot amount
        ReadLine.question("Amount: ", KA => {
            amount = KA

            // user input hoot username
            ReadLine.question("Username: ", KU => {
                username = KU

                // using api to send the clients to the Kahoot room with the; username, amount > kahoot room
                let api = KahootSpam
                api.spam(kahootcode, username.toString(), amount);

                // loop printing the amount done, kahoot username > kahoot code
                for (i = 0; i < KA; i++){
                    console.log(chalk.blueBright(`[${i}] ${KU} > ${KC}}`))

                    // if the loop is at KA / kahoot amount then it will clear and print done!
                    if (i == KA){
                        console.clear();
                        console.log(chalk.redBright(`\nDone!`))
                        break;
                    }
                }
            })
        })
    })
};
// this runs the main function
// this also logs errors
Main().catch(error => {
    console.error(error)
})

// Kahoot Spammer package from https://github.com/tthomxs
