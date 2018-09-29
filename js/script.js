//Anaelmarlon Luzayamo Ngweniu

// .sidebar-navig



$(document).ready(function(){
    const currentHash = window.location.hash;
    switch(currentHash){

      case '#home':
           link('.home');
           break;

      case '#aboutme':
           link('.aboutme')
           break;

      case '#resume':
           link('.resume')
           break;

      case '#portefolio':
           link('.portefolio')
           break;

      case '#contact':
           link('.contact')
           break;

      case '#myproject':
           link('.myproject')
           break;
          
    }
    console.log()

    $(".slidebar-menu>a").on("click", function (event) {
  
        event.preventDefault();
        var hash = this.hash;
        //navigation scroll
        $('body,html').animate({ scrollTop: $(hash).offset().top }, newFunction(), function () { window.location.hash = hash; })
         
          // link a menu color
        $('.slidebar-menu>a').css("color", "#7ea0af");
        $('.slidebar-menu>a').css("font-weight", "300");
        $(this).css("color", "#918800"); 
        $(this).css("font-weight", "bold");
    });
     $('.sidebar-navig').click(function() {
   
          $('.sidebar-menu-principal').slideToggle("slow"); 
     });
     $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    })

        

 
});


//controller de height and width
$(window).resize(function () {
     if ($(window).width() > 700) {
          // change functionality for smaller screens
           $(".sidebar").removeClass("sticky-top");
           $('.sidebar-menu-principal').show();
     }else{
           $('.sidebar-menu-principal').hide();
           $(".sidebar").addClass("sticky-top");
     }
});


const link =(link)=>{
     
     $('.slidebar-menu>a').css("color", "#7ea0af");
     $('.slidebar-menu>a').css("font-weight", "300");
     $(link).css("color", "#918800");
     $(link).css("font-weight", "bold");
}

const newFunction=()=>{
   return 900;
}
    


