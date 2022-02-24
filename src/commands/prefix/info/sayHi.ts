import {PrefixCommand} from "../../../structures/PrefixCommand";

export default new PrefixCommand("sayHi", args => {
    if (args.args.length == 0)
        args.message.channel.send("Sup!");
    else
        args.message.channel.send(`Sup${args.args.splice(0, args.args.length - 1).reduce((a, b) => `, ${a}, ${b}`)} and ${args.args[args.args.length - 1]}`);

    return {
        succeeded: true
    };
})