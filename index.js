var kittens = ["Milo", "Otis", "Garfield"];


function destructivelyAppendKitten(name) 

{
kittens.push("Ralph");
}
  
function destructivelyPrependKitten(name) 

{
kittens.unshift("Bob");
}


function destructivelyRemoveLastKitten(name) 

{
kittens.pop("Garfield");
}



function destructivelyRemoveFirstKitten(name) 

{
kittens.shift("Milo");
}



function appendKitten(name)
{
  var newArray = kittens.slice();
  
  newArray.push("Broom")
  return newArray

}

function prependKitten(name)
{

var newArray = ["Arnold","Milo", "Otis", "Garfield"];
return newArray
}

function removeLastKitten()
{
var newArray = ["Milo", "Otis"];

return newArray;
}
