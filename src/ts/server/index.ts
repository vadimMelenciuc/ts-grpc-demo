import * as grpc from "@grpc/grpc-js";
import { AddressService, server } from "./server-config";

// @ts-ignore
server.addService(AddressService, new AddressService());

server.bind("8084", grpc.ServerCredentials.createInsecure());

server.start();
