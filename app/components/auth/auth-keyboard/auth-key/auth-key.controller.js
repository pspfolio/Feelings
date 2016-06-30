class AuthKeyController {

    numClicked(nums) {
        this.onNumClick({
            $event: {
                num: nums
            }
        });
    }
}

export default AuthKeyController;