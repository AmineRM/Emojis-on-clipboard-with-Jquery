$(document).ready(function(){
        $(".section").click(function(){
                var value = jQuery(this).children("p");
                copy(value);
        })   
        function copy(element) {
                var $temp = $("<input>");
                $("body").append($temp);
                $temp.val($(element).text()).select();
                document.execCommand("copy");
                $temp.remove();
        }
})


