// Variables

const carrito = document.querySelector("#carrito");
const listaCarrito = document.querySelector("#lista-carrito tbody");
const vaciarCarritBtn = document.querySelector("#vaciar-carrito")
const listaVinos = document.querySelector("#lista-vinos");
let artCarrito = [] ;

cargarEventlisteners()
function cargarEventlisteners (){
    listaVinos.addEventListener("click", agregar_vino);

    //Eliminar cosas del carrito

    carrito.addEventListener("click", eliminarVino)
}

//Funciones

function agregar_vino(e){
    e.preventDefault();
    if(e.target.classList.contains("agregar-carrito")){
        vinoSeleccionado = e.target.parentElement.parentElement
        leerDatosVino(vinoSeleccionado)
    }
}

function eliminarVino (e){
    if (e.target.classList.contains('borrar-vino')){
        const vinoId =  e.target.getAttribute('data-id');
        const existe = artCarrito.some(vino =>(vino.id === vinoId && vino.cantidad > 1));
        
        if(existe){
            const vinos = artCarrito.map(vino => {
                if(vino.id === vinoId){
                    vino.cantidad--;
                }

                return vino;
            });

            artCarrito = [...vinos];
        }else{
            artCarrito = artCarrito.filter(vino => vino.id !== vinoId)
        }
        carritoHtml();
    }
}


function leerDatosVino(vino){
     //Objeto
    infoVino = {
        imagen: vino.querySelector('img').src,
        bodegaMarca: vino.querySelector('p').textContent,
        precio: vino.querySelector('.precio').textContent,
        id: vino.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    const existe = artCarrito.some(vino => vino.id === infoVino.id);
    if(existe){
        const vinos = artCarrito.map(vino => {
            if(vino.id === infoVino.id){
                vino.cantidad++;
                return vino;
            }else{
                return vino;
            }
        });
        artCarrito = [...vinos]

    }else{
        artCarrito = [...artCarrito, infoVino];
    }
    console.log(artCarrito)
    carritoHtml()
}



function carritoHtml () {

    limpiarHtml();

    artCarrito.forEach( vino => {
        const {imagen, bodegaMarca, cantidad, precio, id} = vino;
        const row = document.createElement('tr');

        row.innerHTML = `
        <td>
            <img src= "${imagen}" width= "50"></img>
        </td>
        
        <td>${bodegaMarca}</td>
        <td>${cantidad}</td>
        <td>${precio}</td>
        <td>
            <a href= "#" class= "borrar-vino" data-id= "${id}">X</a>
        </td>

        `;

        listaCarrito.appendChild(row)
    });
}


function limpiarHtml(){

    while(listaCarrito.firstChild){
        listaCarrito.removeChild(listaCarrito.firstChild)
    }
}















/*
const vinos = [
    {id:1, bodega:"Rutini Wines" , marca:"Malvec" , tipo:"Tinto" , varietal:"Cabernet" , volumen:"720ml" , precio:28300 },
    {id:2, bodega:"Catena Zapata" , marca:"Anélica Zapata" , tipo:"Tinto" , varietal:"Malbec" , volumen:"720ml" , precio:29520 },
    {id:3, bodega:"Luigi Bosca" , marca:"Luigi Bosca" , tipo:"Tinto" , varietal:"Malbec" , volumen:"720ml" , precio:12533 },
    {id:4, bodega: "Catena Zapata", marca:"D.V. Catena", tipo: "tinto", varietal: "Malvec", volumen: "720ml", precio:16614},
    {id:5, bodega: "Mosquita Muerta", marca: "Mosquita Muertas Winnes", tipo: "blanco", varietal:"Blend" , volumen: "720ml", precio:13527},
    {id:6, bodega: "La Rural", marca: "Trumpeter", tipo: "Tinto", varietal:"Cabernet sauvignon" , volumen: "750 mL", precio:6478},
    {id:7, bodega: "Catena Zapata", marca: "Angelica Zapata", tipo: "Tinto", varietal:"Cabernet franc" , volumen: "750ml", precio: 23200},
    {id:8, bodega: "Catena Zapata", marca: "Angélica Zapata", tipo: "Tinto", varietal:"Malbec" , volumen: "750 mL", precio:37800},
    {id:9, bodega: "Trapiche", marca: "Fond de Cave", tipo: "Tinto", varietal:"Malbec" , volumen: "750 mL", precio:7392},
    {id:10, bodega: "Rutini Wines", marca: "Trumpeter", tipo: "Blanco", varietal:"Chardonnay" , volumen: "750 mL", precio: 6478},
    {id:11, bodega: "Escorihuela", marca: "Escorihuela Gascón", tipo: "Tinto", varietal:"Malbec" , volumen: "750 mL", precio:6960},
    {id:12, bodega: "Mosquita Muerta Wines", marca: "Sapo De Otro Pozo Blend De Tintas", tipo: "Tinto", varietal:"Malbec" , volumen: "750 mL", precio:10318},
    {id:13, bodega: "Luigi Bosca", marca: "Luigi Bosca", tipo: "Tinto", varietal:"Malbec" , volumen: "750 mL", precio: 23520},
    {id:14, bodega: "Chandon", marca: "Chandon", tipo: "Blanco", varietal:" Chardonnay/Pinot Noir" , volumen: "750 mL", precio:9760},
    {id:15, bodega: "Rutini Wines", marca: "Rutini", tipo: "Blanco", varietal:"Chardonnay" , volumen: "750 cc", precio:24570},
    {id:16, bodega: "Catena Zapata", marca: "Saint Felicien", tipo: "Tinto", varietal:"Bonarda" , volumen: "750 mL", precio: 33620},];





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


/*
let preguntar = prompt("¿Te interesa ver vinos caros?")

if (preguntar == "si"){
    console.log(actualizado1)
    alert("AVISO: LAS 12 CUOTAS TIENEN UN INTERÉS DEL 10% Y LAS COMPRAS DE UN SOLO PAGO TIENEN UN DESCUENTO DEL 10%")

}else if(preguntar == "no"){
    console.log(actualizado2)
    alert("AVISO: LAS 12 CUOTAS TIENEN UN INTERÉS DEL 10% Y LAS COMPRAS DE UN SOLO PAGO TIENEN UN DESCUENTO DEL 10%")
}else{
    alert("no entendi lo que dijiste")
}


let cuotas = parseInt (prompt ("ingresa el numero de cuotas que vas a hacer"))
let preciofinal = parseFloat (prompt("ingresa el precio final"))

function CalcularCuotas(){
if (cuotas ==3 || cuotas ==6){
    resultado = preciofinal/cuotas
    alert("tus cuotas a pagar por mes son " + (Math.ceil(resultado)))

}else if ( cuotas == 12){
    resultado2 = (preciofinal*1.10) / 12
    alert("Te hemos recargado un 10%, asi quedan tus cuotas " + (Math.ceil(resultado2)))

}else if( cuotas == 1){
    resultado3 = preciofinal/1.10
    alert("Te hemos descontado un 10%, asi quedan tus cuotas " + (Math.ceil(resultado3)))

}else{
    alert("lo siento, solo puedes hacer cuotas de 1, 3, 6 o 12")
}
}

CalcularCuotas()

*/
