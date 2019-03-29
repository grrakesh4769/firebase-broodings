import Ember from 'ember';
import RealtimeDatabaseAdapter from 'emberfire/adapters/realtime-database';

const {
  inject
} = Ember;

export default RealtimeDatabaseAdapter.extend({
  firebase: inject.service(),
});
