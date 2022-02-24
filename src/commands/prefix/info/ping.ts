import {PrefixCommand} from "../../../structures/PrefixCommand";

export default new PrefixCommand("ping", args => {
    args.message.channel.send("Pong!");
    return {
        succeeded: true
    };
})