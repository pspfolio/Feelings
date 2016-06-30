import angular from 'angular';
import AuthKeyboardComponent from './auth-keyboard.component';
import authKey from './auth-key';

const authKeyboard = angular
    .module('authKeyboard', [
        authKey
    ])
    .component('authKeyboard', AuthKeyboardComponent)
    .name;

export default authKeyboard;