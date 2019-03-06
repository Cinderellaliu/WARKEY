$(document).ready(function () {
    $(".sidebar-collapse,.overlay").click(function(){
        $('.overlay').toggleClass('active');
        $('body').toggleClass('active');
        $('.index-left').toggleClass('collapsed');
        $('.index-left').addClass('transition');
        $('.transition').one(transitionEvent,
            function(e) {
                $('.index-left').removeClass('transition');
            });
    });
    $(".sidebar-collapse02,.overlay02").click(function(){
        $('.overlay02').toggleClass('active');
        $('body').toggleClass('active');
        $('.index-right .nav-tabs').toggleClass('collapsed');
        $('.index-right .nav-tabs').addClass('transition');
        $('.transition').one(transitionEvent,
            function(e) {
                $('.index-right .nav-tabs').removeClass('transition');
            });
    });

});
