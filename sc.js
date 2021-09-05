// Trabajos
const filterButtons = document.querySelector("#filter-btns").children;
const items = document.querySelector(".portfolio-gallery").children;

for ( let i = 0; i < filterButtons.length; i++) {
    filterButtons[i].addEventListener("click", function() {
        for ( let j = 0; j < filterButtons.length; j++) {
            filterButtons[j].classList.remove("active");
        }
        this.classList.add("active");
        const target = this.getAttribute("data-target");
        
        for ( let k = 0; k < items.length; k++) {
            items[k].style.display = "none";
            if ( target == items [k].getAttribute("data-id")){
                items[k].style.display = "block";
            }
            if ( target == "all") {
                items[k].style.display = "block";
            }
        }
    });
}



// Lightbox
const closeLightbox = document.querySelector(".close-lightbox");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = lightbox.querySelector("img");

lightbox.addEventListener("click", function() {
    if (event.target != lightboxImage) {
        lightbox.classList.remove("show");
        lightbox.classList.add("hide");
    }
});

closeLightbox.addEventListener("click", function() {
    lightbox.classList.remove("show");
    lightbox.classList.add("hide");
});




// const gallery = document.querySelector(".portfolio-gallery");
// const galleryItem = gallery.querySelectorAll(".item");

// galleryItem.forEach(function(element) {
//     element.querySelector(".fa-plus").addEventListener("click", function() {
//         lightbox.classList.remove("hide");
//         lightbox.classList.add("show");
//         lightboxImage.src = element.querySelector("img").getAttribute("src");
//     });
// });

// const overlay = document.getElementById("app");
// document.querySelectorAll(".portfolio-gallery .item img").forEach((element) => {
//     const ruta = element.getAttribute("src");
//     const url = element.parentNode.parentNode.dataset.descripcion;

//     console.log(url);

//     // element.addEventListener("click", () => {
//     //     overlay.classList.add("activo");
//     //     document.querySelector("");
//     // });
// });



// testimonial slider
const sliderContainer = document.querySelector(".testi-slider");
const slides = sliderContainer.children;
const containerWidth = sliderContainer.offsetWidth;
const margin = 30;
let itemPerSlide = 0;
let slideDots;

//responsive
const responsive = [
       {breakPoint:{width:0,item:1}},
       {breakPoint:{width:900,item:2}}
    ];

function load() {
    for(let i=0; i < responsive.length; i++) {
        if(window.innerWidth > responsive[i].breakPoint.width) {
            itemPerSlide = responsive[i].breakPoint.item;
        }
    }
    start();
}

function start() {
    totalWidth = 0;
    for(let i=0; i < slides.length; i++) {
        slides[i].style.width = (containerWidth/itemPerSlide) - margin + "px";
        slides[i].style.margin = margin/2 + "px";
        totalWidth+=containerWidth/itemPerSlide;
    }
    
    sliderContainer.style.width = totalWidth + "px";
    
    slideDots = Math.ceil(slides.length/itemPerSlide);
    
    for(let i=0; i < slideDots; i++) {
        const div = document.createElement("div");
        div.id = i;
        div.setAttribute("onclick", "controlSlide(this)");
        if(i==0) {
            div.classList.add("active");
        }
        document.querySelector(".slide-controls").appendChild(div);
    }
}

let currentSlide = 0;
let autoSlide = 0;

function controlSlide(element) {
    clearInterval(timer);
    timer = setInterval(autoPlay,5000);
    autoSlide = element.id;
    currentSlide = element.id;
    changeSlide(currentSlide);
}

function changeSlide(currentSlide) {
    controlButtons = document.querySelector(".slide-controls").children;
    
    for(let i=0; i < controlButtons.length; i++) {
        controlButtons[i].classList.remove("active");
    }
    
    // controlButtons[currentSlide].classList.add("active");
    
    sliderContainer.style.marginLeft=-(containerWidth*currentSlide) + "px";
}

function autoPlay() {
    
    if(autoSlide==slideDots-1) {
        autoSlide = 0;
    }
    else {
        autoSlide++;
    }
    changeSlide(autoSlide);
}

let timer = setInterval(autoPlay,5000);

window.onload = load();







// Header Fixed
window.onscroll = function() {
    const docScrollTop = document.documentElement.scrollTop;
    
    if (window.innerWidth > 795) {
        if(docScrollTop > 100) {
            document.querySelector("header").classList.add("fixed");
        }
        else {
            document.querySelector("header").classList.remove("fixed");
        }
    }
};




// Navbar Link Scroll
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".navbar ul li a");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((a) => {
    a.classList.remove("active");
    if (a.classList.contains(current)) {
      a.classList.add("active");
    }
  });
});


// otro Navbar Link Scroll ux 2
const sectionUx = document.querySelectorAll("section");
const navLiUx = document.querySelectorAll(".nav__block_ux li a");

window.addEventListener("scroll", () => {
    let current = "";
    sectionUx.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute("id");
            }
    });

    navLiUx.forEach((a) => {
        a.classList.remove("active");
        if (a.classList.contains(current)) {
            a.classList.add("active");
        }
    });

});



// Navbar link
const navbar = document.querySelector(".navbar");
a = navbar.querySelectorAll("a");

a.forEach(function(element) {
    element.addEventListener("click", function() {
        for(let i=0; i < a.length; i++) {
            a[i].classList.remove("active");
        }
        this.classList.add("active");
        document.querySelector(".navbar").classList.toggle("show");
        
        btnHamburger.classList.remove('open');
    });
});


// Hamburger
const hamBurger = document.querySelector(".ham-burger");
hamBurger.addEventListener("click", function() {
    document.querySelector(".navbar").classList.toggle("show");
});


const btnHamburger = document.querySelector('.ham-burger');
btnHamburger.addEventListener('click', function() {
    
    if(btnHamburger.classList.contains('open')) {
        btnHamburger.classList.remove('open');
    }
    else {
        btnHamburger.classList.add('open');
    }
});







window.addEventListener('load', () => {
    document.getElementById('grid').classList.add('imagenes-cargadas');
});




