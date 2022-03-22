
$('#details-container').on('scroll',function () {
    var sections = $('section .detail-carousel')
     , nav = $('#header-scroll')
     , nav_height = nav.outerHeight()
     , cur_pos = $(this).scrollTop();

   sections.each(function(index,section) {
     var top = $(section).offset().top - nav_height,
         bottom = top + $(section).outerHeight();

     if (cur_pos >= top && cur_pos <= bottom) {
       nav.find('a').removeClass('active');
       sections.removeClass('active');

       $(section).addClass('active');
       var el = nav.find('a[href="#'+$(section).attr('id')+'"]');
       $(el).addClass('active');
       $(el).animate({scrollTop: $(el).offset().top }, 1000);
       console.log($(section).attr('id') + ": active");
     }
   });
 });

