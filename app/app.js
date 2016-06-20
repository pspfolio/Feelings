import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AppComponent from './app.component';
import Common from './common/common';
/* import Components */

const root = angular
		.module('app', [
			Common,
			uiRouter
		]).component('app', AppComponent);

export default root;