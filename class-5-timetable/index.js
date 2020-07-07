'use strict';

let timetable = [
    {
        topic: 'English',
        teacher: 'Archana',
        time: 'Jul 7, 2020 12:20 PM',
        meeting: {
            link: 'https://us04web.zoom.us/j/3857516751?pwd=RytxeUU5UGRBNFRuWUNGQTVGTk5Udz09',
            id: '385 751 6751',
            password: '1981'
        }
    },
    {
        topic: 'Second language telugu',
        teacher: 'Srividya',
        time: 'Jul 7, 2020 10:40 AM',
        meeting: {
            link: 'https://us04web.zoom.us/j/76622273263?pwd=SzBYZzMza1dVZ29DRFJaUE13UEFpUT09',
            id: '766 2227 3263',
            password: '1234'
        }
    },
    {
        topic: 'Mathematics',
        teacher: 'Rajni Kumari',
        time: 'Jul 7, 2020 02:00 PM',
        meeting: {
            link: 'https://us04web.zoom.us/j/76542556203?pwd=cW9kZUhHUmU3WCtXVXh6WWxpM0tDdz09',
            id: '765 4255 6203',
            password: '3nwYxM'
        }
    },
    {
        topic: 'Science',
        teacher: 'Zakiya',
        time: 'Jul 7, 2020 12:20 PM',
        meeting: {
            link: 'https://us04web.zoom.us/j/74902064886?pwd=d3poZUwzeFZjRUx6dHY0VEhsb3BDZz09',
            id: '749 0206 4886',
            password: '123'
        }
    },
    {
        topic: 'Social',
        teacher: 'Ashwini',
        time: 'Jul 6, 2020 11:50 AM',
        meeting: {
            link: 'https://us04web.zoom.us/j/74714858107?pwd=QWhHeThGaGx2SU5jTURUeUNSTGFmUT09',
            id: '747 1485 8107',
            password: '7dtcvT'
        }
    }
];

class RootElement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {liked: false};
        this.classes = timetable;
    }

    render() {
        if (this.state.liked) {
            return 'You liked this.';
        }

        return <>
            {/*<button onClick={() => this.setState({liked: true})}>Like</button>*/}
            {/*<h1>hello</h1>*/}
            <h1 style={{'text-align': 'center'}}>Sri Chaitanya School - Class V Timetable</h1>
            <table style={{'margin-left': 'auto', 'margin-right': 'auto'}}>
                <thead>
                <th>S.No</th>
                <th>Time</th>
                <th>Topic</th>
                <th>Teacher</th>
                <th>Zoom Link</th>
                <th>Meeting ID</th>
                <th>Meeting Password</th>
                </thead>
                <tbody>
                {this.classes.map((class1, index) => {
                    let linkText = class1.meeting.link;
                    linkText = linkText.substring(linkText.indexOf('pwd='));
                    linkText = '...' + linkText.substr(-4);
                    return <tr key={index}>
                        <td>{index+1}</td>
                        <td>{class1.time}</td>
                        <td>{class1.topic}</td>
                        <td>{class1.teacher}</td>
                        <td>
                            <a href={class1.meeting.link}>Open ({linkText})</a>
                        </td>
                        <td>{class1.meeting.id}</td>
                        <td>{class1.meeting.password}</td>
                    </tr>
                })}
                </tbody>
            </table>
        </>;
    }
}

const mytag = document.querySelector('#root');
ReactDOM.render(React.createElement(RootElement), mytag);