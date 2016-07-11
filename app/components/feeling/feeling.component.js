import controller from './feeling.controller';

const feelingComponent = {
    controller: controller,
    template: `
        <h1>Feeling</h1>
        <div class="feelingContainer">
            <ul>
                <li>
                    <img src="images/sad.svg" alt="sad feeling"/>
                </li>
                <li>
                    <img src="images/ok.svg" alt="sad feeling"/>
                </li>
                <li>
                    <img src="images/happy.svg" alt="sad feeling"/>
                </li>
            </ul>
        </div>
    `
}

export default feelingComponent;