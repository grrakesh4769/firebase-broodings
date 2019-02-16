import Route from '@ember/routing/route';
import Ember from 'ember';

export default Route.extend({
  model(){
    return Ember.RSVP.hash({
      NEW_POST: this.get('store').createRecord('post') //No I18N
    })
  }
});
