// Write your solution here!

let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(){
    cats.push("Ralph");
}

function destructivelyPrependCat(){
    cats.unshift("Bob");
}


function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(){
    const newcats = [...cats,"Broom"]
    return newcats;
}

function prependCat(){
    const newCats2 = ["Arnold", ...cats]
    return newCats2;
}

function removeLastCat(){
    const newCats3 = cats.slice(0,cats.length-1)
    return newCats3;
}

function removeFirstCat(){
    const newCats4 = cats.slice(1); 
    return newCats4;
}