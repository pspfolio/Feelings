class AuthController {

    constructor(AuthService) {
      this.authService = AuthService;
      console.log(this.authService);
    }

    $onInit() {
        this.nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
        this.userNums = [];
    }

    numClicked({num}) {
        // Creating new array, to make $watch dirty.
        // This ways number component $onChanges will work
        if(!num) return;
        this.userNums = this.userNums.concat([num]);
        if(this.userNums.length === 4) this.authUser();
    }

    authUser() {
        console.log('authuser');
        var result = this.authService.verifyUserId(this.userNums.join(''));
        console.log(result);
        
        if(!result) {
            this.userNotFound = "User not found. Please try again";
            this.userNums = [];
        }
        // service call with userNums
        // if user found. Redirect to feeling component
        // challenge... how to transfer userId to other component
    }

}

AuthController.$inject = ['AuthService'];
export default AuthController;