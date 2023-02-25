import * as grpc from "@grpc/grpc-js";
import {
  AddressBook,
  AddressRequest,
  Person,
  Address,
} from "../generated/address";
import { db } from "../../db";
import { Empty } from "../generated/google/protobuf/empty";

export class AddressService implements Address {
  constructor() {
    //
  }
  public async GetAddress(request: AddressRequest): Promise<Person> {
    return db.people[0];
  }
  public async GetAllAddresses(request: Empty): Promise<AddressBook> {
    return db;
  }
}

export const server = new grpc.Server();

// @ts-ignore
server.addService(Address, new AddressService());

server.bind("8084", grpc.ServerCredentials.createInsecure());

server.start();
