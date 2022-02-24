import {PrefixCommand} from "../../../structures/PrefixCommand";

export default new PrefixCommand("add", args => {
    if (args.args.length < 2) {
        return {
            succeeded: false,
            errorMessage: "Not enough arguments!"
        };
    }

    let sum = args.args.map(a => parseInt(a)).reduce((a, b) => a + b);
    args.message.channel.send(sum.toString());
    return {
        succeeded: true
    }
})