const userProtoPath: string = "./protos/Users.proto"

import * as grpc from "grpc";
import * as protoLoader from "@grpc/proto-loader"

const packageDefinition = protoLoader.loadSync(userProtoPath, {
    keepCase: true,
    longs: String,
    enums: String,
    arrays: true
})

let userProto = grpc.loadPackageDefinition(packageDefinition)

const server = new grpc.Server()

server.addService(userProto.UserService.service, {
    Get: (_, callback) => {
        console.log("hi there")
        callback(null, {"name": "hello"})
    }
})

server.bind("0.0.0.0:6969", grpc.ServerCredentials.createInsecure())

server.start()