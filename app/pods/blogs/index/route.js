import Route from '@ember/routing/route';

export default Route.extend({
  afterModel() {
    this.transitionTo('blogs.list');
  }
});
