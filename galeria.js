// function cambiarImagen(src) {
//     document.getElementById('imagenGrande').src = src;
// }


// //////////////////////////
const imagenPrincipal = document.getElementById('imagenPrincipal');
const miniaturas = document.querySelectorAll('.miniatura');
// const miniaturas = document.getElementsByClassName('miniatura');

const miniaturasArray = [
    {imagen: "img/webPc.jpg", altImagen: "web 1"},
    {imagen: "img/web-design.jpg", altImagen: "web-design"},
    {imagen: "img/code.jpg", altImagen: "code"},
    {imagen: "img/seo.jpg", altImagen: "seo"},
]

miniaturas.forEach(miniatura => {
    miniatura.addEventListener('click', function(e) {
        let idImagen = e.currentTarget.id;
        imagenPrincipal.src = miniaturasArray[idImagen].imagen;
        imagenPrincipal.alt = miniaturasArray[idImagen].altImagen;
    });
});

// ///////////////////////