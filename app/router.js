import EmberRouter from '@ember/routing/router';
import config from './config/environment';
import googlePageview from './mixins/google-pageview';

const Router = EmberRouter.extend(googlePageview, {
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('blogs', function() {
    this.route('list');
    this.route('view');
  });
});

export default Router;
