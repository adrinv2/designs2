 windowwidth = $( window ).width(); // The width of the webpage into a variable called windowwidth
 windowheight = $( window ).height(); // the height of the webpage into a variable called windowheight

 $('#content').animate({ // When the webpage is loaded the page will scroll to the center of the page because it scrolls two times the width of the webpage.
        scrollLeft: "+="+windowwidth*2+"px"
      }, "slow");


   $('.home').click(function() { // when you click on the home button the whole webpage reloads
		location.reload();
	});

   $('.right').click(function() { // click on the right button to move the page to the right
      $('#content').animate({
        scrollLeft: "+="+windowwidth+"px" // This code says bascially scroll to the right by the width of the page
      }, "slow");
   });

     $('.left').click(function() { // click on the left button to move the page to the left
      $('#content').animate({
        scrollLeft: "-="+windowwidth+"px" // This code says bascially scroll to the left by the width of the page
      }, "slow");
   });

var images = document.getElementsByClassName('randomimg');   // collect all images in the webpage with a class randomimg into a variable called images
 for (var i = 0, l = images.length; i < l; i++) { // for each image in the variable do the following
  images[i].style.width = Math.floor((Math.random() * 10) + 5) + "%"; // have a random with of between 10 and 40 %
  images[i].style.left = Math.floor((Math.random() * 50) + 10) + "%"; // have a left margin of between 10 and 60 %
  images[i].style.top = Math.floor((Math.random() * 50) + 10) + "%"; // have a top margin of between 10 and 60 %
}

     $(document).on( "click", '.pinecone', function() { // on click on the pinecone button move the pinecone text up with the height of the webpage
		$('.pineconetext').addClass('pineup'); //Add class pineup to pineconetext to make sure it can go again later
		$('.pinebutton').hide(); //Hide the button
		$('.pineconetext').animate({
		    top: "-="+windowheight+"px"
		  }, 1000, function() {
		    // Animation complete.
		  });
	});

	$(document).on('click', ".pineup", function() { // on click on the pineconetext page move the pinecone text down with the height of the webpage
		$('.pineconetext').removeClass('pineup'); //Remove the pineup class
		$('.pinebutton').show(); // Show again the button
		$('.pineconetext').animate({
		    top: "+="+windowheight+"px"
		  }, 1000, function() {
		    // Animation complete.
		  });
	});
