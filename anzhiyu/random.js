var posts=["2024/07/06/这是另一篇新的博文/","2024/07/04/这是一篇新博文/","2024/07/04/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };