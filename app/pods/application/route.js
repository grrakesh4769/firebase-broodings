import Route from '@ember/routing/route';
import Ember from 'ember';
const {
  get
} = Ember;

export default Route.extend({
  beforeModel() {
    return get(this, 'session').fetch().catch(function() {});
  },
  model(){

  },
  actions: {
    login() {
      get(this, 'session').open('firebase', {
        provider: 'google'
      }).then(function(data) {

      });
    },
    logout() {
      get(this, 'session').close();
    }
  }
});
