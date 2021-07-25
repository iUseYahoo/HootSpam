// You need to run this command: npm i kahoot-spammer -g
// You need to run this command: npm i chalk --save --global
const KahootSpam = require('kahoot-spammer')
const chalk = require('chalk');
const log = console.log;
const ReadLine = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})

var username = 'name';
var kahootcode = '';

log(chalk.blueBright(`========================================================================================
=                                                                                      =
=      ██╗  ██╗ ██████╗  ██████╗ ████████╗    ███████╗██████╗  █████╗ ███╗   ███╗      =
=      ██║  ██║██╔═══██╗██╔═══██╗╚══██╔══╝    ██╔════╝██╔══██╗██╔══██╗████╗ ████║      =
=      ███████║██║   ██║██║   ██║   ██║       ███████╗██████╔╝███████║██╔████╔██║      =
=      ██╔══██║██║   ██║██║   ██║   ██║       ╚════██║██╔═══╝ ██╔══██║██║╚██╔╝██║      =
=      ██║  ██║╚██████╔╝╚██████╔╝   ██║       ███████║██║     ██║  ██║██║ ╚═╝ ██║      =
=      ╚═╝  ╚═╝ ╚═════╝  ╚═════╝    ╚═╝       ╚══════╝╚═╝     ╚═╝  ╚═╝╚═╝     ╚═╝      =
=                                                                                      =
========================================================================================`))

async function Main(){
    ReadLine.question("Kahoot Code: ", KC =>{
        kahootcode = KC
        
        for (i = 0; i < 10; i++){
            let api = KahootSpam
            api.spam(kahootcode, username, i)
            console.log(`[${i}] joined ${kahootcode} as ${username}`)
        }
    })
};
Main().catch(error => {
    console.error(error)
  })
