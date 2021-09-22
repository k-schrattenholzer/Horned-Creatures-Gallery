import creaturesList from "./data.js";

export const keywordOptions = 
    [...new Set(
        creaturesList.map(
        lilbean => {
        Object.keys(lilbean)
        return lilbean.keyword    
        }))]

// export const keywordOptions = Array.from(
//     creaturesList.map(
//         lilbean => {
//         Object.keys(lilbean)
//         return lilbean.keyword    
//         }))

export const hornsOptions = 
    [...new Set(
        creaturesList.map(
        lilbean => {
        Object.keys(lilbean)
        return lilbean.horns    
        }))]
