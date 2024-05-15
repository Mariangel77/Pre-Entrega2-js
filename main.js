
  
const vinos = [
    {id:1, bodega:"Rutini Wines" , marca:"Malvec" , tipo:"Tinto" , varietal:"Cabernet" , volumen:"720ml" , precio:28300 },
    {id:2, bodega:"Catena Zapata" , marca:"Anélica Zapata" , tipo:"Tinto" , varietal:"Malbec" , volumen:"720ml" , precio:29520 },
    {id:3, bodega:"Luigi Bosca" , marca:"Luigi Bosca" , tipo:"Tinto" , varietal:"Malbec" , volumen:"720ml" , precio:12533 },];



const VinosCaros = vinos.filter((el) => el.precio >= 20000)
const VinosBaratos = vinos.filter((el) => el.precio <= 20000)

const actualizado1 = VinosCaros.map((el) =>{
    return{
        bodega: el.bodega,
        precio: el.precio * 1.25
    }
})


const actualizado2 = VinosBaratos.map((el) =>{
    return{
        bodega: el.bodega,
        precio: el.precio * 1.25
    }
})

let preguntar = prompt("¿Te interesa ver vinos caros?")

if (preguntar == "si"){
    console.log(actualizado1)

}else if(preguntar == "no"){
    console.log(actualizado2)
}else{
    alert("no entendi lo que dijiste")
}

