// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']


function findMatching(array,string){
    return array.filter((array1)=>string.toLowerCase()===array1.toLowerCase())
    }


function fuzzyMatch(array,string){
    return array.filter((cbArray)=>cbArray[0]===string[0])
}

function matchName(array,string){
    return array.filter((cbArray)=>cbArray.name===string)
}