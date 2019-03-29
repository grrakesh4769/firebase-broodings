import Ember from 'ember';
import FirebaseToriiAdapter from 'emberfire/torii-adapters/firebase';

export default FirebaseToriiAdapter.extend({
  firebaseApp: Ember.inject.service()
});
