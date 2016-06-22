import angular from 'angular';
import Auth from './auth';

const components = angular
    .module('app.components', [
        Auth
    ]).name;

export default components;