
class AuthNumberController {
    $onChanges(changes) {
        if(changes.numbers) {
            this.numbers = Object.assign({}, this.numbers);
        }
    }
}

export default AuthNumberController;