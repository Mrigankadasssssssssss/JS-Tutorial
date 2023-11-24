/*             ARRAYS                  */

let fruits = ['mangoes','apple','pineapple']

console.log(fruits)

//console.log(fruits[0]) // how to access the array elements

// overwite concept

//fruits[1] = 'lichi'

//console.log(fruits)

// length
//console.log(fruits.length)

// join()
//console.log(fruits.join('-')) // within bracket we have to mention the seperator

// indexOf()

//console.log(fruits.indexOf('pineapple'))

//at()
//console.log(fruits.at(2))
//console.log(fruits.at(3))

// concat()
let newFruits = ['lichi','jackfruit','guava']
let updatedlist = fruits.concat(newFruits)
//console.log(updatedlist)

// + operator
//updatedlist = fruits+','+newFruits
//console.log(updatedlist)

// push()
let newList = updatedlist.push('kiwi')
//console.log(newList)
console.log(updatedlist)

//pop()
let newlist = updatedlist.pop()
console.log(newlist)
newlist = updatedlist.pop()
console.log(newlist)
console.log(updatedlist)
