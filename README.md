# GRPC

## Protobuf to Typescript

1. Create a proto file.
1. Install ProtoC (compiler) tool
1. Install the typescript plugin for protoc tool `npm install ts-proto`
1. Execute the compiler command:

   ```sh
    protoc \
    --plugin="./node_modules/.bin/protoc-gen-ts_proto" \
    --ts_proto_opt=esModuleInterop=true \
    --ts_proto_out="./src/ts/generated" \
    address.proto
   ```

1. Play around with the generated TS code.

## Protobuf with Google RPC (GRPC)

1. Edit the service in the proto file:

   ```proto
   service SearchAddress {
      rpc GetAllAddresses(google.protobuf.Empty) returns (AddressBook);
      rpc GetAddress(AddressRequest) returns (AddressBook);
   }
   ```

1. Try the implementation with the actual compiler.
1. Make a new script compiler oriented for grpc.

   ```sh
   protoc \
    --plugin="./node_modules/.bin/protoc-gen-ts_proto" \
    --ts_proto_opt=outputServices=grpc-js \
    --ts_proto_out="./src/grpc/generated" \
    address.proto
   ```

1. Set the server
1. Set the client
1. Start a connection.

## Documentation of interest

- [google/protobuf api documentation](https://github.com/protocolbuffers/protobuf/tree/main/src/google/protobuf)
- [proto3 language guide](https://protobuf.dev/programming-guides/proto3/)
- [Required and optional discussion](https://stackoverflow.com/questions/31801257/why-required-and-optional-is-removed-in-protocol-buffers-3)
- [Protobuf third party implementation](https://github.com/protocolbuffers/protobuf/blob/main/docs/third_party.md)
- [GRPC package documentation](https://grpc.github.io/grpc/node/index.html)
- [GRPC examples](https://github.com/grpc/grpc/tree/master/examples/node)
- [TS PROTO COMPILER](https://github.com/stephenh/ts-proto#basic-grpc-implementation)
- [TS PROTO NPM](https://www.npmjs.com/package/ts-proto)
- [GRPC API types short video](https://www.youtube.com/watch?v=pzxy25ho5WY)
