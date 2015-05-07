(function($) {
    $(function() {
        $('.fancybox').each(function(index, el) {
            var fb = $(el).fancybox();

            $($(el).attr('href')).find('a.button').click(function(e) {
                e.preventDefault();
                $.fancybox.close();
            });
        });
    });
})(jQuery);