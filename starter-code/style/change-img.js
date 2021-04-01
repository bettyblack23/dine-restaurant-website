let changeImage = () => {


  if (window.matchMedia("(min-width: 375px" && "(max-width: 575px)").matches) {

    document.querySelector(".enjoyable-img").src = "./images/homepage/enjoyable-place-mobile@2x.jpg";
    document.querySelector(".locally-sourced-img").src = "./images/homepage/locally-sourced-mobile@2x.jpg";
    document.querySelector(".salmon-img").src = "./images/homepage/salmon-mobile@2x.jpg";
    document.querySelector(".beef-img").src = "./images/homepage/beef-mobile@2x.jpg";
    document.querySelector(".chocolate-img").src = "./images/homepage/chocolate-mobile@2x.jpg";
    document.querySelector(".family-gathering-img").src = "./images/homepage/family-gathering-mobile@2x.jpg";
    
  } else if (window.matchMedia("(min-width: 576px)" && "(max-width: 767px)").matches) {
  
    document.querySelector(".enjoyable-img").src = "./images/homepage/enjoyable-place-tablet.jpg";
    document.querySelector(".locally-sourced-img").src = "./images/homepage/locally-sourced-tablet.jpg";
    document.querySelector(".salmon-img").src = "./images/homepage/salmon-desktop-tablet.jpg";
    document.querySelector(".beef-img").src = "./images/homepage/beef-desktop-tablet.jpg";
    document.querySelector(".chocolate-img").src = "./images/homepage/chocolate-desktop-tablet.jpg";
    document.querySelector(".family-gathering-img").src = "./images/homepage/family-gathering-tablet.jpg";
  
  } else if (window.matchMedia("(min-width: 768px)" && "(max-width: 1536px)" &&"(orientation: portrait)").matches /*&& (device == "tablet")*/) {
  
    document.querySelector(".enjoyable-img").src = "./images/homepage/enjoyable-place-tablet@2x.jpg";
    document.querySelector(".locally-sourced-img").src = "./images/homepage/locally-sourced-tablet@2x.jpg";
    document.querySelector(".salmon-img").src = "./images/homepage/salmon-desktop-tablet@2x.jpg";
    document.querySelector(".beef-img").src = "./images/homepage/beef-desktop-tablet@2x.jpg";
    document.querySelector(".chocolate-img").src = "./images/homepage/chocolate-desktop-tablet@2x.jpg";
    document.querySelector(".family-gathering-img").src = "./images/homepage/family-gathering-tablet@2x.jpg";
  
  } else if (window.matchMedia("(min-width: 992px)" && "(max-width: 1439px)" &&"(orientation: landscape)").matches /*&& (device == "desktop")*/) {
  
    document.querySelector(".enjoyable-img").src = "./images/homepage/enjoyable-place-desktop.jpg";
    document.querySelector(".locally-sourced-img").src = "./images/homepage/locally-sourced-desktop.jpg";
    document.querySelector(".salmon-img").src = "./images/homepage//salmon-desktop-tablet.jpg";
    document.querySelector(".beef-img").src = "./images/homepage/beef-desktop-tablet.jpg";
    document.querySelector(".chocolate-img").src = "./images/homepage/chocolate-desktop-tablet.jpg";
    document.querySelector(".family-gathering-img").src = "./images/homepage/family-gathering-desktop.jpg";
  
  }  else if (window.matchMedia("(min-width: 1440px)").matches )  {
    document.querySelector(".enjoyable-img").src = "./images/homepage/enjoyable-place-desktop@2x.jpg";
    document.querySelector(".locally-sourced-img").src = "./images/homepage/locally-sourced-desktop@2x.jpg";
    document.querySelector(".salmon-img").src = "./images/homepage//salmon-desktop-tablet@2x.jpg";
    document.querySelector(".beef-img").src = "./images/homepage/beef-desktop-tablet@2x.jpg";
    document.querySelector(".chocolate-img").src = "./images/homepage/chocolate-desktop-tablet@2x.jpg";
    document.querySelector(".family-gathering-img").src = "./images/homepage/family-gathering-desktop@2x.jpg";
  }
}

changeImage();