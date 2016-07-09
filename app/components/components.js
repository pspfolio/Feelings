import angular from 'angular';
import Auth from './auth';
import Feeling from './feeling';

const components = angular
    .module('app.components', [
        Auth,
        Feeling
    ]).name;

export default components;