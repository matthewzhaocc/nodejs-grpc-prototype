const userProtoPath = "./protos/Users.proto"

const grpc = require("grpc")
const protoLoader = require("@grpc/proto-loader")

const packageDefinition = protoLoader.loadSync(userProtoPath, {
    keepCase: true,
    longs: String,
    enums: String,
    arrays: true
})

let userProto = grpc.loadPackageDefinition(packageDefinition).UserService
const client = new userProto(
    "localhost:6969",
    grpc.credentials.createInsecure()
)

client.Get({}, (err, data) => {
    console.log(err)
    console.log(data)
})