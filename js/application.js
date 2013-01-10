var W = {}

W.options = {
  url: {
    root: 'http://localhost:4567'
    ,news: '/news'
  }
}

W.fetch = function(){
  var url = ''+W.options.url.root+W.options.url.news
  chrome.browserAction.setBadgeText({text: '-'})
  var xhr = new XMLHttpRequest()
  xhr.open('GET', url, true)
  xhr.onreadystatechange = function() {
    if(xhr.readyState == 4){
      var posts = JSON.parse(xhr.responseText)
      W.set_news(posts)
      W.auto_count()
    }
  }
  xhr.send();
}

W.render = function(posts) {
  posts && posts.length>0 && $.each(posts, function(index, value){
    $('.list').append(
      '<section>'
      +'<div class="title"><a href="'+value.link+'" target="_blank" class="link" data-id="'+value._id+'">'+value.title+'</a></div>'
      +'<div class="content">'+value.content+'</div>'
      +'</section>'
    )
  })
}

W.get_news = function(){
  return $.parseJSON(chrome.extension.getBackgroundPage().localStorage.news)
}

W.set_news = function(posts){
  chrome.extension.getBackgroundPage().localStorage.news = JSON.stringify(posts)
}

W.auto_count = function(){
  var posts, count=0
  posts = W.get_news()
  posts && $.each(posts, function(index, value){
    !value.read && count++
  })
  if(count > 0){
    chrome.browserAction.setBadgeText({
      text: (count > 99 ? '99+' : ''+count)
    })
  }else{
    chrome.browserAction.setBadgeText({text: ''})
  }
}

W.mark_as_read = function(id){
  var posts
  posts = W.get_news()
  posts && $.each(posts, function(index, value){
    value._id == id && (value.read = true)
  })
  W.set_news(posts)
  W.auto_count()
}
