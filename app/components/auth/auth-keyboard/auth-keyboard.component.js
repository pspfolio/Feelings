import controller from './auth-keyboard.controller';

const AuthKeyboardComponent = {
    bindings: {
        keys: '<',
        onNumClicked: '&'
    },
    controller: controller,
    template: `
        <div class="keyboard">
            <div class="number" ng-repeat="key in $ctrl.keys" track by key>
                <auth-key num="key" on-num-click="$ctrl.numClicked($event);"></auth-key>
            </div>
        </div>
    `
};

export default AuthKeyboardComponent;