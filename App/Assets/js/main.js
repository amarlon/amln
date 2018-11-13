//Anaelmarlon Luzayamo Ngweni

// .sidebar-navig
// function click action

setTimeout(function(){
      Demarage();
    }, 2000);
function Demarage(){
      $('.loader-img').hide('slow');
      $('.Main').show('slow');
}

const year =new Date().getFullYear() 

$(document).ready(function(){

      getFirstInfot()

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
 

      $(".slidebar-menu>a").on("click", function () {
  
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

const Load =()=>{

}
//Ajax get

const getFirstInfot =()=>{
   
     const name = $("#name");
     const urlJson= "main.json";

     $.get(urlJson)
     .done((data)=>{

          const last =data.AuthorInfo.lastname;
          const first = data.AuthorInfo.firstname;
          const sur = data.AuthorInfo.surname;
          const abbr = data.AuthorInfo.AbreviationName;
          const title =data.Main.title;

          //update name of author
          (sur[1])? name.html(first + ' '+last+ ' '+sur[0]) : name.html(first + ' '+last)

          //update abbreviation
          $('#dateAndYear').html('Ⓒ '+year+' - '+abbr.substring(0,3))
          $('.left_Nom').html(first);
          document.title = title;
          
         
      
     })
     .fail(()=>{ alert('Check your urlJson variable for json file please')})
     
}
$('#skype').hover(
				
      function () {
         $('#avtarSocial').show();
      }, 
               
      function () {
            $('#avtarSocial').hide("slow");
      }
);


$.fn.serializeFormJSON = function () {

      var o = {};
      var a = this.serializeArray();
      $.each(a, function () {
          if (o[this.name]) {
              if (!o[this.name].push) {
                  o[this.name] = [o[this.name]];
              }
              o[this.name].push(this.value || '');
          } else {
              o[this.name] = this.value || '';
          }
      });
      return o;
  };

$('#FormNew').submit(function(event){
       event.preventDefault();
       var data = $(this).serializeFormJSON();
       var url = "./Assembly/_Mail/mail@.php"
       $.ajax({
           type: "POST",
           url: url,
           data: data,
           beforeSend: beforeReceipt,
       })
       .done((data)=>{
            console.log(data)
            //error1 = veuillez ecrire votre message svp
            //error2 = veuillez ecrire votre mail svp
            //error3 = veuillez ecrire votre name svp
            //error 4 = message no send ,error server
            //SUCCES

            $('.specialReponse').hide() 
            $('.messageResponse').show('slow');
            setTimeout(function(){
                 $('.messageResponse').hide('slow'); 
             }, 4000);
             $('form').each( function() { this.reset; });
       })
       .fail(function(error,xhr, html){
           console.log(error, xhr,html)
       });

 
      function beforeReceipt(){
          $('.specialReponse').show()
      }
      
})
    


