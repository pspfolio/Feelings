class FeelingController {
    constructor() {
        // get user info from service
    }

    $onInit() {
        this.feelingRatings = [
            {image: ':)', rating: 1},
            {image: ':I', rating: 2},
            {image: ':(', rating: 3}
        ]
    }

    feelingClicked(feeling) {
        console.log(feeling);
        // save feeing to db by user
    }
}

export default FeelingController;