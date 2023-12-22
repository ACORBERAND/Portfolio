 // Date de fin du compte à rebours (année, mois - 1, jour, heure, minute, seconde)
 var endDate = new Date(2024, 3, 1, 19, 0, 0); // Janvier est représenté par 0

 function updateCountdown() {
     var currentDate = new Date();
     var timeDifference = endDate - currentDate;

     if (timeDifference <= 0) {
         document.getElementById('countdown').innerHTML = 'Le compte à rebours est terminé !';
     } else {
         var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
         var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
         
         document.getElementById('countdown').innerHTML = days + ' J - ' + hours +' H';
     }
 }

 // Mettre à jour le compte à rebours chaque seconde
 setInterval(updateCountdown, 1000);

 // Appeler la fonction une fois au chargement de la page pour éviter un délai initial
 updateCountdown();