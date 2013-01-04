localStorage.posts = JSON.stringify([
  {'id': 1, 'title': 'test1', 'content': 'aaaaaaaaaa', 'link': 'http://t1.com'},
  {'id': 2, 'title': 'test2', 'content': 'bbbbbbbbbb', 'link': 'http://t2.com'},
  {'id': 3, 'title': 'test3', 'content': 'cccccccccc', 'link': 'http://t3.com'},
  {'id': 4, 'title': 'test1', 'content': 'aaaaaaaaaa', 'link': 'http://t1.com'},
  {'id': 5, 'title': 'test2', 'content': 'bbbbbbbbbb', 'link': 'http://t2.com'},
  {'id': 6, 'title': 'test3', 'content': 'cccccccccc', 'link': 'http://t3.com'},
  {'id': 7, 'title': 'test1', 'content': 'aaaaaaaaaa', 'link': 'http://t1.com'},
  {'id': 8, 'title': 'test2', 'content': 'bbbbbbbbbb', 'link': 'http://t2.com'},
  {'id': 9, 'title': 'test3', 'content': 'cccccccccc', 'link': 'http://t3.com'}
])

$.each($.parseJSON(localStorage.posts), function(index, value){
  $('.list').append(
    '<section>'
    +'<div class="title"><a href="'+value.link+'" target="_blank">'+value.title+'</a></div>'
    +'<div class="content">'+value.content+'</div>'
    +'</section>'
  )
})
