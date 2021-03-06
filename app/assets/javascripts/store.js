// http://emberjs.com/guides/models/using-the-store/

EmberStart.Store = DS.Store.extend({
  // Override the default adapter with the `DS.ActiveModelAdapter` which
  // is built to work nicely with the ActiveModel::Serializers gem.
  revision: 11,
  adapter: DS.RESTAdapter.create()
});
