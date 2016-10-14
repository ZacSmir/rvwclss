var list = ["cat", "dog", "monkey", "elephant", "zebra", "beaver"]
console.log()

function pickAnimal(list){
  var item = list[Math.floor(Math.random()*list.length)];
  console.log(item)
} 

var otherList = ["fish", "Gorilla", "Mosquitoe", "Cow"]

pickAnimal(otherList)

function pickTwoAnimals(listOne, listTwo) {
  var doublelist = listOne.concat(listTwo)
  var item = doublelist[Math.floor(Math.random()*doublelist.length)];
  console.log(item)
  return item
}

pickTwoAnimals(list, otherList) 
function animalNameLong(name){
console.log(name.length)
}

for (i = 0; i < 10; i++) { 
  console.log("hi");
}

var item = list[Math.floor(Math.random()*list.length)];
if (item.length == 3) {
console.log("FISH")
}

  
function meetYou(name){
  console.log("nice to meet you" + name)
}
meetYou("bob")

function somethingElse(responce)
{
console.log("generic response idk" + responce)
}

somethingElse()