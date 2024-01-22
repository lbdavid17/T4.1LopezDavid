let carouselContainer = document.querySelectorAll('.carousel-container');


 carouselContainer.forEach(
  function(element) {
    let carouselImagesWrapper = element.querySelector('.carousel-images');
    let carouselImages = carouselImagesWrapper.querySelectorAll('.carousel-image');
    let previous = element.querySelector('.previous');
    let next = element.querySelector('.next');
    let currentImage = 0;


     
   function showImage(index) {
    // Remove the "active" class from all images
    carouselImages.forEach(function(slide) {
      slide.classList.remove('active');
    });

    // Add the "active" class to the current image
    carouselImages[index].classList.add('active');
  }

  function goToPreviousImage() {
    currentImage--;
    if (currentImage < 0) {
      currentImage = carouselImages.length - 1;
    }
    showImage(currentImage);
  }

  function goToNextImage() {
    currentImage++;
    if (currentImage >= carouselImages.length) {
      currentImage = 0;
    }
    showImage(currentImage);
  }

  showImage(currentImage);

   // Attach event listeners to navigation buttons
   previous.addEventListener('click', goToPreviousImage);
   next.addEventListener('click', goToNextImage);
   
   
 });