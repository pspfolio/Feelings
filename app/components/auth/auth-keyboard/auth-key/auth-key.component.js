 import controller from './auth-key.controller';

const authKey = {
    bindings: {
        num: '<',
        onNumClick: '&'
    },
    controller: controller,
    template: `
        <span ng-click="$ctrl.numClicked($ctrl.num);" class="num" ng-bind="$ctrl.num"></span>
    `
};

export default authKey;