import angular from 'angular';
import uiRouter from 'angular-ui-router';
import feeling from './feeling.component';

const feelingComponent = angular
    .module('feeling', [])
    .component('feeling', feeling)
    .config(($stateProvider, $urlRouterProvider) => {
       $stateProvider.state('feeling', {
           url: '/feeling',
           component: 'feeling'
       });

       $urlRouterProvider.otherwise('/auth');
    })
    .name;

export default feelingComponent;