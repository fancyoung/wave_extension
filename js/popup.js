$('#title').html(chrome.i18n.getMessage('extName'))
$('#read_all').html(chrome.i18n.getMessage('readAll'))

chrome.extension.getBackgroundPage().localStorage.news != null && W.render(W.get_news())

$('.list').delegate('.link', 'click', function(){
  W.mark_as_read($(this).attr('data-id'))
})
