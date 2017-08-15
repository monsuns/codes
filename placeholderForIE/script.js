    /**
     *if isIE && not support placeholder, get placeholder value, create a fake placeholder.
     *require Modernizr
     *require jQuery
     */

var simulateHolder = function(){
	this.
}
simulateHolder.prototype = {
	create: function(){},
	bind: function(){},
	init: function(){}
}
//$(new simulateHolder);


    function createHolder(iptNode) {
      var $ipt = $(iptNode), //jq object
        ipt = $ipt[0], // input node
        phTitle = ipt.id, // holder title
        phValue = $ipt.attr('placeholder'), // holder text
        phNode = ''; // created node before input
      phNode = '<span title="' + phTitle + '" class="placeholderStyle">' + phValue + '</span>'; // create a placeholder node
      $ipt.before(phNode); // put this fake holder before input
    }

    function bindHolder() {
      // bind click event for fake holder
      $('.placeholderStyle').click(function() {
        $(this).hide(); //hide fake holder
        $(this).next('input[type=text]').focus(); //focus real input
      })
      $('input[type=text]').click(function() {
        $(this).prev('.placeholderStyle').hide();
      })
      $('input[type=text]').blur(function() {
        if (!this.value) {
          $(this).prev('.placeholderStyle').show();
        }
      })
    }

    function simulatePlaceholder() {
      var $iptAll = $('input[type=text]');

      if (!Modernizr.input.placeholder) {
        for (var i = 0; i < $iptAll.length; i++) {
          var ipt = $iptAll[i];
          if ($(ipt).attr('placeholder')) {
            createHolder(ipt);
          }
        }
        bindHolder();
      }
    }

    $(document).ready(function(e) {
      simulatePlaceholder()
    });
