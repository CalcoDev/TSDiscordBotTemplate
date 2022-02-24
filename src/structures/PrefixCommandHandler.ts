import {ApplicationCommandDataResolvable, Collection} from "discord.js";
import {IPrefixCommand, TPrefixCommandDelegateArgs, TPrefixCommandDelegateReturn} from "../typings/PrefixCommands";
import {ExtendedClient} from "./ExtendedClient";
import {globPromise, importFile} from "../helpers";
import {ISlashCommand} from "../typings/SlashCommands";

export class PrefixCommandHandler {
    public commands: Collection<string, IPrefixCommand> = new Collection();
    public commandPrefix: string = '!';
    private client: ExtendedClient;

    constructor(client: ExtendedClient) {
        this.client = client;
    }

    public async loadCommands() {
        const prefixCommandPaths = await globPromise(`${__dirname}/../commands/prefix/*/*{.ts,.js}`); // String array of all files ending in .ts | .js .

        for (const filePath of prefixCommandPaths) {
            const command: IPrefixCommand = await importFile(filePath);
            if (typeof command.name == undefined)
                return;

            this.commands.set(command.name, command);
        }
    }

    public runCommand(name: string, args: TPrefixCommandDelegateArgs): TPrefixCommandDelegateReturn {
        if (!this.commands.has(name))
            return {
                succeeded: false,
                errorMessage: "Command doesn't exist."
            };

        return this.commands.get(name).run(args);
    }
}