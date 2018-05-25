//Start Builder Javascript Section
$(document).ready(function () {
		var logo = $.templates("#mainTemplate");
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    var market = getUrlVars()["market"];
    var view = getUrlVars()["view"];
    var source = getUrlVars()["source"];
		var campaignName = "Sale";

//Query string splicer
    function getUrlVars() {
        for (var i = 0; i < hashes.length; i++) {
            hash = hashes[i].split('=');
            vars.push(hash[0]);
            vars[hash[0]] = hash[1];
        }
        return vars;
    }

//Read market JSON files
    if (market == 'bs') {
        $.getJSON('data/bs.json', function(data) {
          var logoField = logo.render(data, {idgroup: source});
            $(".mainContainer").html(logoField);
					return landingPageJs();
        });
				$('#btn-bs').addClass('btn-underline');
				document.title = "Baltimore Sun " + campaignName;
    } else if (market == 'cc') {
        $.getJSON('data/cc.json', function(data) {
          var logoField = logo.render(data, {idgroup: source});
            $(".mainContainer").html(logoField);
					return landingPageJs();
        });
				$('#btn-cc').addClass('btn-underline');
				document.title = "Carroll County Times " + campaignName;
    } else if (market == 'cg') {
        $.getJSON('data/cg.json', function(data) {
          var logoField = logo.render(data, {idgroup: source});
            $(".mainContainer").html(logoField);
					return landingPageJs();
        });
				$('#btn-cg').addClass('btn-underline');
				document.title = "Capital Gazette " + campaignName;
    } else if (market == 'ct') {
        $.getJSON('data/ct.json', function(data) {
          var logoField = logo.render(data, {idgroup: source});
            $(".mainContainer").html(logoField);
					return landingPageJs();
        });
				$('#btn-ct').addClass('btn-underline');
				document.title = "Chicago Tribune " + campaignName;
    } else if (market == 'dp') {
        $.getJSON('data/dp.json', function(data) {
          var logoField = logo.render(data, {idgroup: source});
            $(".mainContainer").html(logoField);
				return landingPageJs();
			});
				$('#btn-dp').addClass('btn-underline');
				document.title = "Daily Press " + campaignName;
    } else if (market == 'hc') {
        $.getJSON('data/hc.json', function(data) {
          var logoField = logo.render(data, {idgroup: source});
            $(".mainContainer").html(logoField);
				return landingPageJs();
			});
				$('#btn-hc').addClass('btn-underline');
				document.title = "Hartford Courant " + campaignName;
    } else if (market == 'la') {
        $.getJSON('data/la.json', function(data) {
          var logoField = logo.render(data, {idgroup: source});
            $(".mainContainer").html(logoField);
					return landingPageJs();
        });
				$('#btn-la').addClass('btn-underline');
				document.title = "Los Angeles Times " + campaignName;
    } else if (market == 'mc') {
        $.getJSON('data/mc.json', function(data) {
          var logoField = logo.render(data, {idgroup: source});
            $(".mainContainer").html(logoField);
				return landingPageJs();
			});
				$('#btn-mc').addClass('btn-underline');
				document.title = "The Morning Call " + campaignName;
    } else if (market == 'os') {
        $.getJSON('data/os.json', function(data) {
          var logoField = logo.render(data, {idgroup: source});
            $(".mainContainer").html(logoField);
					return landingPageJs();
        });
				$('#btn-os').addClass('btn-underline');
				document.title = "Orlando Sentinel " + campaignName;
    } else if (market == 'sd') {
        $.getJSON('data/sd.json', function(data) {
          var logoField = logo.render(data, {idgroup: source});
            $(".mainContainer").html(logoField);
				return landingPageJs();
			});
				$('#btn-sd').addClass('btn-underline');
				document.title = "The San Diego Union-Tribune " + campaignName;
    } else if (market == 'ss') {
        $.getJSON('data/ss.json', function(data) {
          var logoField = logo.render(data, {idgroup: source});
            $(".mainContainer").html(logoField);
				return landingPageJs();
			});
				$('#btn-ss').addClass('btn-underline');
				document.title = "Sun Sentinel " + campaignName;
    } else if (market == 'tw') {
        $.getJSON('data/tw.json', function(data) {
          var logoField = logo.render(data, {idgroup: source});
            $(".mainContainer").html(logoField);
				return landingPageJs();
			});
				$('#btn-tw').addClass('btn-underline');
				document.title = "Tidewater Review " + campaignName;
    } else if (market == 'vg') {
        $.getJSON('data/vg.json', function(data) {
          var logoField = logo.render(data, {idgroup: source});
            $(".mainContainer").html(logoField);
				return landingPageJs();
			});
				$('#btn-vg').addClass('btn-underline');
				document.title = "Virginia Gazette " + campaignName;
    } else {
        console.log("Market and Source undefined");
    }

});
//End Builder Javascript Section

