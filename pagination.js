;(function($){
  var defaults = {
    navigations: '.button-bar',
    per_page:25,
    searchInput:'#search'
  };

  $.fn.pagination = function(params){
    return this.each(function() {
      var $this = $(this).children(), //элемент списка
          settings = $.extend({}, defaults, params),
          inputSearch = $(settings.searchInput),
          bar = $(settings.navigations), //навигация
          per = settings.per_page; //количество записей на странице



      function doList(page=1,list=$this, per_page=per) {
        var pc = Math.ceil(list.length / per_page); //количество страниц
        // Pagination
        bar.html('');
        for (var i = 1; i <= pc; i++) {
            bar.append($('<li><a href="#" data-page="'+i+'" onclick="return false;">'+i+'</a></li>'));
        }
        bar.find('a').on('click', function (e) {
            doList($(this).data('page'),list);
        });
        bar.find('a[data-page='+page+']').parent().addClass('current');

        list.hide();
        for (i=0; i<list.length; i++)
        {
          if (i>=(per_page*(page-1))&&i<per_page*page)
          {
            $(list[i]).show().val(i+1);
          }
        }
      };
      doList();


      inputSearch.on('keyup', function (e) {
        var re = new RegExp($(this).val(), "gi");
        $this.hide();
        doList(1,$($.grep($this, function(el){return $(el).html().match(re);})));
      });


    })
  }
})(jQuery);
