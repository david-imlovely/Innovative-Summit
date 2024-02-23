// code for scrolling into contact
function contact() {
  const element = document.getElementById("contact");
  element.scrollIntoView();
}

// code for sending emails
function sendEmail() {
  Email.send({
    SecureToken: "616dbe87-e608-4cb0-9157-e09b597f2123",
    To: "ogunduboyeseyi@gmail.com",
    From: "victortimileyin2000@gmail.com",
    Subject: "Probably a new sponsor",
    Body:
      "\n Name:  " +
      document.getElementById("floatingInput").value +
      "\n \n Organization:  " +
      document.getElementById("floatingOrganization").value +
      "\n \n Email:  " +
      document.getElementById("floatingMail").value,
  }).then((message) => alert(message));
}

// code for changing navbar bg color
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.remove("transparent");
    navbar.classList.add("scroll");
  } else {
    navbar.classList.remove("scroll");
    navbar.classList.add("transparent");
  }
});

//Back to top button
// Get the button:
let mybutton = document.getElementById("myButton");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
