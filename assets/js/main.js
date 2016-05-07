
/*
 Main javascript for phil.ewels.co.uk
*/

if ('addEventListener' in window) {
  window.addEventListener('load', function() { document.body.className = document.body.className.replace(/\bis-loading\b/, ''); });
  document.body.className += (navigator.userAgent.match(/(MSIE|rv:11\.0)/) ? ' is-ie' : '');
}

$(function(){
  
  // Hover text for social buttons
  $('.icons a').hover(
    function() { $('#linkHoverText').text( $(this).clone().children().remove().end().text() ); },
    function() { $('#linkHoverText').text(''); }
  );
  
  // Flip the card!
  // $("#main").flip({
  //   // trigger: 'manual'
  // });
  // $('a[href="#projects"]').click(function(e){
  //   e.preventDefault();
  //   $("#main").flip(true);
  // });

})