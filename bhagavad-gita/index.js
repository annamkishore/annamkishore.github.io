'use strict';

class RootElement extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <>
            <h1>భగవద్గీత</h1>
            <h2> Chapter wise count </h2>
            <img src={"./bhagavad-gita/stats.png"} />
        </>;
    }
}

const mytag = document.querySelector('#root');
ReactDOM.render(React.createElement(RootElement), mytag);