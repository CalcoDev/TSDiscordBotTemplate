import {ApplicationCommandDataResolvable, Collection} from "discord.js";
import {ISlashCommand, ISlashCommandRegisterOptions} from "../typings/SlashCommands";
import {Event} from "./Event";
import {TClientEvent} from "../typings/Events";
import { globPromise, importFile } from "../helpers";
import {ExtendedClient} from "./ExtendedClient";

export class SlashCommandHandler {
    public commands: Collection<string, ISlashCommand> = new Collection();
    private client: ExtendedClient;

    constructor(client: ExtendedClient) {
        this.client = client;
    }

    public async loadCommands() {
        const slashCommands: ApplicationCommandDataResolvable[] = [];
        const slashCommandPaths = await globPromise(`${__dirname}/../commands/slash/*/*{.ts,.js}`); // String array of all files ending in .ts | .js .

        for (const filePath of slashCommandPaths) {
            const command: ISlashCommand = await importFile(filePath);
            if (typeof command.name == undefined)
                return;

            this.commands.set(command.name, command);
            slashCommands.push(command);
        }

        this.client.on("ready", () => {
            this.registerCommands({
                guildId: process.env.guildId,
                commands: slashCommands
            })
        })
    }

    /**
     * Register bot commands based on the guild it is operating / globally if no guildId is provided.
     * @private
     */
    private async registerCommands({ commands, guildId }: ISlashCommandRegisterOptions) {
        if (guildId) {
            this.client.guilds.cache.get(guildId)?.commands.set((commands as ApplicationCommandDataResolvable[]));
            console.log(`Registering commands to ${guildId}`);
        }
        else {
            this.client.application?.commands.set(commands);
            console.log(`Registering commands globally.`);
        }
    }
}