
class AuthService  {
    constructor($http) {
        this.$http = $http;
    }

    verifyUserId(userId) {
        var users = this.getUserIds();
        var result = users.indexOf(userId) > -1;

        return result;
    }

    getUserIds() {
        return [1234, 4321];
    }
} 

AuthService.$inject = ['$http'];

export default AuthService;