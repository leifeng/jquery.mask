/**
 * Created by zcl on 14-3-18.
 */
;
(function ($) {
    $.mask = function (options) {
        return $.fn.mask(options);
    };
    $.fn.mask = function (options) {
        var defaults = {
                autoClose: true,
                closeTime: 5000,
                imgUrl: null,
                width: '500',
                height: '500',
                speed: 'fast',
                link: null
            },
            $my = $(this),
            options = $.extend(defaults, options),
            windowWidth = $(document).width(),
            windowHeight = $(document).height(),
            adTop = '100px',
            adLeft = (windowWidth / 2) - (options.width / 2) + 'px';


        if ($('#maskDiv').length === 0) {
            $('body').append('<div id="maskDiv"></div>').append('<div id="ad"></div>');
        }
        $('#maskDiv').css({'display':'block','position': 'absolute', 'top': '0px', 'left': '0px', 'width': windowWidth, 'height': windowHeight, 'z-index': '100', 'filter': 'alpha(opacity=30)', 'opacity': '0.3', 'background': '#000'});
        $('#ad').css({'display':'block','width': options.width + 'px', 'height': options.height + 'px', 'position': 'absolute', 'top': adTop, 'left': adLeft, 'z-index': '200'}).html('<img src="close.png" id="maskClose"><img src="' + options.imgUrl + '" width="' + options.width + '" height="' + options.height + '" border="0" id="maskImg">');
        $('#maskClose').css({'position': 'absolute', 'top': '10px', 'right': '20px','z-index':'300'});
        $('#maskDiv').ready(function () {
            if (options.autoClose) {
                  $('#maskDiv').delay(options.closeTime).fadeOut(options.speed);
                $('#ad').delay(options.closeTime).fadeOut(options.speed);
            }
        });

        $('#maskDiv').on('click', function () {
            return false;
        })
        $('#maskImg').on('click', function () {
            location.href = options.link;
        });
        $('#maskClose').on('click', function () {
            $('#maskDiv').stop().fadeOut(options.speed);
            $('#ad').stop().fadeOut(options.speed);
        })
    }
})(jQuery);