import {createSchema} from "graphql-yoga";
import {cv} from "./Resolvers/cv";

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