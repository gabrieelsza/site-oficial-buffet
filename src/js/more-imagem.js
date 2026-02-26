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

const morePhotos = document.getElementById('more-photo');
const galeriaPhotos = document.getElementById('galeria-grid'); 

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