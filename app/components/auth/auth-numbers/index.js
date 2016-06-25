import angular from 'angular';
import AuthNumbersComponent from './auth-numbers.component.js';

const AuthNumbers = angular
    .module('authNumbers', [])
    .component('authNumbers', AuthNumbersComponent)
    .name;

export default AuthNumbers;