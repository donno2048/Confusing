const help = "This is <b>not</b> a Linux server, it's a \"sandboxed\" web environment\nCommands:\n<b>help</b>: show this message\n<b>cat</b>: show the content of a file\n<b>javac</b>: compile a file\n<b>java</b>: run a compiled class\n<b>shutdown</b>: simply shut down and stop asking for input\n<b>ls</b>: list all the files", NoFileSpec = "No file was specified", NoFile = "No such file", NoFiles = "One or more of the files specified was not found", OnlyOneFile = "Please specify just one file", CannotCompile = "Cannot compile this type of file", NoClass = "No such class", NoClassSpec = "No class was specified", Unclear = "I don't understand your input\nType \"help\" to see the help message", content = {"Main.java": "import java.lang.reflect.Field;\nimport java.util.Random;\npublic class Main {\n\n\n        public static int j = 100;\n        public static void main(String[] args) {\n\n\n                if (args.length > 0 && args[0].length() > 0)\n                        j = Math.min(Integer.parseInt(args[0]) + 1, j);\n                for(int i = 1; i < j; i ++)\n                        System.out.printf(\"%d\", i);\n\n\n       }\n\n\n}\n\n\n\n", "Main.class": "This file contains unprintable characters"};
var Compiled = false, on = true, text = "$ ", input = "";
function response(code) {
    code = code.trim();
    if (code == "help") return help;
    if (code.startsWith("ls")) {
        const after = code.slice(code.indexOf("ls") + 2);
        if (after.length == 0 || after.startsWith(" ")) return "Main.java" + (Compiled ? "\nMain.class" : "");
    }
    if (code.startsWith("cat")) {
        const toPrint = code.slice(code.indexOf("cat") + 3);
        if (toPrint.length == 0) return NoFileSpec;
        if (toPrint.startsWith(" ")) {
            const files = toPrint.trim().split(" ");
            var code = "";
            if (files.length == 0) return NoFileSpec;
            for (file in files) {
                code += "\n";
                if (!["Main.java", "Main.class"].includes(files[file])) code += NoFile;
                else if (!Compiled && files[file] == "Main.class") code += NoFile;
                else code += content[files[file]];
            }
            return code;
        }
    }
    if (code.startsWith("javac")) {
        const toCompile = code.slice(code.indexOf("javac") + 5);
        if (toCompile.length == 0) return NoFileSpec;
        if (toCompile.startsWith(" ")) {
            const files = toCompile.trim().split(" ");
            if (files.length == 0) return NoFileSpec;
            for (file in files) {
                if (!["Main.java", "Main.class"].includes(files[file])) return files[file].length == 1 ? NoFile : NoFiles;
                if (files[file] == "Main.class") return CannotCompile;
            }
            Compiled = true;
            return"";
        }
    }
    if (code.startsWith("java")) {
        const toRun = code.slice(code.indexOf("java") + 4);
        if (toRun.length == 0) return NoClassSpec;
        if (toRun.startsWith(" ")) {
            const argv = toRun.trim().split(" ");
            if (argv.length == 0) return NoClassSpec;
            if (argv[0] != "Main" || !Compiled) return NoClass;
            if (argv.length == 1 || argv[1].length == 0) return 2 + "1".repeat(99);
            if (!isNaN(argv[1])) return 2 + "1".repeat(Math.min(99, argv[1] - 1));
            return"";
        }
    }
    if (code.startsWith("shutdown")) {
        const command = code.slice(code.indexOf("shutdown") + 8);
        if (command.startsWith(" ") || command.length == 0) {
            on = false;
            return"";
        }
    }
    return Unclear;
}
function NcharsFrom(N, from) {return [...Array(N)].map((_, i) => String.fromCharCode(i + from));}
function update() {document.getElementsByTagName("span")[0].innerHTML = text;}
document.onkeydown = function(key) {
    if (on) {
        if (NcharsFrom(26, 97).concat(NcharsFrom(26, 65)).concat(NcharsFrom(10, 48)).concat([" ", "."]).includes(key.key)) {
            text += key.key;
            input += key.key;
        }
        if (key.keyCode == 13) {
            text += "<br/>" + response(input).replaceAll("\n", "<br/>") + (on ? "<br/>$ " : "");
            input = "";
        }
        if (key.keyCode == 8) {
            if (input.length != 0) {
                input = input.slice(0, -1);
                text = text.slice(0, -1);
            }
        }
        update();
    }
}
window.onload = update;