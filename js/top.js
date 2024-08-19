// Get the button
let returnToTopButton = document.getElementById("return-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    returnToTopButton.classList.add("show");
  } else {
    returnToTopButton.classList.remove("show");
  }
}

// When the user clicks on the button, smooth scroll to the top of the document
returnToTopButton.addEventListener("click", function(e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
