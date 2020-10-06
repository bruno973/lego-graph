const {sets: db} = require("../database");
// I search my datas in my database folder, but i only want the themes data, so i use the destructured syntax
// I rename my themes data as DB because i would like to use the theme name in my methods
class Set {
    constructor(data) {
        for (const property in data) {
            this[property] = data[property];
        }
    }

    static async findAll() {
        const sets = await db();
        // I map the results, each object in theme has to be a new Instance of Theme.
        return sets.map(oneSet => new Set(oneSet));
    }

    static async findOne(id) {
        // Beware because of csv format ids are strings
        try {
        const sets = await db();
        return new Set (sets.find(returnedSet => returnedSet.set_num === id));
    } catch (error) {console.log(error);}
    }
    static async findByTheme(themeId) {
        try {
        const sets = await db();
        // Here I filter all corresponding themes who match the id and stock them in a const
        const setsToReturn = await sets.filter(filteredSets => filteredSets.theme_id === themeId);
        // Then i map them all to a new instance of Theme
        return setsToReturn.map(oneSet => new Set(oneSet));}
        catch (error) {console.log(error);}
    }
}

module.exports = Set;
