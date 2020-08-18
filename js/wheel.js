window.addEventListener("scroll", function(event) {
   		
        var bottomel = document.getElementById("bottom");
        var newscroll = window.pageYOffset;

        if (newscroll > 0) {
            bottomel.scrollIntoView({
				block: "start",
				behavior: "smooth"
			});
        } 
    });