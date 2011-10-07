/*
 * css3effect
 * copyright benjamin intal
 * https://github.com/bfintal/css3Effects
 */
var css3Effect;
(function($) {
    css3Effect = {
        fixAll: function() {
            this.fixBlocked('css3Effects-shadow-sides');
            this.fixBlocked('css3Effects-shadow-mid');
        },
    
        fixBlocked: function(classToFix) {
            $('.'+classToFix).each(function() { 
            console.log($(this));
                var display = $(this).css('display');
                if (display == '' || display != 'block') {
                    $(this).removeClass(classToFix);
                    $(this).after('<div class="css3Effects-clearfix"></div>').wrapAll('<div class="'+classToFix+'" style="float: left"/>');
                }
            });
        }
    }
})(jQuery);

jQuery(document).ready(function($){
    css3Effect.fixAll();
});