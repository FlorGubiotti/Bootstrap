//IMPORTACIONES
import { getAllProducts } from "../service/products.js"

//INSTANCIAS DE ELEMENTOS
const contenedor_por_hacer = document.getElementById("contenedor-por-hacer");
const contenedor_en_proceso = document.getElementById("contenedor-en-produccion");
const contenedor_por_testear = document.getElementById("contenedor-por-testear");
const contenedor_completada = document.getElementById("contenedor-completada");

const fillProducts = async () => {
    const products = await getAllProducts()

    products.forEach(product => {

        const estado = product.estado;

        let container;

        if (estado === "Por Hacer") {
            container = contenedor_por_hacer
        } else if (estado === "En Produccion") {
            container = contenedor_en_proceso
        } else if (estado === "Por Testear") {
            container = contenedor_por_testear
        } else if (estado === "Completada") {
            container = contenedor_completada
        }

        //CREAR ELEMENTO EN LA CATEGORIA
        container.innerHTML += `
        <div class="col">
            <div class="card h-100">
                <img
                    style="min-height: 300px; max-height: 300px" 
                    class="card-img-top"
                    src="${product.foto}" 
                alt="">
                
                <div class="card-boody p-4">
                    <div class="text-center">
                        <h5 class="fw-bolder">${product.titulo}</h5>
                        <span>${product.tiempo} días restantes</span>
                    </div>
                </div>
               
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div class="text-center d-flex gap-1 justify-content-center">
                        <a href="/detalle.html?id=${product.id}" class="btn btn-outline-secondary mt-auto">
                        Ver mas
                        </a>
                        <a href="" class="btn btn-outline-success mt-auto">
                        Completada
                        </a>
                    </div>
                </div>
            </div>

        </div>
            `
    });



}

fillProducts()