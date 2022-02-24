import { globPromise, importFile } from "../helpers";
import { Event } from "./Event";
import {ExtendedClient} from "./ExtendedClient";
import {TClientEvent} from "../typings/Events";

export class EventHandler {
    private client: ExtendedClient;

    constructor(client: ExtendedClient) {
        this.client = client;
    }

    public async loadEvents() {
        const eventFiles = await globPromise(`${__dirname}/../events/*{.ts,.js}`);
        for (const filePath of eventFiles) {
            const event: Event<TClientEvent> = await importFile(filePath);
            this.client.on(event.event, event.run);
        }
    }
}