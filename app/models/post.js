import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  content: DS.attr(),
  post_created_at: DS.attr(),
  post_last_modified_at: DS.attr({
    defaultValue: -1
  })
});
