import angular from 'angular';
import Navigation from './nav';
//import Footer from '/footer';

const common = angular
    .module('app.common', [
        Navigation
    ]).name;

export default common;