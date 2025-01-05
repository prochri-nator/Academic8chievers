	var navLinks = document.getElementById("navLinks");

    	function showMenu(){
        navLinks.style.right = "0";
    }
    	function hideMenu(){
        navLinks.style.right = "-200px";
    }

	let mybutton = document.getElementById("myBtn");

    	window.onscroll = function() {scrollFunction()};

    	function scrollFunction() {
      	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }


    function topFunction() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }