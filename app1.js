//Crea tu catalogo de Peliculas

alert("Crea tu propio Catalogo de películas")

class Pelicula {
    constructor(titulo, genero, año, ranking) {
        this.titulo = titulo
        this.genero = genero
        this.año = año
        this.ranking = ranking
    }
    obtenerInformacion() {
        return `${this.titulo} - ${this.genero} - ${this.ranking} (${this.año})`;
    }
}

//array contenedor
const catalogoPeliculas = []

//Ingresar informacion
function agregarUnaPelicula(){
    const titulo = prompt("Ingrese el titulo de la Pelicula: ")
    const genero = prompt("Ingrese el genero de la Pelicula: ")
    const ranking = prompt("Ingrese el Ranking de 1 a 5 de la Pelicula")
    const año = prompt("Ingrese el Año de la Pelicula")

    const pelicula = new Pelicula(titulo, genero, ranking, año)
    catalogoPeliculas.push(pelicula)

    console.log("Se agrego Pelicula!")
}
//funcion para mostrar lo agregado
function mostrarCatalogo(){
    console.log("Ctalogo de Peliculas: ")
    for(const pelicula of catalogoPeliculas){
        console.log(pelicula.obtenerInformacion())
    }
}

//funcion para buscar segun ranking


//Menu
while(true){
    const opciones = prompt("Seleccionar una opcion:\n1. - Agregar Pelicula\n2. - Mostrar Catalogo de Peliculas\n3. - Salir del Menu")
    switch(opciones){
        case '1':
            agregarUnaPelicula();
            break;
        case '2':
            mostrarCatalogo();
            break;
        case '3':
            console.log("Gracias por tu visita.")
    }
}
