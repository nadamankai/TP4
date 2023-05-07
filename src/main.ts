import { createServer } from "node:http";
import { createYoga } from "graphql-yoga";
import { schema } from "./schema";
import { db } from "./db/db";
const yoga = createYoga({ schema, context: { db: db } });
const server = createServer(yoga);
server.listen(4000, () => {
    console.info(`
Server is running on
http://localhost:4000/graphql`
    );
});