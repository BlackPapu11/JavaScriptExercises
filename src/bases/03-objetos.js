const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion:{
        ciudad: 'New York',
        zip: 5588774,
        lat: 14.25654,
        lng: 34.00012
    }
}

const persona2 = { ...persona };
persona2.nombre="Peter"

console.log(persona)
console.log(persona2)
