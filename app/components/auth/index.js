import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AuthComponent from './auth.component';

const auth = angular
    .module('auth', [
        uiRouter
    ])
    .component('auth', AuthComponent)
    .config(($stateProvider, $urlRouterProvider) => {
        $stateProvider
        .state('auth', {
            url: '/asd',
            component: 'auth'
        });
        $urlRouterProvider.otherwise('/');
    })
    .name

    export default auth;

