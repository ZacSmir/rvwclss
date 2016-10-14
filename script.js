var list = ["cat", "dog", "monkey", "elephant", "zebra", "beaver"]
console.log()

function pickAnimal(list){
  var item = list[Math.floor(Math.random()*list.length)];
  console.log(item)
} 

var otherList = ["fish", "Gorilla", "Mosquitoe", "Cow"]

//pickAnimal(otherList) This works. I just commented it out bc too many things running at once

function pickTwoAnimals(listOne, listTwo) {
  var doublelist = listOne.concat(listTwo)
  var item = doublelist[Math.floor(Math.random()*doublelist.length)];
  console.log(item)
}

//pickTwoAnimals(list, otherList) This works. I just commented it out bc too many things running at once

function animalNameLong(name){
console.log(name.length)
}

animalNameLong()
