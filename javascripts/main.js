$(document).ready(function () {
    $("[role=content]").each(function (index, element) {
        var $element  = $(element),
        font_size = parseInt($element.css("font-size"), 10);

        while ($element.height() > 200) {
            font_size = font_size - 1;
            $element.css("font-size", font_size);
            var height = $element.height();
        }
    });

    $("article").on("click", function (e) {
        var elem = this;

        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
        }

        $(this).find("[role=content]").addClass("active");
    });

    $(document).on("mozfullscreenchange", function () {
        if (document.mozFullScreen === false) {
            $(".active").removeClass("active");
        }
    });
});
