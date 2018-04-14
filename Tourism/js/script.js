//锚链接缓慢滑动
$(function(){  
  $('a[href*=#],area[href*=#]').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
      if ($target.length) {
        var targetOffset = $target.offset().top;
        $('html,body').animate({
          scrollTop: targetOffset
        },
        1000);
        return false;
      }
    }
  });
})
//锚链接缓慢滑动
var AnchorClick = function ("#footer") {
    var href = $("#footer").attr("href");
    var pos = $(href).offset().top;
    $("html,body").animate({ scrollTop: pos }, 80000);
};