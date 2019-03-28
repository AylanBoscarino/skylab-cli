import { Command } from "@oclif/command";
import { IArg } from "@oclif/parser/lib/args";
import * as shell from "shelljs";
import { changeProjectName } from "./textchange";

export default class Init extends Command {
    public static args: IArg[] = [{ name: "projectName", description: "Desired project name", required: true }];
    public run(): any {
        if (!shell.which("git")) {
            shell.echo("Sorry, this script requires git");
            return shell.exit(1);
        }
        const { args } = this.parse(Init);
        const projectName = args.projectName.replace(/[^0-9a-zA-Z ]/g, "");
        const starterPackUrl = "https://github.com/AylanBoscarino/typed-react-native-starter-pack.git";

        const cloneOutPut = shell.exec(`git clone ${starterPackUrl} ${projectName}`);
        if (cloneOutPut.code !== 0) {
            shell.echo("Error: Git commit failed");
            return shell.exit(1);
        }

        shell.echo(cloneOutPut.stdout);

        shell.cd(projectName);
        if (shell.exec("yarn install").code !== 0) {
            shell.echo("Error: Yarn install failed");
            return shell.exit(1);
        }
        shell.exec(`skylab textchange ${projectName}`);
    }
}
