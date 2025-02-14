const firstName="med"
const lastName="amine"
//console.log(firstName+""+lastName)
//console.log(`${firstName} ${lastName}`)
const user= {
    firstUserName:"alex",
    lastName,
    age:24
}
//return console.log({...user,jobTitle:"Developer"})


const arr1 = [1,2,3,4,5]
const arr2 = [6,7,8,9]
const arr3 = [...arr1,...arr2]
// return console.log(arr3)

//desctructing object
const {firstUserName,age}=user
//return console.log(firstUserName)

const [c,d,e]=arr3
//return console.log(c,d,e)