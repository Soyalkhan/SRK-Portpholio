// for change on name animation
document.addEventListener("DOMContentLoaded", function() {
    const textArray = ["3D Artist", "3D Modeler", "Creative Visionary", "Architecture Designer"];
    let textIndex = 0;
    let charIndex = 0;
    const typedTextSpan = document.querySelector(".typed-text");
    const cursorSpan = document.querySelector(".cursor");

    function type() {
        if (charIndex < textArray[textIndex].length) {
            typedTextSpan.textContent += textArray[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, 150);
        } else {
            setTimeout(erase, 1000);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typedTextSpan.textContent = textArray[textIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, 100);
        } else {
            textIndex = (textIndex + 1) % textArray.length;
            setTimeout(type, 300);
        }
    }

    type();
});

// fo drawer
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const drawer = document.getElementById('drawer');
    const drawerClose = document.getElementById('drawerClose');

    menuToggle.addEventListener('click', function() {
        drawer.classList.add('active');
    });

    drawerClose.addEventListener('click', function() {
        drawer.classList.remove('active');
    });

    // Close the drawer when clicking outside of it
    document.addEventListener('click', function(event) {
        if (!drawer.contains(event.target) && !menuToggle.contains(event.target)) {
            drawer.classList.remove('active');
        }
    });
});



// for contact page 


  document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const submitButton = form.querySelector('button');
    const formMessage = document.getElementById('formMessage');
    
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        
        // Show spinner and disable button
        submitButton.innerHTML = 'Submitting... <div class="spinner"></div>';
        submitButton.disabled = true;
        
        // Extract form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Send email using EmailJS
        emailjs.send('service_o2m4ugq', 'template_tw8zwya', {
            from_name: name,
            from_email: email,
            message: message
        })
        .then(function (response) {
            // Success: Show success message
            formMessage.textContent = 'Message sent successfully!';
            formMessage.classList.add('success');
            formMessage.classList.remove('error');
            formMessage.style.display = 'block';
        }, function (error) {
            // Failed: Show error message
            formMessage.textContent = 'Failed to send message. Please try again.';
            formMessage.classList.add('error');
            formMessage.classList.remove('success');
            formMessage.style.display = 'block';
        })
        .finally(function () {
            // Reset button and form
            submitButton.innerHTML = 'Submit';
            submitButton.disabled = false;
            form.reset();
        });
    });
});
