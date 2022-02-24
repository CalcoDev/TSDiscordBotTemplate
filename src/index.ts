import 'dotenv/config'
import {ExtendedClient} from "./structures/ExtendedClient";

export const client = new ExtendedClient();

client.start();