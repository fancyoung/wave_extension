var W = {}

W.options = {
  url: {
    root: 'http://localhost:4567'
    ,news: '/news'
  }
}

W.fetch = function(){
  var url = ''+W.options.url.root+W.options.url.news
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.onreadystatechange = function() {
    if(xhr.readyState == 4){
      console.log('fetch')
      var data = JSON.parse(xhr.responseText);
      localStorage.news = JSON.stringify(data.posts)
    }
  }
  xhr.send();
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