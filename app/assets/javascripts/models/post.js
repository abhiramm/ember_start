// for more details see: http://emberjs.com/guides/models/defining-models/

EmberStart.Post = DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string')
});
