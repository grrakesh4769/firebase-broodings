import Controller from '@ember/controller';
import Ember from 'ember';
import getOrCreateUser from '../../utils/get-or-create-user';
const {
  get
} = Ember;
import ENV from 'firebase-broodings/config/environment';

export default Controller.extend({
  ADMIN_UID: ENV.APP.ADMIN_UID,
  CURRENT_USER: Ember.computed('session.isAuthenticated', function() {
    if (this.get('session.isAuthenticated')) {
      return getOrCreateUser(get(this, 'session.uid'), get(this, 'session.currentUser.username'),
        get(this, 'session.currentUser.profileImageURL'),
        this.store);
    } else {
      return;
    }
  }),
  IS_ADMIN_MODE: Ember.computed('session.currentUser.uid', function () {
    return get(this, 'session.currentUser.uid') == get(this, 'ADMIN_UID');
  })
});
