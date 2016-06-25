
class AuthNumberController {
    $onChanges(changes) {
        if(changes.numbers) {
            this.numbers = Object.assign({}, this.numbers);
            console.log(this.numbers);
        }
    }
}

export default AuthNumberController;