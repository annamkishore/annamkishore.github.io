'use strict';
import {a} from './WeekTimetable';

class RootElement extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return 'a';
    }
}

const mytag = document.querySelector('#root');
ReactDOM.render(React.createElement(RootElement), mytag);