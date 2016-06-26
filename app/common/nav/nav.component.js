import angular from 'angular';

const NavigationComponent = {
    template: `
        <nav class="clearfix">
            <div class="company">
                <img class="company-logo" src="./images/Microsoft_logo.png" alt="logo" />
                <h1 class="company-name" ng-transclude></h1>
            </div>
        <nav>
    `,
    transclude: true
};

export default NavigationComponent;