const modal = document.getElementById('imageModal');
const modalImg = document.querySelector('.modal-image');
const closeBtn = document.querySelector('.close');
const thumbnails = document.querySelectorAll('.thumbnail');

thumbnails.forEach(thumb => {
    thumb.addEventListener('click', () => {
        modal.style.display = "block";
        modalImg.src = thumb.getAttribute('data-full');
        modalImg.alt = thumb.alt;
    });

});

closeBtn.onclick = () => {
    modal.style.display = "none";
}

// closeBtn.addEventListener ('click', () =>{
//     modalstyle.display = "none";
// });


window.onclick = (event) => {
    if (event.target.classList.contains('modal-content')){
        modal.style.display = "none";
    }
}