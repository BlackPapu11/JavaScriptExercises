
const saludar = (nombre = "Peter") =>{
    return `Hola ${nombre}`
}

//const nombre = 'Tony'
console.log(saludar())

const getUser = () =>({uid:'ABC123',username:'Tony001'})
//console.log(getUser())

const heroes = [{
    id:1,
    name: 'Batman'
}, 
{
    id:2,
    name: 'Superman'
}]

let flag = false;

const exist = (nameIn) => {
    
    for(let i = 0; i < heroes.length; i++){
        if(heroes[i].name === nameIn){
            flag = true;
            break;
        }    
    }
    return flag;
    
}


const someExist = (name) =>{
    return heroes.some((element) => element.id===name)
}

const {id} = heroes.find((heroe) => heroe.id === 2)

//console.log(exist('Superman'))
//console.log(someExist(3))
console.log(id)
