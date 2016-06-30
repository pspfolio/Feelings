import angular from 'angular';
import authKeyComponent from './auth-key.component';

const authKey = angular
    .module('authKey', [])
    .component('authKey', authKeyComponent)
    .name;

export default authKey;