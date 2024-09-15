AOS.init();
$(function(){
    const btnSignIn = $(".header-login a")
    const modalReg = $("#modal")
    const close = modalReg.find(".close")


    btnSignIn.click(function(){
        modalReg.css("display", "flex")
        
    })
    close.click(function(){
        modalReg.css("display","none")
    })

    
    
    const searchField =$(".header-top")
    const searchBtn = $("#searchBtn")
    
   

    searchBtn.click(function () {
        if (searchField.css("display") === "none") {
            searchField.css("display", "flex").hide().slideDown();  // Show with flex and slide-down
        } else {
            searchField.slideUp(function () {
                searchField.css("display", "none");  // Hide with slide-up and set display to none
            });
        }
    });
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        loop:true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

      // useEffect(() => {
      //   const swiperContainer = swiperRef.current;
      //   const params = {
      //     navigation: true,
      //     pagination: true,
      //     // These are new...
      //     injectStyles: [
      //       `
      //         .swiper-button-next,
      //         .swiper-button-prev {
      //           background-color: white;
      //           padding: 8px 16px;
      //           border-radius: 100%;
      //           border: 2px solid black;
      //           color: red;
      //         }
      //         .swiper-pagination-bullet{
      //           width: 40px;
      //           height: 40px;
      //           background-color: red;
      //         }
      //     `,
      //     ],
      //   };
    
      //   Object.assign(swiperContainer, params);
      //   swiperContainer.initialize();
      // }, []);

      
      const acc = $("#accordion .accordion-item");

      AOS.init();
      
     
})

$(document).ready(function() {
  const acc = $("#accordion .accordion-item");

  acc.on('click', function() {
   
    const isActive = $(this).hasClass('activeAc');

   
    acc.removeClass('activeAc').find('.content').slideUp();

   
    if (!isActive) {
      $(this).addClass('activeAc').find('.content').slideDown();
    }
  });

});
$(document).ready(function() {
 
  const updateCounter = (counter, target) => {
    let count = 0;

    const animate = () => {
      const increment = target > count ? Math.ceil(target / 100) : -1; 
      count += increment;

      if (count < target) {
        counter.text(count); 
        requestAnimationFrame(animate); 
      } else {
        counter.text(target);
      }
    };

    animate();
  };

 
  const handleIntersection = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = $(entry.target); 
        const target = +counter.attr("data-target"); 

        updateCounter(counter, target); 

        
        observer.unobserve(entry.target);
      }
    });
  };

  
  const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.5
  });

 
  $(".counter").each(function() {
    observer.observe(this);
  });
});


document.addEventListener('DOMContentLoaded', function () {
  const percentages = document.querySelectorAll('.percentage');

 
  const handleAnimation = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const $perInf = $(entry.target).find('.per-inf');
        const text = $perInf.find('p').text();
        const match = text.match(/(\d+)%/);

        if (match) {
          const value = parseInt(match[1]);
          console.log(value + '%'); 

          $perInf.animate({ width: value + '%' }, 700); 
        }

       
        observer.unobserve(entry.target);
      }
    });
  };

  
  const observer = new IntersectionObserver(handleAnimation, {
    threshold: 0.5 
  });

 
  percentages.forEach(el => observer.observe(el));
});



window.onload = function(){
  searchField.css("display", "none")
}