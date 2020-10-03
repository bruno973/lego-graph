const {GraphQLServer} = require("graphql-yoga");



objectConstructor().then(() => {
    
    const typeDefs = 

    type Theme {
        
    }

    const resolvers = {

    }
    const server = new GraphQLServer({typeDefs,resolvers});

    server.start(() => {
        console.log("server is running on localhost");
    })

})


    








