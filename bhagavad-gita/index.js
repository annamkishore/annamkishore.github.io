'use strict';

class RootElement extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <>
            <h1>భగవద్గీత</h1>
            <a href={"https://raw.githubusercontent.com/annamkishore/annamkishore.github.io/79a994859fb6dce438b079c56bebb099b1f02581/bhagavad-gita/slokas.yaml"}>
                Slokas link (for now)
            </a>
            <h2> Chapter wise count </h2>
            <img src={"./bhagavad-gita/stats.png"}/> <br/>
        </>;
    }
}

const mytag = document.querySelector('#root');
ReactDOM.render(React.createElement(RootElement), mytag);