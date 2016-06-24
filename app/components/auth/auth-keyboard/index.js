import angular from 'angular';
import AuthKeyboardComponent from './auth-keyboard.component';

const authKeyboard = angular
    .module('authKeyboard', [])
    .component('authKeyboard', AuthKeyboardComponent)
    .value('EventEmitter', num => ({ $event: num}))
    .name;

export default authKeyboard;