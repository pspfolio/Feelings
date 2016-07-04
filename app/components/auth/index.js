import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AuthComponent from './auth.component';
import AuthKeyboardComponent from './auth-keyboard'
import AuthNumbers from './auth-numbers';
import AuthService from './auth.service';

const auth = angular
    .module('auth', [
        uiRouter,
        AuthKeyboardComponent,
        AuthNumbers
    ])
    .component('auth', AuthComponent)
    .service('AuthService', AuthService)
    .config(($stateProvider, $urlRouterProvider) => {
        $stateProvider
        .state('auth', {
            url: '/auth',
            component: 'auth'
        });
        $urlRouterProvider.otherwise('/');
    })
    .name

export default auth;

