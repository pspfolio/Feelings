import controller from './auth-numbers.controller';

const AuthNumberComponent = {
    bindings: {
        numbers: '<'
    },
    controller: controller,
    template: `
        <div class="numbers">
            <div class="passcodenumber" ng-bind="$ctrl.numbers[0] > -1 ? '*' : '-'"></div>
            <div class="passcodenumber" ng-bind="$ctrl.numbers[1] > -1 ? '*' : '-'"></div>
            <div class="passcodenumber" ng-bind="$ctrl.numbers[2] > -1 ? '*' : '-'"></div>
            <div class="passcodenumber" ng-bind="$ctrl.numbers[3] > -1 ? '*' : '-'"></div>
        </div>
    `
}

export default AuthNumberComponent;