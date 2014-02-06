// For more information see: http://emberjs.com/guides/routing/

EmberStart.Router.map(function() {
   this.resource('posts');
   this.resource('about');
   this.resource('post');
   this.route('post', { path: '/post/:post_id'} );
});
