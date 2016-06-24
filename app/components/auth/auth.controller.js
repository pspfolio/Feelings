class AuthController {

    constructor() {
      // Init authService here  
    }

    $onInit() {
        this.nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
        this.userNums = [];
    }

    numClicked({num}) {
        console.log("statefull num", num);
        this.userNums.push(num);
        if(this.userNums.length === 4) this.authUser();
    }

    authUser() {
        console.log('authuser');
        console.log(this.userNums);
        // service call with userNums
        // if user found. Redirect to feeling component
        // challenge... how to transfer userId to other component
    }

}

export default AuthController;