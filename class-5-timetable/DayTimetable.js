'use strict';

let timetable = [
    {
        topic: 'Science',
        teacher: 'Zakiya',
        time: 'Jul 8, 2020 09:00 AM',
        meeting: {
            link: 'https://us04web.zoom.us/j/73004946554?pwd=T0IzdVJ3SGVMYzA3dW5YdUdSbmY5dz09',
            id: '730 0494 6554',
            password: '1234'
        }
    },
    {
        topic: 'Hindi (FL)',
        teacher: 'Arpana',
        time: 'Jul 8, 2020 10:40 AM',
        meeting: {
            link: 'https://us04web.zoom.us/j/74506637136?pwd=eENFK2tBRUhOOEkvY01wQjQrbEVMdz09',
            id: '745 0663 7136',
            password: '3tD1yq'
        }
    },
    {
        topic: 'Social',
        teacher: 'Ashwini',
        time: 'Jul 8, 2020 12:20 PM',
        meeting: {
            link: 'https://us04web.zoom.us/j/71249126708?pwd=WGdVNmJKeDdWNUF2OVZOcnBML2ZYdz09',
            id: '712 4912 6708',
            password: '1994'
        }
    },
    {
        topic: 'Mathematics',
        teacher: 'Rajni Kumari',
        time: 'Jul 8, 2020 02:00 PM',
        meeting: {
            link: 'https://us04web.zoom.us/j/75695463522?pwd=VGloYXg3Rm05c284VGdLZ1VpVjZ4UT09',
            id: '756 9546 3522',
            password: '4Z4ggv'
        }
    },
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
        topic: 'Telugu (SL)',
        teacher: 'Srividya',
        time: 'Jul 7, 2020 10:40 AM',
        meeting: {
            link: 'https://us04web.zoom.us/j/76622273263?pwd=SzBYZzMza1dVZ29DRFJaUE13UEFpUT09',
            id: '766 2227 3263',
            password: '1234'
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