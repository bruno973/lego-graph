const {themes: db} = require("../database");
// I search my datas in my database folder, but i only want the themes data, so i use the destructured syntax
// I rename my themes data as DB because i would like to use the theme name in my methods
class Theme {
    constructor(data) {
        for (const property in data) {
            this[property] = data[property];
        }
    }

    static async findAll() {
        const themes = await db();
        // I map the results, each object in theme has to be a new Instance of Theme.
        return themes.map(oneTheme => new Theme(oneTheme));
    }

    static async findOne(id) {
        // Beware because of csv format ids are strings
        try {
        const themes = await db();
        return new Theme (themes.find(returnedThemes => returnedThemes.id === id));
    } catch (error) {console.log(error);}
    }
    static async findByParent(parentId) {
        try {
        const themes = await db();
        // Here I filter all corresponding themes who match the id and stock them in a const
        const themesToReturn = await themes.filter(filteredThemes => filteredThemes.parent_id === parentId);
        // Then i map them all to a new instance of Theme
        return themesToReturn.map(oneTheme => new Theme(oneTheme));}
        catch (error) {console.log(error);}
    }
}

module.exports = Theme;