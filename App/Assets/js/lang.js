//nav language
var userLang = navigator.language || navigator.userLanguage; 
//cookie if existe
let cookieEnabled = navigator.cookieEnabled;
var superLanguage='';
var superLanBlock=''; //if cookie existe 

function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie(username) {
    var user=getCookie(username);
    if (user != "") {
        alert("Welcome again " + user);
    } else {
       user = prompt("Please enter your name:","");
       if (user != "" && user != null) {
           setCookie(username, user, 30);
       }
    }
}




//class loading and check language

class lang{

    constructor() {
        this.navitagor1 = (cookieEnabled)?true:false;
        this.userLang=userLang.substring(0,2);
    }

    render(){
        if(this.navitagor1==true){
            this.Checktrue()
        }else{
            this.CheckFalse()
        }
    }

    Checktrue(){
        
        if(getCookie('lang')!=''){
            superLanguage= this.SwitchAllElement(getCookie('lang'));
            superLanBlock='0';
        }else{
            superLanguage= this.SwitchAllElement(this.userLang);
            superLanBlock='1';
        }
        this.LanguageCheck(superLanguage,superLanBlock)
    }

    CheckFalse(lang='en'){
        sessionStorage.setItem('lang', lang);
        var sess=sessionStorage.getItem("lang")
        this.LanguageCheck(sess,0)
     }

    SwitchAllElement(Ckeck){
        switch(Ckeck) { 
            case "fr": { 
                superLanguage="fr";
                break; 
            } 
            case "en": { 
                superLanguage="en"; 
                break; 
            }
            case "ru": { 
                superLanguage="ru"; 
                break;    
            } 
            case "es":{
                superLanguage="es";
                break;
            } 
            default: { 
                superLanguage='en';
                break;              
            } 
        }
        return superLanguage;

     }

    LanguageCheck(superLanguage,superLanBlock){
       
       if(superLanBlock==1){
            setCookie('lang', superLanguage, 30);  
       }

       else if(superLanBlock==3){
           if(this.navitagor1==true){
                setCookie('lang', superLanguage, 30);
           }else{
               this.CheckFalse(superLanguage)
           }
              

       }
       let url = 'App/Lang/'+superLanguage+'.json';
       const xhttp = new XMLHttpRequest();
       xhttp.onreadystatechange = function() {
            if (this.readyState ==4 && this.status == 200) {
               // Typical action to be performed when the document is ready:
               const data = JSON.parse(xhttp.responseText);
               dataF(data)
            }
        };
        xhttp.open("GET", url, true);
        xhttp.send();
           
    }
}


var language = new lang();
language.render();


$('.lang>img').click(function(){
    var attr =$(this).attr('data-target')
    language.LanguageCheck(attr, 3)
})


function dataF(data){
    $('#homeAJ').html(data.leftMenu.home)
    $('#aboutAJ').html(data.leftMenu.about)
    $('#resumeAJ').html(data.leftMenu.resume)
    $('#portfolioAJ').html(data.leftMenu.portfolio)
    $('#contactAJ').html(data.leftMenu.contact)
    $('#myprojectAJ').html(data.leftMenu.myproject)

    //#endregion HOME

    $('#greetingName').html(data.home.greetingName)
    $("#homeBottom-onebyone").html(data.home.greetingName+' <b>'+data.home.description+'</b>')

    //#startregion ABOUT ME
    $('#aboutMeTitle').html(data.aboutme.title);
    $('#aboutMedescription').html(data.aboutme.description)
    $('#title1').html(data.aboutme.title1)
    $('#section1DivTitle').html(data.aboutme.section1.div1.title)
    $('#section1DivDescription').html(data.aboutme.section1.div1.description)
    $('#section1DivMobile').html(data.aboutme.section1.div2.title)
    $('#section1DivMobileDescription').html(data.aboutme.section1.div2.description)
    $('#Development').html(data.aboutme.section1.div3.title)
    $('#DevelopmentDescription').html(data.aboutme.section1.div3.description)
    $('#SolutionDescription').html(data.aboutme.section1.div4.description)
    $('#Solution').html(data.aboutme.section1.div4.title)
    $('#howIdoIt').html(data.aboutme.title2)
    $('#discover').html(data.aboutme.section2.div1)
    $('#research').html(data.aboutme.section2.div2)
    $('#design').html(data.aboutme.section2.div3)
    $('#develop').html(data.aboutme.section2.div4)
    $('#test').html(data.aboutme.section2.div5)
    $('#support').html(data.aboutme.section2.div6) 
    $('#title3').html(data.aboutme.title3)
    $('#section3Div1').html(data.aboutme.section3.div1)
    $('#section3Div2').html(data.aboutme.section3.div2)
    $('#section3Div3').html(data.aboutme.section3.div3)
    $('#section3Div4').html(data.aboutme.section3.div4)
    
 
}