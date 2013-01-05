var W = {}

W.options = {
  url: {
    root: 'http://localhost:4567'
    ,news: '/news'
  }
}

W.fetch = function(){
  var url = chrome.extension.getURL(''+W.options.url.root+W.options.url.news)
  $.ajax({
    url: url
    success: function(data){
    console.log('a')
    zz = data
    console.log(data)
    localStorage.news = JSON.stringify(data.news)
  }
})
}

W.render = function(posts) {
  posts && posts.length>0 && $.each(posts, function(index, value){
    $('.list').append(
      '<section>'
      +'<div class="title"><a href="'+value.link+'" target="_blank">'+value.title+'</a></div>'
      +'<div class="content">'+value.content+'</div>'
      +'</section>'
    )
  })
}