//Start Landing Page Javascript Section
	var landingPageJs = function () {

		$(window).bind("pageshow", function () {
		$(".cta-input").val('');
		$(".cta-btn-expand").show();
		$(".loader").hide();
		});

  //Head Date Countdown
	var current = new Date();
  var expiry  = new Date("September 28, 2017 23:59:59");
  var expiry2 = new Date("September 29, 2017 23:59:59");
	var expiry3 = new Date("October 1, 2017 23:59:59");

if (current.getTime() < expiry.getTime()) {
    $('#countdown1').show();
  } else if (current.getTime() > expiry.getTime() && current.getTime() < expiry2.getTime()) {
    $('#countdown2').show();
  } else if (current.getTime() > expiry2.getTime() && current.getTime() < expiry3.getTime()) {
    $('#countdown3').show();
  } else if (current.getTime() > expiry3.getTime()) {
    $('#countdown4').show();
  }

	// References for dynamic DOM elements
	var startBtn = $(".cta-btn-zip");

	// CTA click to reveal zip input
	$(".cta-btn-zip").click( function () {

  if ($(this).attr('href')) {
    window.location = $(this).attr('href');
  } else {
    $(this).hide();
    $(this).siblings('.cta-input-div').show();
    $(this).siblings('.cta-input-div2').show();
    $(this).siblings('.cta-input-div').find('input').focus();
    $(this).siblings('.cta-input-div2').find('input').focus();
  }
	});

	// Device image click to reveal zip input
	$('#device-print').click(function(){
	  $(".mix-btn").hide();
	  $(".mix-btn").siblings('.cta-input-div').show();
	  $(".mix-btn").siblings('.cta-input-div').find('#mix-input').focus();
	});

	// Zip code validation
	$(".cta-input").keyup(function (e) {
	  $(this).removeClass('error');
	  $(this).siblings('.cta-error').find('span').text('');
	  if (e.which == 13 || e.keyCode == 13) {
	    var zip = $(this).val();
	    var urls = $(this).siblings('.cta-btn-expand').attr('href');
	    var validated = validate.zip(zip, urls);
	    if (validated.result === true) {
	      window.location = urls + zip;
	    } else {
	      $(this).siblings('.cta-error').find('span').text(validated.text);
	      $(this).addClass('error');
	    }
	  }
	});

	$(".cta-btn-expand").on({
	  click: function (e) {
	    e.preventDefault();
	    $(this).siblings('.cta-input').removeClass('error');
	    $(this).siblings('.cta-error').find('span').text('');
	    var zip = $(this).siblings('.cta-input').val();
	    var urls = $(this).attr('href');
	    var validated = validate.zip(zip, urls);
	    if (validated.result !== true) {
	      $(this).siblings('.cta-error').find('span').text(validated.text);
	      $(this).siblings('.cta-input').addClass('error');
	    }
	  }
	});

	$('.cta-btn-expand').click(function() {
	  var zip = $(this).siblings('.cta-input').val();
	  var urls = $(this).attr('href');
	  var validated = validate.zip(zip, urls);
	  if (validated.result === true) {
	    $(this).hide();
	    $(this).siblings('.loader').show();
	  }
	});

	var validate = {
	zip: function (zip, urls) {
	  if (zip === '') {
	    return {
	      text: 'Please Enter a Zip Code',
	      result: false
	    };
	  }
	  var test = /^\b\d{5}(-\d{4})?\b$/.test(zip);

	  if (test === true) {

	    var _delay = function (zip, urls) {
	      setTimeout(function () {
	        window.location = urls + zip;
	      }, 500);
	    };
	    _delay(zip, urls);
	    return {
	      result: true
	    };
	  } else {
	    return {
	      text: 'Please Enter a Zip Code',
	      result: false
	    };
	  }
	}
	};
	};
