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
