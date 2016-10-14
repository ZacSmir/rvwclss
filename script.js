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

}

pickTwoAnimals(list)
