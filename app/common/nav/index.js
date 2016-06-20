import angular from 'angular';
import NavigationComponent from './nav.component';

const navigation = angular
    .module('navigation', [])
    .component('navigation', NavigationComponent)
    .name;

export default navigation;