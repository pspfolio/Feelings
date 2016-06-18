import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AppComponent from './app.component';
/* import Components and Common */

const root = angular
		.module('app', [
			uiRouter
		]).component('app', AppComponent);

export default root;