var Reset = "\x1b[0m%s\x1b[0m";
var Bright = "\x1b[1m%s\x1b[0m";
var Dim = "\x1b[2m%s\x1b[0m";
var Underscore = "\x1b[4m%s\x1b[0m";
var Blink = "\x1b[5m%s\x1b[0m";
var Reverse = "\x1b[7m%s\x1b[0m";
var Hidden = "\x1b[8m%s\x1b[0m";
var FgBlack = "\x1b[30m%s\x1b[0m";
var FgRed = "\x1b[31m%s\x1b[0m";
var FgGreen = "\x1b[32m%s\x1b[0m";
var FgYellow = "\x1b[33m%s\x1b[0m";
var FgBlue = "\x1b[34m%s\x1b[0m";
var FgMagenta = "\x1b[35m%s\x1b[0m";
var FgCyan = "\x1b[36m%s\x1b[0m";
var FgWhite = "\x1b[37m%s\x1b[0m";
var BgBlack = "\x1b[40m%s\x1b[0m";
var BgRed = "\x1b[41m%s\x1b[0m";
var BgGreen = "\x1b[42m%s\x1b[0m";
var BgYellow = "\x1b[43m%s\x1b[0m";
var BgBlue = "\x1b[44m%s\x1b[0m";
var BgMagenta = "\x1b[45m%s\x1b[0m";
var BgCyan = "\x1b[46m%s\x1b[0m";
var BgWhite = "\x1b[47m%s\x1b[0m";

class Utils {
    constructor() {

    }
    testingFunct() {
        return 1;
    }
    logError(message, opt) {
        console.log(FgCyan, '---- AUTOMATIK DOCS LOGS: ----');
        console.log(FgRed, '* ERROR *');
        console.log(FgRed, message);
        if (opt) {
            console.log(opt);
        }
        console.log(FgCyan, '-----------------------------');
    }
    logSuccess(message, opt) {
        console.log(FgCyan, '---- AUTOMATIK DOCS LOGS ----');
        console.log(FgGreen, '* SUCESS *');
        console.log(FgGreen, message);
        if (opt) {
            console.log(opt);
        }
        console.log(FgCyan, '-----------------------------');
    }
}

module.exports = Utils;