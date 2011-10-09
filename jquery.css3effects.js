/*
 * css3effect
 * copyright benjamin intal
 * https://github.com/bfintal/css3Effects
 */
var css3Effect;
(function($) {
    css3Effect = {
        fixAll: function() {
            this.fixElement('css3Effects-shadow-sides');
            this.fixElement('css3Effects-shadow-mid');
        },
    
        fixElement: function(classToFix) {
            $('.'+classToFix).each(function() { 
                if ($(this).is('img, textarea, input')) {
                    $(this).removeClass(classToFix);
                    var floated = $(this).css('float');
                    floated = floated == '' || floated == 'none' ? '' : 'float:'+floated;
                    $(this).wrapAll('<span class="'+classToFix+'" style="'+floated+'"/>');
                }
            });
        }
    }
})(jQuery);

jQuery(document).ready(function($){
    css3Effect.fixAll();
});