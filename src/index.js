let firstName = 'Daniel';
let lastName;

console.log(`${firstName || 'No name'} ${lastName || 'No lastname'}`)

const isActive = true

const message = (isActive === true) ? 'Activo' : 'Inactivo'

console.log(message)