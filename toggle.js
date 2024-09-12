document.addEventListener("DOMContentLoaded", function() {
    var styleToggle = document.getElementById("toggle");
    var defaultCSS = document.getElementById("default");
    var alternateCSS = document.getElementById("alternate");

    function toggle() {
        defaultCSS.disabled = styleToggle.checked;
        alternateCSS.disabled = !styleToggle.checked;
    }

    toggle();
    styleToggle.addEventListener("change", toggle);
})