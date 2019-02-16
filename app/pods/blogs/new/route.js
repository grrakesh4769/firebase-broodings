import Route from '@ember/routing/route';
import Ember from 'ember';

export default Route.extend({
  model() {
    return Ember.RSVP.hash({
      NEW_POST: this.get('store').createRecord('post') //No I18N
    })
  },
  clearTempData: Ember.on('deactivate', function() {
    this.controller.get('model.NEW_POST').rollbackAttributes();
  }),
  actions: {
    createPost: function () {
      let self = this;
      if (this.controller.get('model.NEW_POST.hasDirtyAttributes')) {
        this.controller.set('model.NEW_POST.post_created_at', moment().valueOf());
        this.controller.get('model.NEW_POST').save().then(function() {
          self.transitionTo('blogs.list');
        })
      }
    }
  }
});
