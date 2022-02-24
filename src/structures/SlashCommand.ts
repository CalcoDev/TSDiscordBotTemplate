import {ISlashCommand} from "../typings/SlashCommands";

export class SlashCommand {
    constructor(commandOptions: ISlashCommand) {
        Object.assign(this, commandOptions);
    }
}