$(function() {
 
   //instafeed
   //Set up instafeed
   var feed = new Instafeed({
       clientId: 'a26d284ad1224ceda0d9ce93447ce780',
       target: 'instafeed',
       get: 'tagged',
       tagName: 'lvdesignfr-alice-book',
       links: true,
       limit: 1,
       sortBy: 'most-recent',
       resolution: 'standard_resolution',
       template: '<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3"><div class="photo-box"><div class="image-wrap"><a href="{{link}}"><img src="{{image}}"></a><div>Ma derniere lecture…</div><div class="likes">{{likes}} Likes</div></div><div class="description">{{caption}}<div class="date">{{model.date}}</div></div></div></div>'
   });
   feed.run();
    
});

