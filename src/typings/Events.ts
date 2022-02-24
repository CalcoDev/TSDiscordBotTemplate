import {ClientEvents} from "discord.js";

// Keyof returns a union type of all the possible values of ClientEvents. (enum -> string union)
export type TClientEvent = keyof ClientEvents; // Type alias of union type of all client events.