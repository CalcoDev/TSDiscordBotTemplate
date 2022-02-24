import {ClientEvents} from "discord.js";
import {TClientEvent} from "../typings/Events";

export class Event<T extends TClientEvent> {
    public event: T;
    public run: ( ...args: ClientEvents[T] ) => any;

    constructor(event: T, run: (...args: ClientEvents[T]) => any) {
        this.event = event;
        this.run = run;
    }
}