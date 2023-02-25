#!/bin/sh

# Compile with ts-proto
protoc \
    --plugin="./node_modules/.bin/protoc-gen-ts_proto" \
    --ts_proto_opt=esModuleInterop=true \
    --ts_proto_out="./src/ts/generated" \
    address.proto