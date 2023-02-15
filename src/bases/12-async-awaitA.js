const miPromesa = () =>{
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve('Tenemos un valor en la pro mesa')
        },1000)
    })
} 

const medirTiempoAsync = async() =>{
    console.log('Inicio')
    await miPromesa().then(console.log)
    console.log('Fin')
}

medirTiempoAsync()