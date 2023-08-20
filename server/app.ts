import { ApolloServer } from "apollo-server-express";
import typeDefs from "./schema/schema";
import resolvers from "./reslover/reslover";
import express from "express";



async function main() {

    const server = new ApolloServer({
        typeDefs,
        resolvers
    })

    await server.start();

    const app = express();
    server.applyMiddleware({ app });

    app.listen(4000, () => {
        console.log(`Server is running on port http://localhost:4000${server.graphqlPath}`)
    })
}

main().catch((err) => {
    console.log(err)
})