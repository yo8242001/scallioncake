$(document).ready(function () {
    $(".hamburger-menu").on("click", function () {
      $(this).toggleClass("active");
      $("#nav").toggleClass("active");
    });

    $(".linklist").on("click", function () {
      $(this).toggleClass("false");
      $('#nav').toggleClass("active");
    });

  function scrollTopPosition(click, place) {

    $(click).click(function (e) {

      var home = $(place).position().top;
      $("html,body").animate({ scrollTop: home }, 1000);
    });
  };

  scrollTopPosition("#clickhome","#indexpage");
  scrollTopPosition("#clickabout","#about");    
  scrollTopPosition("#clickmenu","#menu");    
  scrollTopPosition("#clickevent","#event");    
  scrollTopPosition("#clicklocation","#location");    
  scrollTopPosition("#clickcontactall","#contactall");    

  
});