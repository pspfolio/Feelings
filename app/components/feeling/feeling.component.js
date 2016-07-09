import controller from './feeling.controller';

const feelingComponent = {
    controller: controller,
    template: `
        <h1>Feeling</h1>
        <ul>
            <li ng-repeat="feeling in $ctrl.feelingRatings">
                <span ng-bind="feeling.image" ng-click="$ctrl.feelingClicked(feeling.rating)"></span>
            </li>
        </ul>
    `
}

export default feelingComponent;