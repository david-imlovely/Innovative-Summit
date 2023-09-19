function contact() {
  const element = document.getElementById("contact");
  element.scrollIntoView();
}

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

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");

  menuToggle.addEventListener("click", function () {
    menu.classList.toggle("active");
  });
});
