import Controller from '@ember/controller';
import Ember from 'ember';
import getOrCreateUser from '../../utils/get-or-create-user';
const {
  get
} = Ember;

export default Controller.extend({
  'CURRENT_USER': Ember.computed('session.isAuthenticated', function() {
    if (this.get('session.isAuthenticated')) {
      return getOrCreateUser(get(this, 'session.uid'), get(this, 'session.currentUser.username'),
        get(this, 'session.currentUser.profileImageURL'),
        this.store);
    } else {
      return;
    }
  })
});
