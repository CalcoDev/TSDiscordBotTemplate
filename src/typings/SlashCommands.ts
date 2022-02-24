import {ExtendedClient} from "../structures/ExtendedClient";
import {
    ChatInputApplicationCommandData,
    CommandInteraction,
    CommandInteractionOptionResolver,
    PermissionResolvable,
    ApplicationCommandDataResolvable
} from "discord.js";

export interface ISlashCommandRunArgs {
    client: ExtendedClient;
    interaction: CommandInteraction;
    args: CommandInteractionOptionResolver
}

export type TSlashCommandDelegate = (options: ISlashCommandRunArgs) => any;

export interface ISlashCommand extends ChatInputApplicationCommandData {
    userPermissions?: PermissionResolvable[];
    run: TSlashCommandDelegate;
}

export interface ISlashCommandRegisterOptions {
    guildId?: string;
    commands: ApplicationCommandDataResolvable[];
}