import Route from '@ember/routing/route';
import Ember from 'ember';
import firebase from 'firebase/app';

const {
  get
} = Ember;

export default Route.extend({
  beforeModel() {
    return get(this, 'session').fetch().catch(function () {
    });
  },
  model() {

  },
  actions: {
    async login() {
      const provider = new firebase.auth.GoogleAuthProvider();
      const auth = await get(this.controller, 'firebaseApp').auth();
      return auth.signInWithPopup(provider);
    },
    logout() {
      get(this, 'session').close();
    }
  }
});
