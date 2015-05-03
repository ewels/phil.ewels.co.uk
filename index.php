<?php

// Twitter
require_once('twitter-api-php/TwitterAPIExchange.php');
$settings = json_decode(file_get_contents('twitter_tokens.json'), true);

$url = 'https://api.twitter.com/1.1/statuses/user_timeline.json';
$getfield = '?screen_name=tallphil&include_rts=false&exclude_replies=true';
$requestMethod = 'GET';

$twitter = new TwitterAPIExchange($settings);
$tweets = json_decode($twitter->setGetfield($getfield)->buildOauth($url, $requestMethod)->performRequest());

// Contact form
$e = json_decode(file_get_contents('myemail.json'), true);
$myemail = $e['name'].'@'.$e['domain'].'.'.$e['tld']; // attempting to block spam due to being visible on github
$name = $email = $subject = $message = '';
if(isset($_POST['message'])){
  $msg = false; $error = false;
  if (!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
    $error = true; $msg = "Error - E-mail address doesn't look valid";
  }
  $bad = array("content-type","bcc:","to:","cc:","href");
  $to = $myemail;
  $name = str_replace($bad, '', trim($_POST['name']));
  $email = str_replace($bad, '', trim($_POST['email']));
  $subject = str_replace($bad, '', trim($_POST['subject']));
  $message = str_replace($bad, '', trim($_POST['message']));
  if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $error = true; $msg = "Error - E-mail address '<u>$email</u>' doesn't look valid.";
  }
  if (!$name || !$email || !$subject || !$message) {
    $error = true; $msg = "Error - Name, email, subject and message cannot be blank.";
  }
  if(!$error){
    $headers = "From: phil.ewels.co.uk website <mailer@ewels.co.uk>\r\nReply-To: $name <$email>\r\nX-Mailer: PHP/".phpversion();
    $message = "From: $name <$email>\nSubject: $subject\n\n$message\n\n--\nSent from phil.ewels.co.uk contact form\n\n";
    if(mail($to, $subject, $message, $headers)){
      $msg = 'E-mail sent. Thanks!';
      $name = $email = $subject = $message = '';
    } else {
      $error = true; $msg = "Error, could not send mail (internal error).";
    }
  }
}

?><html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Phil Ewels</title>
    <meta name="description" content="Phil Ewels: A Bioinformatician in Stockholm, Sweden">
    <meta name="author" content="Phil Ewels">

    <!-- Bootstrap -->
    <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css" rel="stylesheet">
    <!-- Font Awesome -->
    <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet">
    <!-- Custom Styles -->
    <link href="styles.css" rel="stylesheet">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
</html>

<body>

<header>
  <div class="header-panel">
    <div>
      <h1><span class="slashes">//</span> Phil Ewels</h1>
      <h2 class="hidden-xs"><small>Bioinformatician in Stockholm, Sweden</span></small></h2>
    </div>
    <img src="phil_ewels.jpeg" class="hidden-xs">
  </div>
</header>

<main>
  <div class="container">
    <?php if($msg){ echo '<div class="row"><div class="col-sm-6 col-sm-push-3"><div class="alert alert-'.($error ? 'danger' : 'success').'">'.$msg.'</div></div></div>'; } ?>
    <div class="row">
      <section class="col-sm-6">
        <p class="lead">Hi there! I'm a bioinformatician at the
           <a href="http://www.scilifelab.se/facilities/genomics-applications/" target="_blank">Science for Life Laboratory</a>
           in Stockholm, Sweden.</p>
        <p>I am interested in epigenetics - the study of how DNA modifications affect
           the way that it is interpreted by the cell. I've worked extensively with <strong>bisulfite
           sequencing data</strong> to investigate DNA-methylation. I've also worked with <strong>Hi-C</strong>,
           a technique that probes the three-dimensional structure of
           chromatin within the cell nucleus. You can see my publications on
           <a href="http://www.researchgate.net/profile/Philip_Ewels" target="_blank">ResearchGate</a>.</p>
        <p>In addition to biological data analysis, I also develop packages to aid other researchers.
           I wrote <a href="http://clusterflow.io" target="_blank">Cluster Flow</a>, a tool to run analysis
           pipelines, and <a href="https://github.com/ewels/labrador" target="_blank">Labrador</a>,
           a web-based tool to manage public data at research institutes. All of my code is
           available on <a href="https://github.com/ewels/" target="_blank">GitHub</a> as open-source software.</p>
       </section>
       <section class="col-sm-6">
         <p>I have written and delivered a training course about
            <a href="http://www.bioinformatics.babraham.ac.uk/training.html#figuredesign" target="_blank">Scientific Figure Design</a>
            and maintain a suite of <a href="https://github.com/ewels/ngi_visualizations" target="_blank">visualization scripts</a>
            at the National Genomics Infrastructure at SciLifeLab. I write a blog about this
            and other things at <a href="http://www.tallphil.co.uk" target="_blank">tallphil.co.uk</a>.</p>
         <p>In addition to scientific programming, I develop websites and am interested
            in visual communication. I run a website design company in my spare time
            called <a href="http://www.customisedweb.com" target="_blank">Customised Web</a>
            and have released a number of
            <a href="https://profiles.wordpress.org/tallphil#content-plugins" target="_blank">WordPress plugins</a>.</p>
         <p>If you're interested in working with me or my code, don't hesitate to drop me an e-mail
            using the form below. For more details about me, see my <a href="cv/">online CV</a>.</p>
       </section>
     </div>
   </div>
