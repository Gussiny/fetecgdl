jQuery(document).ready(function() {
  	  window.scrollTo(0, 0);
    
    $(".submit-btn").click(function(){
    let name = $(".name").val();
    let email = $(".email").val();
    let phone = $(".phone").val();
    let body = $(".message").val();
        console.log("Nombre: " + name + "\n Correo: " + email + " Telefono: " + phone +"\n Mensaje: " + body);
    let bText = ("Nombre: " + name + "\n Correo: " + email + " Telefono: " + phone +"\n Mensaje: " + body);
    $.ajax({
      type: "POST",
      url: "https://api.elasticemail.com/v2/email/send?apikey=74f64cd9-cd37-45c5-9b5f-be3b41c5a5fa&from=fetec.gdl.dev@gmail.com&subject=MensajeDeContacto&to=gusta.flores98@gmail.com&bodyText=" + bText + "&isTransactional=true",
      success: function (data) {
       console.log(data);
      },
    }).done(function() {
      console.log("ENVIADO");
    });
  })
    
    
   $('#carouselHacked').carousel();

      //this code is for smooth scroll and nav selector

              $(document).on("scroll", onScroll);

              //smoothscroll
              $('a[href^="#"]').on('click', function (e) {
                  e.preventDefault();
                  $(document).off("scroll");

                  $('a').each(function () {
                      $(this).removeClass('active');
                  })
                  $(this).addClass('active');

                  var target = this.hash,
                      menu = target;
                  $target = $(target);
                  $('html, body').stop().animate({
                      'scrollTop': $target.offset().top+2
                  }, 500, 'swing', function () {
                      window.location.hash = target;

                  });
              });


          function onScroll(event){
              var scrollPos = $(document).scrollTop();
              $('.navbar-default .navbar-nav>li>a').each(function () {
                  var currLink = $(this);
                  var refElement = $(currLink.attr("href"));
                  if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                      $('.navbar-default .navbar-nav>li>a').removeClass("active");
                      currLink.addClass("active");
                  }
                  else{
                      currLink.removeClass("active");
                  }
              });
          }


     //this code is for animation nav
     jQuery(window).scroll(function() {
        var windowScrollPosTop = jQuery(window).scrollTop();

        if(windowScrollPosTop >= 150) {
          jQuery(".header").css({"background": "#B193DD",});
          jQuery(".top-header img.logo").css({"margin-top": "-40px", "margin-bottom": "0"});
          jQuery(".navbar-default").css({"margin-top": "-15px",});
        }
        else{
          jQuery(".header").css({"background": "transparent",});
           jQuery(".top-header img.logo").css({"margin-top": "-12px", "margin-bottom": "25px"});
           jQuery(".navbar-default").css({"margin-top": "12px", "margin-bottom": "0"});

        }
     });
});

