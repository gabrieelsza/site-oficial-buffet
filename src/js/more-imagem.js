// const morePhotos = document.getElementById("#more-photo");
// const galeriaPhotos = document.getElementById("#galeria-grid");

// console.log(galeriaPhotos)


// morePhotos.addEventListener("click", () => {
// })

// function fillPhotos() {
//     const divPhotos = document.createElement("div");
//     divPhotos.classList.add("col-1");

//     divPhotos.innerHTML = `
//             <div class="col-1">
//                     <img src="./src/image/buffet.jpg" alt="" class="image-1" class="galeria-item">
//                     <img src="./src/image/image-buffet-pãos.jpg" alt="" class="image-2" class="galeria-item">
//                 </div>
//                 <div class="col-2">
//                     <img src="./src/image/image-buffet-exempla-luxo.jpg" alt="" class="image-3" class="galeria-item">
//                     <img src="./src/image/image-buffet-mesa - Copy.jpg" alt="" class="image-4" class="galeria-item">
//                     <img src="./src/image/image-buffet-frango - Copy.jpg" alt="" class="image-5" class="galeria-item">
//                 </div>
//                 <div class="col-3">
//                     <img src="./src/image/image-buffet-sobremesa - Copy.jpg" alt="" class="image-6"
//                         class="galeria-item">
//                     <img src="./src/image/image-buffet-suportes.jpg" alt="" class="image-7" class="galeria-item">
//                 </div>

//     `
//     galeriaPhotos.appendChild(divPhotos)
// }

// fillPhotos()]


// Array com novas colunas/fotos (adicione mais aqui)
const novasColunas = [
    {
        class: 'col-1',
        fotos: [
            { src: './src/image/buffet.jpg', alt: 'Nova 1' },
            { src: './src/image/image-buffet-pãos.jpg', alt: 'Nova 2' }
        ]
    },
    {
        class: 'col-2',
        fotos: [
            { src: './src/image/image-buffet-exempla-luxo.jpg', alt: 'Nova 3' },
            { src: './src/image/image-buffet-mesa.jpg', alt: 'Nova 4' },
            { src: './src/image/image-buffet-frango.jpg', alt: 'Nova 5' }
        ]
    },
    {
        class: 'col-3',
        fotos: [
            { src: './src/image/image-buffet-sobremesa.jpg', alt: 'Nova 3' },
            { src: './src/image/image-buffet-suportes.jpg', alt: 'Nova 4' },
        ]
    },
    {
        class: 'col-1',
        fotos: [
            { src: './src/image/buffet.jpg', alt: 'Nova 1' },
            { src: './src/image/image-buffet-pãos.jpg', alt: 'Nova 2' }
        ]
    }

];

let colunaAtual = 0;

const morePhotos = document.getElementById('more-photo'); // Sem #
const galeriaPhotos = document.getElementById('galeria-grid'); // Sem #

console.log(morePhotos)
console.log(galeriaPhotos)

morePhotos.addEventListener('click', () => {
    console.log("Ok")
    if (colunaAtual >= novasColunas.length) {
        alert('Sem mais fotos!');
        return;
    }

    const novaColuna = novasColunas[colunaAtual];
    const divColuna = document.createElement('div');
    divColuna.className = novaColuna.class;

    // Monta fotos da coluna
    novaColuna.fotos.forEach(foto => {
        const img = document.createElement('img');
        img.src = foto.src;
        img.alt = foto.alt;
        img.className = 'galeria-item'; // + class dinâmica se quiser
        divColuna.appendChild(img);
    });

    galeriaPhotos.appendChild(divColuna);
    colunaAtual++;
});