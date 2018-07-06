import Ember from 'ember';
import DS from 'ember-data';

const {
  RSVP: {
    Promise
  }
} = Ember;

export default function getOrCreateUser(uid, username, avatar, store) {

  return DS.PromiseObject.create({
    promise: new Promise((resolve) => {
      store.query('user', {
        orderBy: 'uid',
        equalTo: uid
      }).then((records) => {
        if (records.get('length') === 0) {
          resolve(store.createRecord('user', {
            uid: uid,
            username: username,
            avatar: avatar
          }));
        } else {
          resolve(records.get('firstObject'));
        }
      });
    })
  });
}
