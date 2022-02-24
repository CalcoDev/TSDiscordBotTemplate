import {Message} from "discord.js";

export interface IPrefixCommand {
    name: string;
    run: TPrefixCommandDelegate;
}

export type TPrefixCommandDelegateArgs = {
    message: Message,
    args: any[]
}

export type TPrefixCommandDelegate = (args: TPrefixCommandDelegateArgs) => TPrefixCommandDelegateReturn;
export type TPrefixCommandDelegateReturn = {
    succeeded: boolean,
    errorMessage?: string,
};