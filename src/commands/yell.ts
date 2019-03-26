import {Command} from '@oclif/command';

export default class Yell extends Command {
  static args = [
    { name: 'command' },
    { name: 'target' },
  ]
  run(): any {
    const {args} = this.parse(Yell);
    this.log(args.command, args.target)
  }
  
}