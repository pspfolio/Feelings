import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AuthComponent from './auth.component';
import AuthKeyboardComponent from './auth-keyboard'

const auth = angular
    .module('auth', [
        uiRouter,
        AuthKeyboardComponent
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

