var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle("move");
  navbar.classList.toggle("open-menu");
}

window.onscroll = () => {
  navbar.classList.remove("open-menu");
}

const animate = ScrollReveal ({
  origin: "top",
  distance: "60px",
  duration: "2500",
  delay: "400",
});

animate.reveal(".nav");
animate.reveal(".home-text", {origin: "left"});
animate.reveal(".home-img, #user-form", {origin: "bottom"});
animate.reveal(".background-img", {origin: "top"});
animate.reveal(".ser-box, .team-box, .book-data .production-img", {interval: 80});

const cartIcon = document.getElementById('cart-icon');

cartIcon.addEventListener('click', function() {
  var resposta = confirm('Want a 10% off on your first purchase?');
  
  if (resposta) {
    alert('Great! Your discount will be applied during checkout.');
  } else {
    alert('No problem! Feel free to contact us if you need assistance.');
  }
});


var newSection = document.createElement("section");
newSection.className = "production container";
newSection.id = "production";

var contentNewSection = `
    <div class="heading">
        <h2>Our Production</h2>
    </div>
    <div class="production-content">
        <p>Here at Minas Café, we take pride in our high-quality 
        production. We use the finest coffee beans and artisan 
        roasting techniques to ensure an exceptional flavor in 
        every cup. Our dedication to excellence is evident at every 
        stage of the production process.</p>
        <img src="images/coffee.jpg" alt="" class="production-img">
    </div>
`;

newSection.innerHTML = contentNewSection;

var sectionTeam = document.querySelector(".team.container");
var sectionProducts = document.querySelector(".products.container");

sectionProducts.insertAdjacentElement('afterend', newSection);


document.getElementById("bookForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const phoneNumber = document.getElementById("phoneNumber").value;
  const numberOfPeople = document.getElementById("numberOfPeople").value;

  console.log("Phone Number:", phoneNumber);
  console.log("Number of People:", numberOfPeople);

  document.getElementById("confirmationMessage").textContent = "Thank you! We will contact you to confirm your booking.";
});

function submitForm(event) {
  event.preventDefault();

  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('message').value;

  var confirmationMessage = "Welcome to Minas Café";
  document.getElementById('confirmation').innerText = confirmationMessage;
}