
      /*  Menu  */

  function openMenu() {
    document.getElementById("menu-normal").classList.toggle("show");
  }


  window.onclick = function(event) {
  if (!event.target.matches('.burger')) {
    let dropdowns = document.getElementsByClassName("menu-normal");
    let bruh;
    for (bruh = 0; bruh < dropdowns.length; bruh++) {
      let openDropdown = dropdowns[bruh];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}



     /*  Form  */


       window.onload = function() {
           document.getElementById('contact-form').addEventListener('submit', function(event) {
               event.preventDefault();
               // generate a five digit number for the contact_number variable
               this.contact_number.value = Math.random() * 100000 | 0;
               // these IDs from the previous steps
               emailjs.sendForm('gmailOlga', 'defaultTemplate', this)
                   .then(function() {
                       console.log('SUCCESS!');
                       document.getElementById('success').style.display="block";
                   }, function(error) {
                       console.log('FAILED...', error);
                       document.getElementById('failure').style.display="block";

                   });
           });
       }
