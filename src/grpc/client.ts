import { inspect } from "node:util";
import * as grpc from "@grpc/grpc-js";
import { AddressClient } from "./generated/address";

const addressClient = new AddressClient(
  "0.0.0.0:50051",
  grpc.credentials.createInsecure()
);

addressClient.getAllAddresses({}, (err, data) => {
  console.log("get all addresses");
  console.log(inspect(data, false, null, true));
});

addressClient.getAddress({ name: "John Doe" }, (err, data) => {
  console.log("get John Doe");
  console.log(inspect(data, false, null, true));
});
