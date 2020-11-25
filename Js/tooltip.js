$(document).ready(function(){
    $(".section").prepend("<div class=\"tooltip\">Copy</div>");
    $(".section").hover(function(){
        var tooltip = jQuery(this).children(".tooltip");
        tooltip.fadeToggle(150);
        $(".section").click(function(){
            tooltip.text("Copy ✓")
        })
    })
})