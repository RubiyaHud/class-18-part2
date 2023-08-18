$('.slick_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 950,
    arrows: true,
    prevArrow:'<i class="fa-regular fa-circle-left prev"></i>',
    nextArrow:'<i class="fa-regular fa-circle-right next"></i>',    

  });

  //********************************************** */
  
  (function () {
    const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;
    
    //I'm adding this section so I don't have to keep updating this pen every year :-)
    //remove this if you don't need it
    let today = new Date(),
    dd = String(today.getDate()).padStart(2, "0"),
    mm = String(today.getMonth() + 1).padStart(2, "0"),
    yyyy = today.getFullYear(),
    nextYear = yyyy + 1,
    dayMonth = "09/12/",
    birthday = dayMonth + yyyy;
    
    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
      birthday = dayMonth + nextYear;
    }
    //end
    
    const countDown = new Date(birthday).getTime(),
    x = setInterval(function() {    
      
      const now = new Date().getTime(),
      distance = countDown - now;
      
      document.getElementById("days").innerText = Math.floor(distance / (day)),
      document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
      document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
      document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
      
      //do something later when date is reached
      if (distance < 0) {
        document.getElementById("headline").innerText = "It's my birthday!";
        document.getElementById("countdown").style.display = "none";
        document.getElementById("content").style.display = "block";
        clearInterval(x);
      }
      //seconds
    }, 0)
  }());
  
  
  //******************* Hide/show Function *************************** */
  $(function(){
    $('.hide').click(function(){
      //$('.box').hide()

      //delay 2000 milisecond
      $('.box').hide(2000)
      
    })

    $('.show').click(function(){
      //$('.box').show()
      
      //delay 2000 milisecond
      $('.box').show(2000)
    })

    $('.hide_show').click(function(){
      $('.box').toggle()
    })

    $('.add_color').click(function(){
      $('.box').addClass('new_box')
    })
    
    $('.remove_color').click(function(){
      $('.box').removeClass('new_box')
    })
    
    $('.add_remove_color').click(function(){
      $('.box').toggleClass('new_box')
    })

    $('.slide_up').click(function(){
      //$('.box').slideUp()

      //delay 2000 milisecond
      $('.box').slideUp(2000)
      

    })

    $('.slide_down').click(function(){
      //$('.box').slideDown()

      //delay 2000 milisecond
      $('.box').slideDown(2000)
    })

    $('.slide_toggle').click(function(){
      $('.box').slideToggle()
      
      //delay 2000 milisecond
      //$('.box').slideToggle(2000)
    })

  });

