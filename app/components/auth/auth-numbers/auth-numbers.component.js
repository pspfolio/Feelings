import controller from './auth-numbers.controller';

const AuthNumberComponent = {
    bindings: {
        numbers: '<'
    },
    controller: controller,
    template: `
        <div class="numbers">
            <div class="number1" ng-bind="$ctrl.numbers[0] ? '*' : ''"></div>
            <div class="number2" ng-bind="$ctrl.numbers[1] ? '*' : ''"></div>
            <div class="number3" ng-bind="$ctrl.numbers[2] ? '*' : ''"></div>
            <div class="number4" ng-bind="$ctrl.numbers[3] ? '*' : ''"></div>
        </div>
    `
}

export default AuthNumberComponent;