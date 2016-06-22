import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AppComponent from './app.component';
import Components from './components/components';
import Common from './common/common';
/* import Components */

const root = angular
		.module('app', [
			uiRouter,
			Components,
			Common
		]).component('app', AppComponent);

export default root;