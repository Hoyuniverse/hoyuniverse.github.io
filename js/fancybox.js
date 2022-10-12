$(document).ready(function() {
  $('img').each(function() {
    if ($(this).parent().hasClass('fancybox')) return;
    if ($(this).hasClass('nofancybox')) return;
    var alt = this.alt;
    if (alt) $(this).after('<span class="caption">' + alt + '</span>');
    
    if(this.src.split('/').length===4){ // is local photo show with base url
      var imgUrl =  this.src.split('/') 
      var folderUrl = this.getAttribute('folder')
      var newImgUrl = imgUrl[0]+'//'+imgUrl[2]+ '/'+ folderUrl 
      this.src = newImgUrl
      $(this).wrap('<a href="' + newImgUrl + '" title="' + alt + '" class="fancybox"></a>');
    }else{
      $(this).wrap('<a href="' + ($(this).attr('data-src') == null ? this.src : $(this).attr('data-src')) + '" title="' + alt + '" class="fancybox"></a>');
    }
  });
  $(this).find('.fancybox').each(function(){
    $(this).attr('rel', 'article');
  });
});
$(document).ready(function() {
  $("a[href$='.jpg'],a[href$='.png'],a[href$='.gif'],a[href$='.webp']").attr('rel', 'gallery').fancybox({
    helpers : {
    title: { type: 'inside'}
    }
  });
});
