import { Command } from "@oclif/command";
import { IArg } from "@oclif/parser/lib/args";

export default class Rename extends Command {
    public static args: IArg[] = [{ name: "newProjectName", description: "New Project name", required: true }];
    public run(): any {
        const { args } = this.parse(Rename);
        const newProjectName = args.newProjectName;
    }
}
