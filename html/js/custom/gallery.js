$("#gallery .nav button").click(function (e) {
    e.preventDefault();
    $("#gallery .nav li.active").removeClass("active");
    var button = $(e.currentTarget);
    button.closest("li").addClass("active");

    var wrapper = $("#gallery-wrapper");
    switch (button.attr('id')) {
        case "gal-button-all":
            wrapper.removeClass();
            wrapper.addClass("gal-show-all");
            break;
        case "gal-button-windows":
            wrapper.removeClass();
            wrapper.addClass("gal-show-window");
            break;
        case "gal-button-doors":
            wrapper.removeClass();
            wrapper.addClass("gal-show-door");
            break;
        case "gal-button-balcony":
            wrapper.removeClass();
            wrapper.addClass("gal-show-balcony");
            break;

    }
});