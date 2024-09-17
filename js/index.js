
/*   local storage  */

let colors = localStorage.getItem("color_option");

if( colors !== null ) {
  

  $(".change").css( "color", colors );

  document.querySelectorAll('.color-item').forEach( element => {
    
    element.classList.remove("active");
    if( element.dataset.color === colors ) {

      element.classList.add("active");
    }
  })
}

/*             scroll for navBar         */

let caterOffSet = $("#catering").offset().top;
$(window).scroll( function() {

  let scrollTop = $(window).scrollTop(); 
  if( scrollTop > caterOffSet ) {
    $("header").css( "backgroundColor", "#ddd" );
  } else {
    $("header").css( "backgroundColor", "white" );
  }

})

/*             btnUp         */


let notre = $("#notre").offset().top;

$(window).scroll( function() {

  let scrollTopBtn = $(window).scrollTop();
  if( scrollTopBtn > notre ) {
    // $("#btnUp").css( "display", "block"); /* or */ $("#btnUp").fadeIn();
    $("#btnUp").fadeIn();
    $("#btnUp").on("click", function() {
      $(window).scrollTop(0);
    })
  } else {
    // $("#btnUp").css( "display", "none"); /* or */ $("#btnUp").fadeOut();
    $("#btnUp").fadeOut();
  }

})
// scroll smooth in bootstrap not work in all browser so we do that below 

// $("a[href^='#']").on( "click", function(e) {

//   let aHref = $(e.target).attr("href"); // #about
//   let sectionOffSet = $(aHref).offset().top; // 500px
//   $("html,body").animate( {scrollTop:sectionOffSet} , 500)

// })

/*             Loading Screen         */
$(document).ready( function() {

  $(".loading .loader").fadeOut( 50, function() {
    $(".loading").fadeOut( 50 );
    $("body").css( "overflow-y", "auto" );
  })

  $(".owl-carousel").owlCarousel({

    margin: 5,
    loop: true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        1200:{
            items:3
        }
    }
  })
})

/*             Change Colors         */

let colorItem = $(".color-item");

colorItem.eq(0).css( "backgroundColor", "#30a420");
colorItem.eq(1).css( "backgroundColor", "#c07505");
colorItem.eq(2).css( "backgroundColor", "#297dcc");
colorItem.eq(3).css( "backgroundColor", "#a13333");

colorItem.on( "click", function(e) {

  let bGc = $(this).css("backgroundColor");
  $(".change").css( "color", bGc );
  localStorage.setItem("color_option", bGc )
  
  // change active
  e.target.parentElement.querySelectorAll('.active').forEach( element => {
    element.classList.remove("active");
  })
  e.target.classList.add("active");
})

$(".side-bar i").on( "click", function() {

  // $(".side-bar .colors-box").toggle(300);

  /* or by animate */
  let widthBox = $(".colors-box").innerWidth();
  if( $(".side-bar").css( "right" ) == "0px" ) {
    $(".side-bar").animate( {right: -widthBox }, 500);
  } 
  else {
    $(".side-bar").animate( {right: "0px" }, 500);
  }

})












