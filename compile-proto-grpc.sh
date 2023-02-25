#!/bin/sh

# Compile with ts-proto
protoc \
    --plugin="./node_modules/.bin/protoc-gen-ts_proto" \
    --ts_proto_opt=outputServices=grpc-js \
    --ts_proto_out="./src/grpc/generated" \
    address.proto