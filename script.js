var movies = [
	{
		title: 'The Avengers',
		year: '2012',
		hasWatched: true
	},
	{
		title: 'Walk of Shame',
		year: '2014',
		hasWatched: true
	},
	{
		title: 'Boss Level',
		year: '2020',
		hasWatched: true
	},
	{
		title: 'Unhinged',
		year: '2020',
		hasWatched: false
	}
]

buildString();

function buildString() {
	for(i = 0; i < movies.length; i++) {
		if(movies[i].hasWatched === true) {
			console.log('You have watched ' + '"' + movies[i].title + '" ' + '- ' + movies[i].year);
		} else {
			console.log('You have not seen ' + '"' + movies[i].title + '" ' + '- ' + movies[i].year);
		}
	}
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("movie-of-day-text");
  var dots = document.getElementsByClassName("carousel-button");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "View all"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "View less"; 
    moreText.style.display = "inline";
  }
}
function myFunction1() {
  var dots = document.getElementById("dots1");
  var moreText = document.getElementById("more1");
  var btnText = document.getElementById("myBtn1");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "View all"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "View less"; 
    moreText.style.display = "inline";
  }
}