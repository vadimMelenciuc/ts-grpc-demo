import * as grpc from "@grpc/grpc-js";
import {
  AddressBook,
  AddressRequest,
  AddressServer,
  AddressService,
  Person,
  Person_PhoneType,
} from "./generated/address";
import { Empty } from "./generated/google/protobuf/empty";
import { db } from "../db";

class AddressSrv implements AddressServer {
  [name: string]: grpc.UntypedHandleCall;
  constructor() {
    //
  }
  public getAllAddresses(
    call: grpc.ServerUnaryCall<Empty, AddressBook>,
    callback: grpc.sendUnaryData<AddressBook>
  ) {
    const response = db;
    callback(null, response);
  }

  public getAddress(
    call: grpc.ServerUnaryCall<AddressRequest, Person>,
    callback: grpc.sendUnaryData<Person>
  ) {
    const response = db.people[0];
    callback(null, response);
  }
}

const server = new grpc.Server();
server.addService(AddressService, new AddressSrv());
server.bindAsync(
  "0.0.0.0:50051",
  grpc.ServerCredentials.createInsecure(),
  () => {
    console.log("starting server");
    server.start();
  }
);
