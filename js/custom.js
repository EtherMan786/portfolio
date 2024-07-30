(function ($) {

	"use strict";

	/* ----------------------------------------------------------- */
	/*  FUNCTION TO STOP LOCAL AND YOUTUBE VIDEOS IN SLIDESHOW
	/* ----------------------------------------------------------- */

	function stop_videos() {
		var video = document.getElementById("video");
		if (video.paused !== true && video.ended !== true) {
			video.pause();
		}
		$('.youtube-video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	}

	$(document).ready(function () {

		/* ----------------------------------------------------------- */
		/*  STOP VIDEOS
		/* ----------------------------------------------------------- */

		$('.slideshow nav span').on('click', function () {
			stop_videos();
		});

		/* ----------------------------------------------------------- */
		/*  FIX REVEALATOR ISSUE AFTER PAGE LOADED
		/* ----------------------------------------------------------- */

		$(".revealator-delay1").addClass('no-transform');

		/* ----------------------------------------------------------- */
		/*  PORTFOLIO GALLERY
		/* ----------------------------------------------------------- */

		if ($('.grid').length) {
			new CBPGridGallery(document.getElementById('grid-gallery'));
		}

		/* ----------------------------------------------------------- */
		/*  BUTTONS ANIMATION
		/* ----------------------------------------------------------- */
		function checkSize() {
			if ($(document).width() > 992) {
				var btn_hover = "";
				$(".btn").each(function () {
					var btn_text = $(this).text();
					$(this).addClass(btn_hover).empty().append("<span data-hover='" + btn_text + "'>" + btn_text + "</span>");
				});
			}
		}
		checkSize();
		window.addEventListener('resize', function () {
			checkSize();
		});

		/* ----------------------------------------------------------- */
		/*  HIDE HEADER WHEN PORTFOLIO SLIDESHOW OPENED
		/* ----------------------------------------------------------- */

		$(".grid figure").on('click', function () {
			$("#navbar-collapse-toggle").addClass('hide-header');
		});

		/* ----------------------------------------------------------- */
		/*  SHOW HEADER WHEN PORTFOLIO SLIDESHOW CLOSED
		/* ----------------------------------------------------------- */

		$(".nav-close").on('click', function () {
			$("#navbar-collapse-toggle").removeClass('hide-header');
		});
		$(".nav-prev").on('click', function () {
			if ($('.slideshow ul li:first-child').hasClass('current')) {
				$("#navbar-collapse-toggle").removeClass('hide-header');
			}
		});
		$(".nav-next").on('click', function () {
			if ($('.slideshow ul li:last-child').hasClass('current')) {
				$("#navbar-collapse-toggle").removeClass('hide-header');
			}
		});

		/* ----------------------------------------------------------- */
		/*  PORTFOLIO DIRECTION AWARE HOVER EFFECT
		/* ----------------------------------------------------------- */

		var item = $(".grid li figure");
		var elementsLength = item.length;
		for (var i = 0; i < elementsLength; i++) {
			$(item[i]).hoverdir();
		}

		/* ----------------------------------------------------------- */
		/*  AJAX CONTACT FORM
		/* ----------------------------------------------------------- */

		// $(".contactform").on("submit", function() {
		// 	$(".output_message").text("Sending...");

		// 	var form = $(this);
		// 	$.ajax({
		// 		url: "https://contact-us-api.netlify.app/.netlify/functions/api/send-email",
		// 		method: form.attr("method"),
		// 		data: form.serialize(),
		// 		success: function(result) {
		// 			if (result == "success") {
		// 				$(".form-inputs").css("display", "none");
		// 				$(".box p").css("display", "none");
		// 				$(".contactform").find(".output_message").addClass("success");
		// 				$(".output_message").text("Message Sent!");
		// 			} else {
		// 				$(".tabs-container").css("height", "440px");
		// 				$(".contactform").find(".output_message").addClass("error");
		// 				$(".output_message").text("Error Sending!");
		// 			}
		// 		}
		// 	});

		// 	return false;
		// });

		// document.getElementById('contactform').addEventListener('submit', function(event) {
		// 	event.preventDefault();

		// 	const name = document.getElementById('name').value;
		// 	const email = document.getElementById('email').value;
		// 	const message = document.getElementById('message').value;
		// 	const subject = document.getElementById('subject').value;

		// 	fetch('https://contact-us-api.netlify.app/.netlify/functions/api/send-email', {
		// 		method: 'POST',
		// 		headers: {
		// 			'Content-Type': 'application/json'
		// 		},
		// 		body: JSON.stringify({ name,subject ,email, message })
		// 	})
		// 	.then(response => response.text())
		// 	.then(data => {
		// 		// alert(data); // Show response from server
		// 		console.log("datd",data);
		// 		if (data) {
		// 			$(".box p").css("display", "none");
		// 			$(".contactform").find(".output_message").addClass("success");
		// 			$(".output_message").text("Message Sent!");
		// 		}
		// 		document.getElementById('contactForm').reset();
		// 		$(".form-inputs").css("display", "none");

		// 	})
		// 	.catch(error => {

		// 		console.log("datd",error);
		// 		if (error) {
		// 			console.error('Error:', error);
		// 		$(".tabs-container").css("height", "440px");
		// 		$(".contactform").find(".output_message").addClass("error");
		// 		$(".output_message").text("Error Sending!");
		// 		}
		// 	});
		// });
		// document.getElementById('contactform').addEventListener('submit', function(event) {
		// 	event.preventDefault();

		// 	const name = document.getElementById('name').value;
		// 	const email = document.getElementById('email').value;
		// 	const message = document.getElementById('message').value;
		// 	const subject = document.getElementById('subject').value;

		// 	fetch('https://contact-us-api.netlify.app/.netlify/functions/api/send-email', {
		// 	  method: 'POST',
		// 	  headers: {
		// 		'Content-Type': 'application/json'
		// 	  },
		// 	  body: JSON.stringify({ name, subject, email, message })
		// 	})
		// 	.then(response => {
		// 	  // Check if response is successful
		// 	  if (!response.ok) {
		// 		throw new Error('Network response was not ok ' + response.statusText);
		// 	  }
		// 	  return response.text();
		// 	})
		// 	.then(data => {
		// 	  console.log("data", data);
		// 	  if (data) {
		// 		$(".box p").css("display", "none");
		// 		$(".contactform").find(".output_message").addClass("success");
		// 		$(".output_message").text("Message Sent!");
		// 		$(".form-inputs").css("display", "none");
		// 		setTimeout(() => {
		// 			window.location.reload();
		// 		  }, 1000);
		// 	}

		// 	})
		// 	.catch(error => {
		// 	  console.log("error", error);
		// 	  $(".tabs-container").css("height", "440px");
		// 	  $(".contactform").find(".output_message").addClass("error");
		// 	  $(".output_message").text("Error Sending!");
		// 	});
		//   });
		// document.getElementById('contactform').addEventListener('submit', function (event) {
		// 	event.preventDefault();

		// 	// Show the loader and apply blur
		// 	document.getElementById('loader').style.display = 'block';
		// 	document.getElementById('blur-container').classList.add('blur');

		// 	const name = document.getElementById('name').value;
		// 	const email = document.getElementById('email').value;
		// 	const message = document.getElementById('message').value;
		// 	const subject = document.getElementById('subject').value;

		// 	fetch('https://contact-us-api.netlify.app/.netlify/functions/api/send-email', {
		// 		method: 'POST',
		// 		headers: {
		// 			'Content-Type': 'application/json'
		// 		},
		// 		body: JSON.stringify({ name, subject, email, message })
		// 	})
		// 		.then(response => {
		// 			// Check if response is successful
		// 			if (!response.ok) {
		// 				throw new Error('Network response was not ok ' + response.statusText);
		// 			}
		// 			return response.text();
		// 		})
		// 		.then(data => {
		// 			console.log("data", data);
		// 			if (data) {
		// 				$(".box p").css("display", "none");
		// 				$(".contactform").find(".output_message").addClass("success");
		// 				$(".output_message").text("Message Sent!");
		// 				$(".form-inputs").css("display", "none");
		// 				setTimeout(() => {
		// 					window.location.reload();
		// 				}, 1000);
		// 			}

		// 			// Hide the loader and remove blur
		// 			document.getElementById('loader').style.display = 'none';
		// 			document.getElementById('blur-container').classList.remove('blur');
		// 		})
		// 		.catch(error => {
		// 			console.log("error", error);
		// 			$(".tabs-container").css("height", "440px");
		// 			$(".contactform").find(".output_message").addClass("error");
		// 			$(".output_message").text("Error Sending!");

		// 			// Hide the loader and remove blur
		// 			document.getElementById('loader').style.display = 'none';
		// 			document.getElementById('blur-container').classList.remove('blur');
		// 		});
		// });
		document.getElementById('contactform').addEventListener('submit', function(event) {
			event.preventDefault();
			
			// Show the loader and blur overlay
			document.getElementById('loader').style.display = 'block';
			document.getElementById('blur-overlay').style.display = 'flex';
		  
			const name = document.getElementById('name').value;
			const email = document.getElementById('email').value;
			const message = document.getElementById('message').value;
			const subject = document.getElementById('subject').value;
			
			fetch('https://contact-us-api.netlify.app/.netlify/functions/api/send-email', {
			  method: 'POST',
			  headers: {
				'Content-Type': 'application/json'
			  },
			  body: JSON.stringify({ name, subject, email, message })
			})
			.then(response => {
			  // Check if response is successful
			  if (!response.ok) {
				throw new Error('Network response was not ok ' + response.statusText);
			  }
			  return response.text();
			})
			.then(data => {
			  console.log("data", data);
			  if (data) {
				$(".box p").css("display", "none");
				$(".contactform").find(".output_message").addClass("success");
				$(".output_message").text("Message Sent!");
				$(".form-inputs").css("display", "none");
				setTimeout(() => {
				  window.location.reload();
				}, 1000);
			  }
		  
			  // Hide the loader and blur overlay
			  document.getElementById('loader').style.display = 'none';
			  document.getElementById('blur-overlay').style.display = 'none';
			})
			.catch(error => {
			  console.log("error", error);
			  $(".tabs-container").css("height", "440px");
			  $(".contactform").find(".output_message").addClass("error");
			  $(".output_message").text("Error Sending!");
		  
			  // Hide the loader and blur overlay
			  document.getElementById('loader').style.display = 'none';
			  document.getElementById('blur-overlay').style.display = 'none';
			});
		  });
					
	});

	$(document).keyup(function (e) {

		/* ----------------------------------------------------------- */
		/*  KEYBOARD NAVIGATION IN PORTFOLIO SLIDESHOW
		/* ----------------------------------------------------------- */
		if (e.keyCode === 27) {
			stop_videos();
			$('.close-content').click();
			$("#navbar-collapse-toggle").removeClass('hide-header');
		}
		if ((e.keyCode === 37) || (e.keyCode === 39)) {
			stop_videos();
		}
	});


})(jQuery);
