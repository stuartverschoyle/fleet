   var swiperZoom = new Swiper('.swiper-container', {

      grabCursor: true,
      centeredSlides: true,
      slidesPerView: '2',
        spaceBetween: 300,

      // loop:true,
      //  autoplay: {
      //   delay: 1000,
      //   disableOnInteraction: false,
      // },     
    
   // slidesOffsetAfter: 700, 
   // slidesOffsetBefore:-500,
     
      effect: 'coverflow',
      keyboard:true,
     
        coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 4,
        slideShadows : false,
      },
      
    });

    
    swiperZoom.on('slideChange', function () {
      // var index = this.activeIndex;

      // $('.single-view-content').css({background: 'var('+colors[index % colors.length]+')'});

      $('.team-info .team-info-item').removeClass('active').eq(this.activeIndex).addClass('active')
    });

    $('.slideNext').click(function(argument) {

        swiperZoom.slideNext();

    })

   $('.slidePrev').click(function(argument) {
        
          swiperZoom.slidePrev();

      })

  var now = new Date();

  var hours = now.getHours();
        hours = 19; 
        console.log(hours);

        if (hours >= 6 && hours < 12) {
          // Morning
          document.getElementById("skyback").style.background = "linear-gradient(to left, #9fcbe8, #9fcbe8)";
        } else if (hours >= 12 && hours < 18) {
          // Afternoon
          document.getElementById("skyback").style.background = "linear-gradient(to left, #9fcbe8, #9fcbe8)";
        } else if (hours >= 18 && hours < 22) {
          // Evening
          document.getElementById("skyback").style.background = "linear-gradient(to left, #9fcbe8, #9fcbe8)";
        } else {
          // Night
          document.getElementById("skyback").style.background = "linear-gradient(to left, #9fcbe8, #9fcbe8)";
        }        
