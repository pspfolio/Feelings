
class AuthKeyboardController {

    numClicked(num) {
        this.onNumClicked({
            $event: {
                num: num
            }
        });
    }
}

AuthKeyboardController.$inject = ['EventEmitter'];

export default AuthKeyboardController;