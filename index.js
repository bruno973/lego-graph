const {GraphQLServer} = require("graphql-yoga");

const csvThemePath = "./themes.csv";
const csvSetsPath = "./sets.csv";

const csv = require("csvtojson");

const dataObject = {

};

 function csvTransform (csvlink) {
   
        return csv().fromFile(csvlink);
          
        
};

async function objectConstructor () {
dataObject.theme = await csvTransform(csvThemePath);
dataObject.csvSetsPath = await csvTransform(csvSetsPath);
};

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


    








