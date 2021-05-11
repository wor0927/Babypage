$(document).ready(function(){
  //메뉴 나온걸 확인 후 
  $(".navbar-toggle").on('click',function(){
    if ( $(".mb_menu").hasClass("menu_show") == true ) {
      console.log('들어감')
      $(".mb_menu").removeClass("menu_show");
    } else if ($(".mb_menu").hasClass("menu_show") == false) { 
      console.log('나옴')
      $(".mb_backgorund").addClass("block");
      $(".mb_menu").addClass("menu_show");
    }
    
  })
});

$('html').click(function(e) { 
  if(!$(e.target).hasClass("navbar-toggle").hasClass("icon-bar")) { 
    $(".mb_menu").removeClass("menu_show");
  } 
});
