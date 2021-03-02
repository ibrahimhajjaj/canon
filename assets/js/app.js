// Multiply price by the Quantity

// Checking if we are at single product page

const el = document.getElementById('single-product');

if (typeof(el) != 'undefined' && el != null){ // good to go
  // Setting up const variables.
  const price = document.getElementById('price').textContent.replace('$',''),
        totals = document.getElementById('totals'),
        quantity = document.getElementById('quantity');

  quantity.addEventListener('change', (event) => {
    totals.textContent = "Total: $" + parseInt(price) * parseInt(event.target.value);
  });



}

slides = document.getElementsByClassName("slice");

if (typeof(slides) != 'undefined' && slides != null) { // good to go

  var slideIndex = 0;
  showSlides();

  function showSlides() {

    var i,
        slides = document.getElementsByClassName("slice");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {slideIndex = 1}

    slides[slideIndex-1].style.display = "block";

    setTimeout(showSlides, 2500);

  }

}