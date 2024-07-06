var posts=["2024/07/04/hello-world/","2024/07/04/这是一篇新博文/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };