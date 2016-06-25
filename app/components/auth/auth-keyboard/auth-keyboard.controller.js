
class AuthKeyboardController {

    numClicked(num) {
        this.onNumClicked({
            $event: {
                num: num
            }
        });
    }
}

export default AuthKeyboardController;