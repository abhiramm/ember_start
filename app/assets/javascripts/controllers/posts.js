EmberStart.PostController= Ember.ObjectController.extend({
  actions: {
    save: function () {
      this.get('store').commit();
  
    },
    destroy: function () {
      this.get('model').deleteRecord();
      this.get('store').commit();
    }
  }
});