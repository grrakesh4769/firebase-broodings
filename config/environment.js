/* eslint-env node */
'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'firebase-broodings',
    podModulePrefix: 'firebase-broodings/pods',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      ADMIN_UID: '2E8hvf2qJNcCEZBPritnj1KFCa92'
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    // firebase: 'https://broodings-b9048.firebaseio.com',
    firebase: {
      apiKey: 'AIzaSyCUKDQeOWPdSakuRgr_M6xWWr_llwexAPA',
      authDomain: 'www.broodings.ga',
      databaseURL: 'https://broodings-b9048.firebaseio.com',
      storageBucket: 'broodings-b9048.appspot.com',
    },
    torii: {
      sessionServiceName: 'session'
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.googleAnalytics = {
      webPropertyId: 'UA-110003664-1'
    };
    // here you can enable a production-specific feature
  }

  return ENV;
};
