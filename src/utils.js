import creaturesList from "./data.js";

export const keywordOptions = Array.from(
    creaturesList.map(
        lilbean => {
        Object.keys(lilbean)
        return lilbean.keyword    
        }))

export const hornsOptions = Array.from(
    creaturesList.map(
        lilbean => {
        Object.keys(lilbean)
        return lilbean.horns    
        }))
