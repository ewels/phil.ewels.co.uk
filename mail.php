<?php

// Send e-mail from contact form
$e = json_decode(file_get_contents('../myemail.json'), true);
$myemail = $e['name'].'@'.$e['domain'].'.'.$e['tld']; // attempting to block spam due to being visible on github
$name = $email = $subject = $message = '';
$msg = false; $error = false;
if(isset($_POST['message'])){
  if (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
    $error = true; $msg = "Error - E-mail address doesn't look valid";
  }
  $bad = array("content-type","bcc:","to:","cc:","href");
  $to = $myemail;
  $name = str_replace($bad, '', trim($_POST['name']));
  $email = str_replace($bad, '', trim($_POST['email']));
  $message = str_replace($bad, '', trim($_POST['message']));
  if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $error = true; $msg = "Error - E-mail address '<u>$email</u>' doesn't look valid.";
  }
  if (!$name || !$email || !$message) {
    $error = true; $msg = "Error - Name, email and message cannot be blank.";
  }
  //verify captcha
  $response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=".$e['recaptcha_secret']."&response=".$_POST['g-recaptcha-response']);
  $response = json_decode($response, true);
  if($response["success"] !== true)  {
      $error = true; $msg = "Error - Anti-spam captcha verification failed. Please try again.";
  }
  if(!$error){
    $headers = "From: phil.ewels.co.uk website <mailer@ewels.co.uk>\r\nReply-To: $name <$email>\r\nX-Mailer: PHP/".phpversion();
    $message = "From: $name <$email>\nE-mail from phil.ewels.co.uk: $name\n\n$message\n\n--\nSent from phil.ewels.co.uk contact form\n\n";
    if(mail($to, $subject, $message, $headers)){
      $msg = 'E-mail sent. Thanks!';
      $name = $email = $subject = $message = '';
    } else {
      $error = true; $msg = "Error, could not send mail (internal error).";
    }
  }
}
if($error){
  http_response_code(400);
}
if($msg){
  echo $msg;
}