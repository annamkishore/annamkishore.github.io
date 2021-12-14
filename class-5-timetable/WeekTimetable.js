'use strict';

const subjects = {
    HINDI: 'Hindi',
    TELUGU: 'Telugu',
    ENGLISH: 'English',
    HAND_WRITING: 'Hand Writing',

    MATHS: 'Maths',
    SCIENCE: 'Science',
    SOCIAL: 'Social'
};

const s = subjects;

let timetable = [
    [s.SCIENCE, s.SOCIAL, `${s.ENGLISH} ${s.HAND_WRITING}`],
    [s.TELUGU, s.MATHS],
    [s.SOCIAL, s.HINDI, `${s.TELUGU} ${s.HAND_WRITING}`],
    [s.ENGLISH, s.SCIENCE],
    [s.HINDI, s.MATHS, `${s.HINDI} ${s.HAND_WRITING}`],
    [s.ENGLISH, s.TELUGU]
];

export const a = 11;
// export default class WeekTimetable extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {liked: false};
//         this.classes = timetable;
//     }
//
//     render() {
//         if (this.state.liked) {
//             return 'You liked this.';
//         }
//
//         return <h1>hello</h1>;
//         // return1 =  <>
//         //     {/*<button onClick={() => this.setState({liked: true})}>Like</button>*/}
//         //     {/*<h1>hello</h1>*/}
//         //     <h1 style={{'text-align': 'center'}}>Sri Chaitanya School - Class V Timetable</h1>
//         //     <table style={{'margin-left': 'auto', 'margin-right': 'auto'}}>
//         //         <thead>
//         //         <th>S.No</th>
//         //         <th>Time</th>
//         //         <th>Topic</th>
//         //         <th>Teacher</th>
//         //         <th>Zoom Link</th>
//         //         <th>Meeting ID</th>
//         //         <th>Meeting Password</th>
//         //         </thead>
//         //         <tbody>
//         //         {timetable.map(
//         //             (day, dayIndex) => <tr key={dayIndex}>
//         //                 {
//         //                     day.map((period, periodIndex) => <td>{period}</td>)
//         //                 }
//         //             </tr>
//         //         )}
//         //         </tbody>
//         //     </table>
//         // </>;
//     }
// }
