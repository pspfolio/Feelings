
class AuthKeyboardController {
    numClicked(nums) {
        this.onNumClicked({
            $event: {
                num: nums
            }
        });
    }
}

export default AuthKeyboardController;