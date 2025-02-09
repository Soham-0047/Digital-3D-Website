$('.carousel').carousel({
    interval:3000
  })

  const div = document.querySelector('.container')

     jQuery(document).ready(function() {
    function count($this){
    var current = parseInt($this.html(), 10);
    current = current + 1; /* Where 1 is increment */
    $this.html(++current);
    if(current > $this.data('count')){
    $this.html($this.data('count'));
    } else {
    setTimeout(function(){count($this)}, 50);
    }
    }
    
    jQuery(".count-up").each(function() {
    jQuery(this).data('count', parseInt(jQuery(this).html(), 10));
    jQuery(this).html('0');
    count(jQuery(this));
    });

    
    jQuery(".count1").each(function() {
      jQuery(this).data('count', parseInt(jQuery(this).html(), 10));
      jQuery(this).html('0');
      count(jQuery(this));
      });


      
    jQuery(".count2").each(function() {
      jQuery(this).data('count', parseInt(jQuery(this).html(), 10));
      jQuery(this).html('0');
      count(jQuery(this));
      });



    });
  
 

  