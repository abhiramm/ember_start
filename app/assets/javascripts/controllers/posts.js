EmberStart.PostController= Ember.ObjectController.extend({
  actions: {
    save: function () {
      this.get('store').commit();
  
    }
  }
});