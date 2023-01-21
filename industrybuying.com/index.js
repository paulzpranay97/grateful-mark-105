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


  let Cart= JSON.parse(localStorage.getItem("cart"))||[];
  let totalPro = document.getElementById("top")
  let count=0;
for(let i=0;i<Cart.length;i++)
{
  count+=Cart[i].quantity;
}

totalPro.textContent=count;


const select = document.getElementById("filter");
select.addEventListener("change", (event) => {
  const category = event.target.value;
  if (category) {
    const productPageUrl = `product.html?category=${category}`;
    window.location.href = productPageUrl;
    
  }
});




  let api=(" https://63c66b68d307b7696738a8cf.mockapi.io/products")
    fectheddata()
    async function fectheddata(){
        try{
            let request=await fetch(api)
            let data= await request.json()
            console.log(data);
            Display(data)
        }catch(err){
            console.log(err)
        }
    }
    
   
 
      let main1 = document.querySelector("#product1");
      let main2 = document.querySelector("#main3");
      let main3 = document.querySelector("#main4");
      let main4 = document.querySelector("#main5");
      let main5 = document.querySelector("#main6");
      let main6 = document.querySelector("#main7");



    function Display(data) {
      data.forEach((element) => {

        if(element.category==="IB POWER BRAND"){
            
            let indiv = document.createElement("div");
            indiv.setAttribute("class","card1")
            let img=document.createElement("img")
            img.setAttribute("src",element.image)

            let para1 = document.createElement("p");
            para1.setAttribute("id","detail")
            para1.innerText=element.Description

            let para2 = document.createElement("p");
            para2.setAttribute("id","des")
            para2.innerText=element.title

            let hed3 = document.createElement("h3");
            hed3.innerText=`₹${element.price}`
            

            let btn = document.createElement("button");
            btn.setAttribute("class","btn");
            btn.innerText = "Buy Now";
            
    
           
            indiv.append(img, para1, para2,hed3,btn);
            main1.append(indiv);

        }



        if(element.category===" Best Sellers"){
            
          let indiv = document.createElement("div");
          indiv.setAttribute("class","card1")
          let img=document.createElement("img")
          img.setAttribute("src",element.image)

          let para1 = document.createElement("p");
          para1.setAttribute("id","detail")
          para1.innerText=element.Description

          let para2 = document.createElement("p");
          para2.setAttribute("id","des")
          para2.innerText=element.title

          let hed3 = document.createElement("h3");
          hed3.innerText=`₹${element.price}`
          
          
          let btn = document.createElement("button");
          btn.setAttribute("class","btn");
          btn.innerText = "Buy Now"
         
          indiv.append(img, para1, para2,hed3,btn);
          main2.append(indiv);

      }



      if(element.category===" NEW ARRIVALS"){
            
        let indiv = document.createElement("div");
        indiv.setAttribute("class","card1")
        let img=document.createElement("img")
        img.setAttribute("src",element.image)

        let para1 = document.createElement("p");
        para1.setAttribute("id","detail")
        para1.innerText=element.Description

        let para2 = document.createElement("p");
        para2.setAttribute("id","des")
        para2.innerText=element.title

        let hed3 = document.createElement("h3");
        hed3.innerText=`₹${element.price}`
        
        
        let btn = document.createElement("button");
        btn.setAttribute("class","btn");
        btn.innerText = "Buy Now"
       
        indiv.append(img, para1, para2,hed3,btn);
        main3.append(indiv);

    }

    if(element.category==="Office Supplies"){
            
      let indiv = document.createElement("div");
      indiv.setAttribute("class","card1")
      let img=document.createElement("img")
      img.setAttribute("src",element.image)

      let para1 = document.createElement("p");
      para1.setAttribute("id","detail")
      para1.innerText=element.Description

      let para2 = document.createElement("p");
      para2.setAttribute("id","des")
      para2.innerText=element.title

      let hed3 = document.createElement("h3");
      hed3.innerText=`₹${element.price}`
      
      let btn = document.createElement("button");
      btn.setAttribute("class","btn");
      btn.innerText = "Buy Now"

     
      indiv.append(img, para1, para2,hed3,btn);
      main4.append(indiv);

  }

  if(element.category==="Power Tools"){
            
    let indiv = document.createElement("div");
    indiv.setAttribute("class","card1")
    let img=document.createElement("img")
    img.setAttribute("src",element.image)

    let para1 = document.createElement("p");
    para1.setAttribute("id","detail")
    para1.innerText=element.Description

    let para2 = document.createElement("p");
    para2.setAttribute("id","des")
    para2.innerText=element.title

    let hed3 = document.createElement("h3");
    hed3.innerText=`₹${element.price}`
    
    

   
    indiv.append(img, para1, para2,hed3);
    main5.append(indiv);

}

if(element.category==="IT & Electronics"){
            
  let indiv = document.createElement("div");
  indiv.setAttribute("class","card1")
  let img=document.createElement("img")
  img.setAttribute("src",element.image)

  let para1 = document.createElement("p");
  para1.setAttribute("id","detail")
  para1.innerText=element.Description

  let para2 = document.createElement("p");
  para2.setAttribute("id","des")
  para2.innerText=element.title

  let hed3 = document.createElement("h3");
  hed3.innerText=`₹${element.price}`
  
  

 
  indiv.append(img, para1, para2,hed3);
  main6.append(indiv);

}
    
  
       
      });
      
    }
    