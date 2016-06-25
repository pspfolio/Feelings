import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AuthComponent from './auth.component';
import AuthKeyboardComponent from './auth-keyboard'
import AuthNumbers from './auth-numbers';

const auth = angular
    .module('auth', [
        uiRouter,
        AuthKeyboardComponent,
        AuthNumbers
    ])
    .component('auth', AuthComponent)
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

