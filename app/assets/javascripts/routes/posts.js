EmberStart.PostsRoute = Ember.Route.extend({
  model: function () {
    return this.get('store').find('post');
  }
});

EmberStart.PostsNewRoute = Ember.Route.extend({
  model: function () {
    return EmberStart.Post.createRecord({title: '', description: ''});
  },
  actions: {
    save: function () {
      this.get('store').commit();
   
    }

  }
});