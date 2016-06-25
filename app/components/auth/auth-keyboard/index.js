import angular from 'angular';
import AuthKeyboardComponent from './auth-keyboard.component';

const authKeyboard = angular
    .module('authKeyboard', [])
    .component('authKeyboard', AuthKeyboardComponent)
    .name;

export default authKeyboard;