let imgtag = document.createElement("img");
  let slidediv = document.getElementById("slideshow");
  slidediv.append(imgtag);
let currentIndex = 0;

var slideImages = [
    "//static3.industrybuying.com/homepage/1673953632Desktop-524xx334-Green-Soul-new.jpg",
    "//static3.industrybuying.com/homepage/1674019851Desktop-524xx334-Auto-oprema.jpg","//static3.industrybuying.com/homepage/1667890944Industrial-buying-524x334-4.jpg",
    "//static3.industrybuying.com/homepage/1650877078AGRIPRO.png","//static3.industrybuying.com/homepage/1671432246CP-PLUS-DESKTOP-(524X334).png","//static3.industrybuying.com/homepage/1672383942Air-Purifier-Desktop-banner-524x334-2.png"
]
slideshowFun(slideImages);

function slideshowFun(images){
  imgtag.setAttribute("src",images[currentIndex]);
  if(currentIndex==images.length-1){
    currentIndex = 0;
  }else{
    currentIndex++;
  }
}
window.addEventListener("load", function () {
    setInterval(slideshowFun,2000,slideImages);
  });