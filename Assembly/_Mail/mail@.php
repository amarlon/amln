<?php

   $arr= [];
   
   $text = check($_POST["_text"]);
   $phone = check($_POST["_phone"]);
   $mail = check($_POST["_mail"]);
   $name = check($_POST["_first"]);
   
   if(messageChecking($text, 'error1') == 1){

        if(messageChecking($mail, 'error2') == 1){
            if(messageChecking($name, 'error3') == 1){

               if(mailSender($text, $name, $phone, $mail)){
                    $arr= array('a' => "SUCCES"); 
               }else{
                    $arr= array('a' => messageChecking($name, 'error4')); 
               }
             
            }else{
                $arr= array('a' => messageChecking($name, 'error3'));
            }
            
        }else{
            $arr= array('a' => messageChecking($mail, 'error2'));
        }

   }else{
       $arr= array('a' => messageChecking($text, 'error1'));
   }

   echo json_encode($arr);

   function mailSender($text, $name, $phone, $mail){
        if(empty($phone)){
            $phone = 'N/A';
        }
        $to = "marlonluzayamo@gmail.com";
        $subject = "Message From portefolio";
        $message = "De la part de: ".$name . "\r\n";
        $message .= "Numero de telephone: ".$phone . "\r\n";
        $message .= "adresse email: ".$mail . "\r\n";
        $message .= $text;
        $headers = "MESSAGE PORTFOLIO" . "\r\n";
        $headers .= 'From: <portefolio@example.com>' . "\r\n";
        if (mail($to, $subject, $message, $headers)) {
           return true;
        } else {
            return false;
        }

   }

   function check($data){
      return trim(htmlspecialchars($data));
   }
   
   function messageChecking($dataPost, $messageerror) {    
       if((isset($dataPost) && !empty($dataPost))){
          return 1;
       }else{
          return $messageerror;
       }   
   }
?>
