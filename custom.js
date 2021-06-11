(function($){
    "use-strict";

    jQuery(document).ready(function(){
        new ModalVideo('button.video_popup_play',{
          channel: 'youtube',
          youtube: {
            autoplay: 1,
            controls: 0,
            loop:1,
            showinfo:0,
          }
        });
    });

}(jQuery));