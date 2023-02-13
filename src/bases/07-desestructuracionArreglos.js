const characters = ['Goku', 'Vegeta', 'Trunks', 'Goten']

const [,,t] = characters

console.log(t)

const returnArray = ([letters, numbers]) => {
    return [letters, numbers]
}

const [letters, numbers] = returnArray(['XYZ',987]) 
console.log(letters,numbers)

