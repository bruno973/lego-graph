const {GraphQLServer} = require("graphql-yoga");

const Theme = require("./app/models/Theme");
const Set = require("./app/models/Set");





    
    const typeDefs = `
    type Query {
    
        theme(id: String!): Theme!
        themes: [Theme]
        set(set_num: String!): Set!
        sets: [Set]
    }

    type Theme {
        id: String!
        name: String!
        parent: Theme   
        children: [Theme]
        sets: [Set]
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
        },

        Set: {
            theme: ({theme_id}) => Theme.findOne(theme_id)
        },
        Theme: {
            parent: ({set_id}) => Theme.findOne(set_id),
            children: ({ id }) => Theme.findByParent(id),
            sets: ({id}) => Set.findByTheme(id)
        }

    }
    const server = new GraphQLServer({typeDefs,resolvers});

    server.start(() => {
        console.log("server is running on localhost");
    })




    