</main>

<footer>
  <div class="container">
    <div class="row">
      <div class="col-sm-6 col-sm-push-6 col-md-4 col-md-push-8">
        <h4>Get in touch</h4>
        <form action="index.php" method="post">
          <div class="row">
            <div class="col-sm-6">
              <div class="form-group">
                <input type="text" name="name" class="form-control" placeholder="Name" required value="<?php echo $name; ?>">
              </div>
            </div>
            <div class="col-sm-6">
              <div class="form-group">
                <input type="email" name="email" class="form-control" placeholder="Email" required value="<?php echo $email; ?>">
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12">
              <div class="form-group">
                <input type="text" name="subject" class="form-control" placeholder="Subject" required value="<?php echo $subject; ?>">
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12">
              <div class="form-group">
                <textarea name="message" class="form-control" rows="4" placeholder="Message" required><?php echo $message; ?></textarea>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-2">
              <div class="form-group">
                <button type="submit" class="btn btn-dark">Send</button>
              </div>
            </div>
            <div class="col-xs-10" style="text-align:right;">
              <!-- Curious? See http://www.howtogeek.com/129673/does-email-address-obfuscation-actually-prevent-spam/ -->
              <span class="help-block"><a href="mailto:" target="_blank"><span style="unicode-bidi:bidi-override; direction: rtl;"><?php echo strrev($e['tld']).'.'.strrev($e['domain']); ?><span style="display:none">NOSPAM</span>@<?php echo strrev($e['name']); ?></span> <i class="fa fa-envelope"></i></a></span>
            </div>
          </div>
        </form>
      </div>
      <div class="col-sm-6 col-sm-pull-6 col-md-4 col-md-pull-4">
        <hr class="visible-xs">
        <h4>Where to find me</h4>
        <ul class="list-unstyled links-list">
          <li><a href="https://github.com/ewels/" target="_blank"><i class="fa fa-github"></i>GitHub</a></li>
          <li><a href="http://www.researchgate.net/profile/Philip_Ewels" target="_blank"><i class="fa fa-star-o"></i>ResearchGate</a></li>
          <li><a href="http://uk.linkedin.com/in/philewels" target="_blank"><i class="fa fa-linkedin"></i>LinkedIn</a></li>
          <li><a href="http://twitter.com/tallphil" target="_blank"><i class="fa fa-twitter"></i>twitter</a></li>
          <li><a href="http://orcid.org/0000-0003-4101-2502" target="_blank"><i class="fa fa-globe"></i>ORCiD</a></li>
        </ul>
        <section class="credits">
          <p>&copy; Phil Ewels, 2015. <a href="https://github.com/ewels/phil.ewels.co.uk" target="_blank">See the source code for this website on GitHub</a>.</p>
          <p>Header photo taken in Iceland. <a href="https://www.flickr.com/photos/tallphil/8569422117/in/set-72157633027461923" target="_blank">You can find it on flickr</a>.
          <div class="cc-licence">
            <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">
              <img alt="Creative Commons Licence" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/80x15.png" />
              Website theme licensed under a Creative Commons Attribution-ShareAlike 4.0 International License
            </a>.
          </div>
        </section>
      </div>
      <div class="col-md-4 col-md-pull-4 hidden-sm hidden-xs">
        <h4>Recent tweets</h4>
        <ul class="tweets">
        <?php for($i=0; $i<3; $i++){
          echo '<li><a href="https://twitter.com/tallphil/status/'.$tweets[$i]->id.'" target="_blank">'.$tweets[$i]->text.'</a></li>';
        } ?>
        </ul>
      </div>
    </div>
  </div>
</footer>
</body>
</html>
