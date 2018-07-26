import { gql } from "apollo-server";
import { eosio } from "./eosio";
import { eosforumdapp } from "./eosforumdapp";
import { authorization } from "./templates";

// The GraphQL schema in string form
export const typeDefs = gql`
    schema {
        query: Query
    }
    type Query {
        version: String
        license: String
        author: String
        contributors: [String]
    }
    ${authorization}
    ${eosio}
    ${eosforumdapp}
`;