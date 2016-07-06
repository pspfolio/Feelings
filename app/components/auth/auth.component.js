import controller from './auth.controller';

const AuthComponent = {
    controller: controller,
    template: `
        <div class="auth">
            <h2 class="passcode">Enter passcode</h2>
            <p class="error-message" ng-bind="$ctrl.userNotFound"></p>
            <auth-numbers numbers="$ctrl.userNums"></auth-numbers>
            <auth-keyboard 
                keys="$ctrl.nums"
                on-num-clicked="$ctrl.numClicked($event);">
            </auth-keyboard>
        </div>
    `
};

export default AuthComponent;