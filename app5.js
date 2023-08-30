//------Catalogo de Películas------//

//- Clase -//
class Pelicula {

    constructor(titulo, genero, ano, ranking) {
        this.titulo = titulo
        this.genero = genero
        this.ano = ano
        this.ranking = ranking
    }
    obtenerInformacion() {

        return `Titulo: ${this.titulo} - Genero: ${this.genero} - Año: ${this.ano} - Ranking: (${this.ranking}*)`
    }
   
}
//- Almacena Peliculas en array -//
const catalogoPeliculas = []

//- Agrego Peliculas -//
function agregarPelicula() {

    let titulo = prompt("Ingrese el 'TITULO' de la pelicula que desea agregar al catalogo: ")
    let genero = prompt("Ingrese el 'GENERO' de la pelicula ingresada: ")
    let ano = prompt("Ingrese el 'AÑO' de estreno la pelicula: ")
    let ranking = prompt("Ingrese el 'RANKING' de 1-10, que le quiere dar: ")

    let pelicula = new Pelicula(titulo, genero, ano, ranking)
    catalogoPeliculas.push(pelicula)

    alert("Se agrego pelicula al catalogo!")
}

//- Mostrar Catalogo -//
function mostrarCatalogo() {

    let mensaje = "Catalogo de peliculas: \n"

    for (let i = 0; i < catalogoPeliculas.length; i++) {

        mensaje += "=======================================" + "\n"
        mensaje += catalogoPeliculas[i].obtenerInformacion() + "\n"
    }
    alert(mensaje)
}


alert("Crea tu propio Catalogo de películas")

//- MENU -//
while (true) {
    let opcionMenu = Number(prompt("Seleccione una opción:\n\n1. Agregar una 'Pelincula'\n2. Mostrar Catalogo\n3. Salir\n"))

    switch (opcionMenu) {

        case 1:
            agregarPelicula();
            break;
        case 2:
            mostrarCatalogo();
            break;
        case 3:
            alert("Gracias por crear el Catalogo de Peliculas!")
            break;
        default:
            alert("Opción no valida!")
    }
}

