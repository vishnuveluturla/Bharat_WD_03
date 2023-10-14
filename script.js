
    document.getElementById("signin-button").addEventListener("click", function() {
        
        var signInSection = document.getElementById("signin");
        if (signInSection) {
            
            signInSection.style.display = "block";
            
            signInSection.scrollIntoView({ behavior: "smooth" });
            
            setTimeout(function() {
                signInSection.style.display = "none";
            }, 300000); 
        }
    });
