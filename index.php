<?php

// Contact form
$e = json_decode(file_get_contents('myemail.json'), true);
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
  $subject = str_replace($bad, '', trim($_POST['subject']));
  $message = str_replace($bad, '', trim($_POST['message']));
  if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $error = true; $msg = "Error - E-mail address '<u>$email</u>' doesn't look valid.";
  }
  if (!$name || !$email || !$subject || !$message) {
    $error = true; $msg = "Error - Name, email, subject and message cannot be blank.";
  }
  //verify captcha
  $response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=".$e['recaptcha_secret']."&response=".$_POST['g-recaptcha-response']);
  $response = json_decode($response, true);
  if($response["success"] !== true)  {
      $error = true; $msg = "Error - Anti-spam captcha verification failed. Please try again.";
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
    <meta name="description" content="Phil Ewels - Bioinformatician in Stockholm, Sweden">
    <meta name="author" content="Phil Ewels">

    <!-- <link href="jquery.pagepiling.css" rel="stylesheet"> -->
    <link href="styles.css" rel="stylesheet">
  </head>
</html>

<body>

<!-- Contact Form Message -->
<?php if($msg){ echo '<div class="row"><div class="col-sm-6 col-sm-push-3"><div class="alert alert-'.($error ? 'danger' : 'success').'">'.$msg.'</div></div></div>'; } ?>

<section id="about">
  <div>
    <header>
      <img src="phil_ewels.jpeg">
      <h1><span class="slashes">//</span> Phil Ewels</h1>
      <p>Hi there! I'm a bioinformatician at the <a href="http://www.scilifelab.se/facilities/genomics-applications/" target="_blank">Science for Life Laboratory</a> in Stockholm, Sweden.</p>
    </header>
    <nav>
      <a class="navlink_research" href="#research"><img src="img/research.svg"> Research</a>
      <a class="navlink_code" href="#code"><img src="img/code.svg"> Code</a>
      <a class="navlink_datavis" href="#data_vis"><img src="img/datavis.svg"> Data Visualisation</a>
      <a class="navlink_web" href="#websites"><img src="img/web.svg"> Website Design</a>
      <a class="navlink_links" href="#links"><img src="img/links.svg"> Links</a>
      <a class="navlink_contact" href="#contact"><img src="img/contact.svg"> Contact Me</a>
    </nav>
  </div>
</section>

<section id="research">
  <div class="section_header">
    <h2>Research</h2>
    <img src="img/research.svg">
  </div>
  <div class="section_body">
    <p>I am interested in epigenetics - the study of how DNA modifications affect
    the way that it is interpreted by the cell. I've worked extensively with <strong>bisulfite
    sequencing data</strong> to investigate DNA-methylation. I've also worked with <strong>Hi-C</strong>,
    a technique that probes the three-dimensional structure of
    chromatin within the cell nucleus. You can see my publications on
    <a href="http://www.researchgate.net/profile/Philip_Ewels" target="_blank">ResearchGate</a>.</p>
  </div>
</section>

<section id="code">
  <div class="section_header">
    <h2>Code</h2>
    <img src="img/code.svg">
  </div>
  <div class="section_body">
    <p>In addition to biological data analysis, I also develop packages to aid other researchers.
    I wrote <a href="http://clusterflow.io" target="_blank">Cluster Flow</a>, a tool to run analysis
    pipelines, and <a href="https://github.com/ewels/labrador" target="_blank">Labrador</a>,
    a web-based tool to manage public data at research institutes. All of my code is
    available on <a href="https://github.com/ewels/" target="_blank">GitHub</a> as open-source software.</p>
  </div>
</section>

<section id="data_vis">
  <div class="section_header">
    <h2>Data<br>Visualisation</h2>
    <img src="img/datavis.svg">
  </div>
  <div class="section_body">
    <p>I have written and delivered a training course about
    <a href="http://www.bioinformatics.babraham.ac.uk/training.html#figuredesign" target="_blank">Scientific Figure Design</a>
    and maintain a suite of <a href="https://github.com/ewels/ngi_visualizations" target="_blank">visualization scripts</a>
    at the National Genomics Infrastructure at SciLifeLab. I write a blog about this
    and other things at <a href="http://www.tallphil.co.uk" target="_blank">tallphil.co.uk</a>.</p>
  </div>
</section>

<section id="websites">
  <div class="section_header">
    <h2>Websites</h2>
    <img src="img/web.svg">
  </div>
  <div class="section_body">
    <p>In addition to scientific programming, I develop websites and am interested
    in visual communication. I run a website design company in my spare time
    called <a href="http://www.customisedweb.com" target="_blank">Customised Web</a>
    and have released a number of
    <a href="https://profiles.wordpress.org/tallphil#content-plugins" target="_blank">WordPress plugins</a>.</p>
  </div>
</section>

<section id="links">
  <div class="section_header">
    <h2>Links</h2>
    <img src="img/links.svg">
  </div>
  <div class="section_body">
    <p>Where to find me:</p>
    <ul>
      <li><a href="https://github.com/ewels/" target="_blank"><i class="fa fa-github"></i>GitHub</a></li>
      <li><a href="http://www.researchgate.net/profile/Philip_Ewels" target="_blank"><i class="fa fa-star-o"></i>ResearchGate</a></li>
      <li><a href="http://uk.linkedin.com/in/philewels" target="_blank"><i class="fa fa-linkedin"></i>LinkedIn</a></li>
      <li><a href="http://twitter.com/tallphil" target="_blank"><i class="fa fa-twitter"></i>twitter</a></li>
      <li><a href="http://orcid.org/0000-0003-4101-2502" target="_blank"><i class="fa fa-globe"></i>ORCiD</a></li>
    </ul>
  </div>
</section>

<section id="contact">
  <div class="section_header">
    <h2>Contact Me</h2>
    <img src="img/contact.svg">
  </div>
  <div class="section_body">
    <p>If you're interested in working with me or my code, don't hesitate to drop me an e-mail
    using the form below. For more details about me, see my <a href="cv/">online CV</a>.</p>
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
        <div class="form-group">
          <div class="g-recaptcha center-block" <?php if(!$error){ echo 'style="display: none;"'; } ?> data-theme="dark" data-sitekey="6LdLgAYTAAAAAIfNMlaNEc3K39HSOn6tEA41Ngf-"></div>
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
</section>

<footer>
  <p>&copy; Phil Ewels, 2015. <a href="https://github.com/ewels/phil.ewels.co.uk" target="_blank">See the source code for this website on GitHub</a>.</p>
  <div class="cc-licence">
    <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">
      <img alt="Creative Commons Licence" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/80x15.png">Website theme licensed under a Creative Commons Attribution-ShareAlike 4.0 International License
    </a>.
  </div>
</footer>

<!-- Side Navigation -->
<nav id="side_nav">
  <a href="#about">About <img src="img/about.svg"></a>
  <a href="#research">Research <img src="img/research.svg"></a>
  <a href="#code">Code <img src="img/code.svg"></a>
  <a href="#data_vis">Data Visualisation <img src="img/datavis.svg"></a>
  <a href="#websites">Website Design <img src="img/web.svg"></a>
  <a href="#links">Links <img src="img/links.svg"></a>
  <a href="#contact">Contact Me <img src="img/contact.svg"></a>
</nav>


<!-- jQuery -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<!-- Google reCaptcha -->
<script src='https://www.google.com/recaptcha/api.js'></script>
<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
<!--[if lt IE 9]>
  <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
  <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
<![endif]-->
<!-- In-page javascript -->
<script type="text/javascript">
  $(document).ready(function() {
    // Smooth scroll
    var $root = $('html, body');
    $('a').click(function() {
      var href = $.attr(this, 'href');
      $root.animate({
        scrollTop: $(href).offset().top
      }, 500, function () {
        window.location.hash = href;
      });
      return false;
    });
    // Show the reCaptcha only when an e-mail is started..
    $("form input[type='text'], form textarea").keyup(function(){
      $('.g-recaptcha').slideDown();
    });
  });
</script>

</body>
</html>
