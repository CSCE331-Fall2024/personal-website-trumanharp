document.addEventListener("DOMContentLoaded", function() {
    var iconBar = document.getElementById("icon_bar");
    var qualContent = document.getElementById("qual_content");

    qualContent.parentNode.insertBefore(iconBar,qualContent);
});