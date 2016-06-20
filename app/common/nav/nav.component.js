import angular from 'angular';

const NavigationComponent = {
    template: `
        <nav>
            <h1 ng-transclude></h1>
        <nav>
    `,
    transclude: true
};

export default NavigationComponent;