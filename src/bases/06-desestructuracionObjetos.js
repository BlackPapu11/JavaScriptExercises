const person = {
    name: 'Tony',
    age: 45,
    codeName: 'Ironman'
}

const {name, age, codeName, power = 'No tiene poder' } = person

console.log(power)


const createHero = ({name, age, codeName, power}) => ({id: 121231312,name,age,codeName,power})


console.log(createHero(person))