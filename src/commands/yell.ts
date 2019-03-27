import { Command } from "@oclif/command";

export default class Yell extends Command {
    public static args = [{ name: "command" }, { name: "target" }];
    public run(): any {
        const { args } = this.parse(Yell);
        this.log(args.command, args.target);
    }
}
