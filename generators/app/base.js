"use strict";

const fs = require("fs");
const val = require("../validations.js");

module.exports = {

    initializing(generator) {
        generator.log(" ");
        generator.log(" |  |/  / |  |  |  | |   _  \\  |   ____| /  _____||   ____||  \\ |  | ");
        generator.log(" |  '  /  |  |  |  | |  |_)  | |  |__   |  |  __  |  |__   |   \\|  | ");
        generator.log(" |    <   |  |  |  | |   _  <  |   __|  |  | |_ | |   __|  |  . `  | ");
        generator.log(" |  .  \\  |  `--'  | |  |_)  | |  |____ |  |__| | |  |____ |  |\\   | ");
        generator.log(" |__|\\__\\  \\______/  |______/  |_______| \\______| |_______||__| \\__| ");
        generator.log(" ");
        generator.log("Welcome to Kubernetes Generator (kubegen)!");
    },
    getPrompts() {
        var prompts = [{
            type: "input",
            name: "name",
            message: "What is the name of the service?",
            default: "service1",
            validate: val.isString
        }, {
            type: "input",
            name: "namespace",
            message: "Which Namespace should the service be deployed to?",
            default: "default",
            validate: val.isString
        }];

        return prompts;
    },
    spawnKubectlCommand(generator, fileOrFolder, command) {
        generator.spawnCommandSync("kubectl",[command, "-f", fileOrFolder]);
    }
};