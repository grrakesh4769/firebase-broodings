import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | blogs/new', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:blogs/new');
    assert.ok(route);
  });
});
