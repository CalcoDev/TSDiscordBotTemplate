import {
    IPrefixCommand,
    TPrefixCommandDelegateArgs,
    TPrefixCommandDelegateReturn
} from "../typings/PrefixCommands";

export class PrefixCommand implements IPrefixCommand {
    name: string;
    run: (args: TPrefixCommandDelegateArgs) => TPrefixCommandDelegateReturn;

    constructor(name: string, run: (args: TPrefixCommandDelegateArgs) => TPrefixCommandDelegateReturn) {
        this.name = name;
        this.run = run;
    }
}