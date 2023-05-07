import { createSchema } from "graphql-yoga";
import { user } from "./Resolvers/query/user";
import {cv} from "./Resolvers/cv";
import { skill } from "./Resolvers/query/skill";
const fs = require("fs");
const path = require("path");
const schemaDir = path.join(__dirname, "schema");
const schemaFiles = fs.readdirSync(schemaDir);
export const schema = createSchema({
    typeDefs: schemaFiles
        .map((file) => fs.readFileSync(path.join(schemaDir, file), "utf-8"))
        .join("\n"),
    resolvers: {
        ...cv
    },
});