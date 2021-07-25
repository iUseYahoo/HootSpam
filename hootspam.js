const KahootSpam = require('kahoot-spammer')
const chalk = require('chalk');
const log = console.log;
const ReadLine = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})

var username = 'name';
var kahootcode = '';
var amount = 10;

console.clear();
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
        
        let api = KahootSpam
        api.spam(kahootcode, username, amount);
    })
};
Main().catch(error => {
    console.error(error)
  })
