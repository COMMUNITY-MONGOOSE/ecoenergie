$(function() {
    $( "#slider-range-min" ).slider({
      range: "min",
      value: 1,
      min: 1,
      max: 100,
      slide: function( event, ui ) {
        $( ".amount" ).html( ui.value );
      }
    });
    $( ".amount" ).html( $( "#slider-range-min" ).slider( "value" ) );
  });
(function($) {

  $.fn.menumaker = function(options) {
      
      var cssmenu = $(this), settings = $.extend({
        title: "Меню",
        format: "dropdown",
        breakpoint: 768,
        sticky: false
      }, options);

      return this.each(function() {
        cssmenu.find('li ul').parent().addClass('has-sub');
        if (settings.format != 'select') {
          cssmenu.prepend('<div id="menu-button">' + settings.title + '</div>');
          $(this).find("#menu-button").on('click', function(){
            $(this).toggleClass('menu-opened');

            var mainmenu = $(this).next('ul');
            if (mainmenu.hasClass('open')) { 
              mainmenu.hide().removeClass('open');
            }
            else {
              mainmenu.show().addClass('open');
              if (settings.format === "dropdown") {
                mainmenu.find('ul').show();

              }
            }
          });

          multiTg = function() {
            cssmenu.find(".has-sub").prepend('<span class="submenu-button"></span>');
            cssmenu.find('.submenu-button').on('click', function() {
              $(this).toggleClass('submenu-opened');
              if ($(this).siblings('ul').hasClass('open')) {
                $(this).siblings('ul').removeClass('open').hide();

              }
              else {
                $(this).siblings('ul').addClass('open').show();
              }
            });
          };

          if (settings.format === 'multitoggle') multiTg();
          else cssmenu.addClass('dropdown');
        }

        else if (settings.format === 'select')
        {
          cssmenu.append('<select style="width: 100%"/>').addClass('select-list');
          var selectList = cssmenu.find('select');
          selectList.append('<option>' + settings.title + '</option>', {
                                                         "selected": "selected",
                                                         "value": ""});
          cssmenu.find('a').each(function() {
            var element = $(this), indentation = "";
            for (i = 1; i < element.parents('ul').length; i++)
            {
              indentation += '-';
            }
            selectList.append('<option value="' + $(this).attr('href') + '">' + indentation + element.text() + '</option');
          });
          selectList.on('change', function() {
            window.location = $(this).find("option:selected").val();

          });
        }

        if (settings.sticky === true) cssmenu.css('position', 'fixed');

        resizeFix = function() {
          if ($(window).width() > settings.breakpoint) {
            cssmenu.find('ul').show();
            cssmenu.removeClass('small-screen');

            if (settings.format === 'select') {
              cssmenu.find('select').hide();
            }
            else {
              cssmenu.find("#menu-button").removeClass("menu-opened");
            }
          }

          if ($(window).width() <= settings.breakpoint && !cssmenu.hasClass("small-screen")) {
            cssmenu.find('ul').hide().removeClass('open');
            cssmenu.addClass('small-screen');
            if (settings.format === 'select') {
              cssmenu.find('select').show();

            }
          }
        };
        resizeFix();
        return $(window).on('resize', resizeFix);

      });
  };
})(jQuery);

(function($){
$(document).ready(function(){

$(document).ready(function() {
  $("#cssmenu").menumaker({
    title: " ",
    format: "dropdown"
  });

  $("#cssmenu a").each(function() {
    var linkTitle = $(this).text();
    
    $(this).attr('data-title', linkTitle);
  });
});

});
})(jQuery);
(function($) {
  $(function() {
      var popwindow = $('.popwindow'); // Класс окна
      var popbutton = $('.popbutton'); // Класс кнопки
      $("body").prepend("<div class='mask'></div>");
      function preparewindow(windowobject) {
        var winwidth = windowobject.data("width");
        var winheight = windowobject.data("height");
        var winmargin = winwidth / 2;
        var wintitle = windowobject.data("title");

        windowobject.wrap("<div class='box_window'></div>");
        windowobject.addClass("box_window_in");
        windowobject.parent(".box_window").prepend("<div class='bw_close'>закрыть</div>");
        windowobject.css("cursor","pointer");

        windowobject.parent(".box_window").prepend("<div class='box_title'>"+wintitle+"</div>");
        windowobject.parent(".box_window").css({'width':winwidth,'height':winheight,'margin-left':'-'+winmargin})
        windowobject.css({'height':winheight})
      }  
      if (popwindow.length) {
        preparewindow(popwindow);
        popbutton.click(function(){
            var idwind = $(this).data("window");
            $("#" + idwind).parent(".box_window").fadeIn().addClass("windactiv");
            $(".mask").fadeIn();
            $(".to_blur").addClass("blur");
        });
      };
      $(".mask, .bw_close").click(function(){
          $(".windactiv").fadeOut();
          $(".windactiv").removeClass("windactiv");
          $(".mask").fadeOut();
           $(".to_blur").removeClass("blur");
      });
  });
})(jQuery)
$(function($){
  $(function(){
    $(".selectCalc").click(function(){
      $(".selectCalc div").removeClass("active");
      $(".selectCalc").css("background","#c8e199");
      $(this).css("background","#fff");
      $(this).children("div").addClass("active");
    });
    $(".slideBlock").click(function(){
      $(".slideBlock").children("img").css("display","none");
      $(".slideBlock div").removeClass("activeSystem");
      $(".slideBlock").css("background","#c8e199");
      $(this).css("background","#fff");
      $(this).children("div").addClass("activeSystem");
      $(this).children("img").css("display","block");
    })
    $('.carousel').carousel({
     interval:0
    })

  })
})