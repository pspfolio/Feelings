import controller from './auth.controller';

const AuthComponent = {
    controller: controller,
    template: `
        <div class="auth">
            <auth-numbers numbers="$ctrl.userNums"></auth-numbers>
            <auth-keyboard 
                keys="$ctrl.nums"
                on-num-clicked="$ctrl.numClicked($event);">
            </auth-keyboard>
        </div>
    `
};

export default AuthComponent;