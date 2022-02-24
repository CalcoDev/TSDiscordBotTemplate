import {Client} from "discord.js";
import {SlashCommandHandler} from "./SlashCommandHandler";
import {EventHandler} from "./EventHandler";
import {PrefixCommandHandler} from "./PrefixCommandHandler";

export class ExtendedClient extends Client {
    public slashCommandHandler: SlashCommandHandler = new SlashCommandHandler(this);
    public prefixCommandHandler: PrefixCommandHandler = new PrefixCommandHandler(this);
    public eventHandler: EventHandler = new EventHandler(this);

    constructor() {
        super({
            intents: ["GUILDS", "GUILD_MESSAGES", "DIRECT_MESSAGES"]
        });
    }

    public async start() {
        await this.slashCommandHandler.loadCommands();
        await this.prefixCommandHandler.loadCommands();
        await this.eventHandler.loadEvents();

        this.login(process.env.token);
    }
}