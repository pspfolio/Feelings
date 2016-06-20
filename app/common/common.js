import angular from 'angular';
import Navigation from './nav';
import Footer from './footer';
//import Footer from '/footer';

const common = angular
    .module('app.common', [
        Navigation,
        Footer
    ]).name;

export default common;