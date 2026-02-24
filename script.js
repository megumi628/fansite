window.onload = function () {
  let title = document.querySelector("h1") || document.getElementById("mainTitle");
  
  if (title) {
    title.style.transition = "color 0.5s ease";
    
    setInterval(function() {
      let r = Math.floor(Math.random() * 128) + 128;
      let g = Math.floor(Math.random() * 128) + 128;
      let b = Math.floor(Math.random() * 128) + 128;
      title.style.color = "rgb(" + r + "," + g + "," + b + ")";
    }, 1000);
  
  let secondPics = [
    "tate2.JPG",
	"tate8.jpg",
	"tate7.jpg" 
  ];

  let secondImg = document.querySelector("#mainImage");
  
  if (secondImg) {
    let randomIndex2 = Math.floor(Math.random() * secondPics.length);
    secondImg.src = secondPics[randomIndex2];
    
    setInterval(function() {
      let randomIndex = Math.floor(Math.random() * secondPics.length);
      secondImg.src = secondPics[randomIndex];
    }, 2000);
  } 
  }
};
