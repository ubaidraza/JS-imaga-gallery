var imageGallary =document.querySelectorAll('.image-gallary img');
for(var i=0; i < imageGallary.length ; i++){
    imageGallary[i].addEventListener('click',getImage);
}

var opacity = 0.6;

function getImage(e){
    var mainImage = document.querySelector('.main-image img');

    imageGallary.forEach(function(image){
        image.style.opacity=1;
    })

    mainImage.src = e.target.src;

    e.target.style.opacity = opacity;
    mainImage.classList.add('fade-in');

    setTimeout(function(){
        mainImage.classList.remove('fade-in');
    },500);
  
}