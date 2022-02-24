import { SlashCommand } from "../../../structures/SlashCommand";

export default new SlashCommand({
    name: "ping",
    description: "replies with pong.",
    run: async ({ interaction }) => {
        interaction.followUp("pong");
    }
});