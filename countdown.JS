document.getElementById("date").textContent = new Date().getFullYear();

//  menu burger
 const links = document.querySelectorAll ('nav li')

icons.addEventListener("click", () => {
    nav.classList.toggle("active");
  });

links.forEach((link) => {
    link.addEventListener('click', () =>{
        nav.classList.remove("active");
    });
});

 // Appeler la fonction une fois au chargement de la page pour éviter un délai initial
 updateCountdown();

 let largeurEcran = window.innerWidth;
 if(largeurEcran < 840){
    me.src="img/image-moi.webp"
 };