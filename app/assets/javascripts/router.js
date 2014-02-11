// For more information see: http://emberjs.com/guides/routing/

EmberStart.Router.map(function() {
   this.resource('post');
   this.resource('about');
   this.resource('posts', function(){
        this.route('new');
    });
   this.route('post', { path: '/post/:post_id'} );
});


