function toggleMenu() {
    let myNav = document.getElementById
        ('myNavbar');
    console.log("clase de navbar:", myNav.className);

    if (myNav.className === 'navbar') {
        myNav.className += " responsive"
    } else {
        myNav.className = "navbar"
        console.log("Clase de navbar:", myNav.className);
    }

}
document.getElementById('boton').addEventListener('click',toggleMenu);