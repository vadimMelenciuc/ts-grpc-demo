import { inspect } from "node:util";
import { AddressBook, Person_PhoneType } from "./generated/address";
import { db } from "../db";

const serializeMessage = AddressBook.encode(db).finish();

console.log(serializeMessage);

const deserializeMessage = AddressBook.decode(serializeMessage);

console.log(inspect(deserializeMessage));
