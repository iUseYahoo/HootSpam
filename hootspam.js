const KahootSpam = require('kahoot-spammer')
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
const ReadLine = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})

var username = 'name';
var kahootcode = '';

console.log(`===========================================================================
-██╗  ██╗ ██████╗  ██████╗ ████████╗    ███████╗██████╗  █████╗ ███╗   ███╗
-██║  ██║██╔═══██╗██╔═══██╗╚══██╔══╝    ██╔════╝██╔══██╗██╔══██╗████╗ ████║-
-███████║██║   ██║██║   ██║   ██║       ███████╗██████╔╝███████║██╔████╔██║-
-██╔══██║██║   ██║██║   ██║   ██║       ╚════██║██╔═══╝ ██╔══██║██║╚██╔╝██║-
-██║  ██║╚██████╔╝╚██████╔╝   ██║       ███████║██║     ██║  ██║██║ ╚═╝ ██║-
-╚═╝  ╚═╝ ╚═════╝  ╚═════╝    ╚═╝       ╚══════╝╚═╝     ╚═╝  ╚═╝╚═╝     ╚═╝-
============================================================================`)

async function Main(){
    ReadLine.question("Kahoot Code: ", KC =>{
        kahootcode = KC
        
        for (i = 0; i < 10; i++){
            let api = KahootSpam
            api.spam(kahootcode, username, i)
            console.log(`[${i}] joined ${kahootcode} as ${username}`)

            setTimeout(function(){
                
            },0250);
        }
    })
};
Main().catch(error => {
    console.error(error)
  })