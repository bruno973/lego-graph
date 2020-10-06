const {GraphQLServer} = require("graphql-yoga");

const Theme = require("./app/models/Theme");
const Set = require("./app/models/Set");





    
    const typeDefs = `
    type Query {
    
        theme(id: String!): Theme
        themes: [Theme]
        set(id: String!): Set
        sets: [Set]
    }

    type Theme {
        id: String!
        name: String!
        parent_id: String!   
    }

    type Set {
        set_num: String!
        name: String!
        year: String!
        theme: Theme!
        num_parts: String!
    } `;

    const resolvers = {

        Query: {
            theme: async (_, { id }) => Theme.findOne(id),
            themes: async _ => Theme.findAll(),
            set: async (_, { id }) => Set.findOne(id),
            sets: async _ => Set.findAll()
        }

    }
    const server = new GraphQLServer({typeDefs,resolvers});

    server.start(() => {
        console.log("server is running on localhost");
    })




    








