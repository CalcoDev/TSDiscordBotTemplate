import {Event} from "../structures/Event";
import {client} from "../index";

export default new Event("messageCreate", message => {
    if (message.author.bot)
        return;

    if (!message.content.startsWith(client.prefixCommandHandler.commandPrefix))
        return;

    const command = message.content.substring(client.prefixCommandHandler.commandPrefix.length).split(" ");
    const result = client.prefixCommandHandler.runCommand(command[0], {
        message: message,
        args: [...command.slice(1)]
    });

    if (!result.succeeded)
        message.channel.send(result.errorMessage);
})