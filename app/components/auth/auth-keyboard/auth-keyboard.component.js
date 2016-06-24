import controller from './auth-keyboard.controller';

const AuthKeyboardComponent = {
    bindings: {
        keys: '<',
        onNumClicked: '&'
    },
    controller: controller,
    template: `
        <div class="keyboard">
            <div class="number" ng-repeat="key in $ctrl.keys">
                <span ng-click="$ctrl.numClicked(key);" class="num" ng-bind="key"></span>
            </div>
        </div>
    `
};

export default AuthKeyboardComponent;