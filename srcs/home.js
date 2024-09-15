
// Add the move-animation class to each image
// const images = document.querySelectorAll('#animated-section img');
// images.forEach(img => {
//     img.classList.add('move-animation');
//     setRandomPosition(img);
// });

// function setRandomPosition(element) {
//     const randomX = Math.random() * window.innerWidth;
//     const randomY = Math.random() * window.innerHeight;
//     element.style.transform = `translate(${randomX}px, ${randomY}px)`;
// }
let dark = false;
document.querySelector('#nav-list li:last-child').addEventListener('click' ,function(){
dark = !dark
if (dark){
    document.querySelector('section h1').style.color="white"
    document.querySelector('section h3').style.color="white"
    document.querySelector(' header nav h3').style.color="red"
    document.body.classList.add("dark-mode")
    document.querySelector('#nav-list li:last-child  i:first-child').style.display="none"

    document.querySelector('#nav-list li:last-child  i:last-child').style.display="flex"
}else{
    document.querySelector('section h3').style.color=""
    document.querySelector('section h1').style.color=""
    document.querySelector(' header nav h3').style.color=""
    document.body.classList.remove("dark-mode")
    document.querySelector('#nav-list li:last-child  i:first-child').style.display="flex"
    document.querySelector('#nav-list li:last-child  i:last-child').style.display="none"
}
}
)
document.querySelector('nav ul li:first-child a').style.color="red";

let test = false;
document.querySelector('.checkbtn').addEventListener('click',function(){
    test = !test
    if(test){
        document.querySelector('#nav-list').style.display="flex";
    }else{
        document.querySelector('#nav-list').style.display="none";
    }
    
  
})
function colorLink() {
  var ul = document.getElementById("nav-list");
  var li = ul.querySelectorAll("li");

  li.forEach((item) => {
    const link = item.querySelector("a");
    if (link) {
      link.addEventListener("click", function (event) {
      

        // Reset color of all links
        li.forEach((liItem) => {
          const liLink = liItem.querySelector("a");
          if (liLink) {
            liLink.style.color = "";
          }
        });

        // Set color of the clicked link
        this.style.color = "red";
      });
    }
  });
}

colorLink();


// Ensure DOM is fully loaded before running script
document.addEventListener("DOMContentLoaded", colorLink);

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show');
        }
    })
})

const targets = document.querySelectorAll('.hidden');
targets.forEach((el)=>observer.observe(el));

  (function(){
    emailjs.init("VHBe9lUJD9X3K5fkF");  // Replace with your EmailJS user ID
  })();

document.getElementById("send-btn").addEventListener("click", function (event) {
  event.preventDefault(); // Prevent form from submitting the default way

  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;

  // Ensure required fields are filled
  if (!name || !email || !message) {
    alert("Please fill in all required fields.");
    return;
  }

  // Send email using EmailJS
  emailjs
    .send("service_584kz67", "template_p10j1fq", {
      from_name: name,
      reply_to: email,
      phone_number: phone,
      message: message,
    })
    .then(
      function (response) {
        alert("Message successfully sent to ANAS EN-NAQADI!");
        // Get form values
         document.getElementById("name").value = null;
          document.getElementById("email").value = null;
          document.getElementById("phone").value = null;
           document.getElementById("message").value = null;
      },
      function (error) {
        alert("Failed to send message. Please try again.");
      }
    );
});
          
