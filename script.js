var list = ["cat", "dog", "monkey", "elephant", "zebra", "beaver"]
console.log()

function pickAnimal(list){
  var item = list[Math.floor(Math.random()*list.length)];
  console.log(item)
}

var otherList = ["fish", "Gorilla", ""]

pickAnimal()
