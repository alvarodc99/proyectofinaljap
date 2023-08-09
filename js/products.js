// const autos101 = 'https://japceibal.github.io/emercado-api/cats_products/101.json';

// const contenedor = document.getElementsByClassName('producto');

// function mostrarProducto(dataArray){
//     for (const item of dataArray){
//         contenedor.innerHTML += <p> $ {item.name} $ {item.description} </p>
//     }
// }


// fetch(autos101)
//   .then(response => response.json())
//   .then(data => {
//     mostrarProducto(data.products);
 
//   });




const autos101 = 'https://japceibal.github.io/emercado-api/cats_products/101.json';

const contenedor = document.getElementsByClassName('producto')[0]; 

function mostrarProducto(dataArray) {
    for (const item of dataArray) {
        const productDiv = document.createElement('div');
        productDiv.classList.add('div-producto');
        const productHTML = `
            <img src="${item.image}">
            <p class="titulo-producto"> ${item.name} - ${item.currency} ${item.cost}</p>
            <p class="descripcion-producto"> ${item.description}</p>
            <p class="vendidos-producto"> ${item.soldCount} vendidos</p>

        `;
        productDiv.innerHTML = productHTML;

        contenedor.appendChild(productDiv);
    }
}

fetch(autos101)
    .then(response => response.json())
    .then(data => {
        mostrarProducto(data.products);
    });
