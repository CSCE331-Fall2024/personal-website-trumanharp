document.addEventListener("DOMContentLoaded", function() {
    var styleToggle = document.getElementById("toggle");
    var defaultCSS = document.getElementById("default");
    var alternateCSS = document.getElementById("alternate");

    function toggle() {
        if(styleToggle.checked) {
            defaultCSS.disabled = true;
            alternateCSS.disabled = false;
            localStorage.setItem("css", "alt");
        } else {
            defaultCSS.disabled = false;
            alternateCSS.disabled = true;
            localStorage.setItem("css", "default");
        }
    }
    var saved = localStorage.getItem("css");

    if(saved == "alt") {
        styleToggle.checked = true;
        /* defaultCSS.disabled = true;
        alternateCSS.disabled = false; */
    } else {
        styleToggle.checked = false;
        /* defaultCSS.disabled = false;
        alternateCSS.disabled = true; */
    }

    toggle();
    styleToggle.addEventListener("change", toggle);
});