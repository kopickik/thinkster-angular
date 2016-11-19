import angular from 'angular'

// Create the home module where our functionality can attach to
let authModule = angular.module('app.auth', []);

// Include our UI-Router config
import AuthConfig from './auth.config';
import AuthCtrl from './auth.controller';
authModule.config(AuthConfig);
authModule.controller('AuthCtrl', AuthCtrl);

export default authModule;
