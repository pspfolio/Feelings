import controller from './auth-numbers.controller';

const AuthNumberComponent = {
    bindings: {
        numbers: '<'
    },
    controller: controller,
    template: `
        <div class="numbers">
            <div class="number" ng-bind="$ctrl.numbers[0] ? '*' : '-'"></div>
            <div class="number" ng-bind="$ctrl.numbers[1] ? '*' : '-'"></div>
            <div class="number" ng-bind="$ctrl.numbers[2] ? '*' : '-'"></div>
            <div class="number" ng-bind="$ctrl.numbers[3] ? '*' : '-'"></div>
        </div>
    `
}

export default AuthNumberComponent;