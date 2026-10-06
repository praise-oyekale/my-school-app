import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

import "../common/studentperformancechart.css"



const data = [
    { subject: "Math", score: 0 },
    { subject: "English", score: 30 },
    { subject: "Physics", score: 40 },
    { subject: "Chemistry", score: 30 },
    { subject: "Biology", score: 50 },
];

const attendance = 92;


const StudentPerformanceChart = () => {
    return(
        <div className="performance-chart">
            <h3>Academic Performance</h3>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3"/>

                    <XAxis dataKey="subject"/>
                    <YAxis domain={[0, 100]} />

                    <Tooltip />

                    <Line type="monotone" dataKey="score" stroke="#2563EB" strokeWidth={3} />
                </LineChart>
            </ResponsiveContainer>

        </div>
    )
}

export const AttendanceChart = () => {
    return(
        <div className="student-attendance-chart">
            <div className="attendance-headlines">
                <h3>Attendance</h3>
                <h5>Details</h5>
            </div>
            <div className="attendanceinner-container">
                <section className="circular-section">
                    <div className="attendance-circle" style={{background: `conic-gradient( #2563EB  ${attendance}%, #e5e7eb 0)`}} >
                        <div className="attendance-inner">
                           <h3>{attendance}%</h3> <h6 style={{ color: "#92758C", fontSize: '10px' }}>present</h6>
                        </div>
                    </div>
                    <div className="present-texts">
                        <div className="presenttext-wrapper">
                            <div style={{backgroundColor: '#2563EB',  borderRadius: '50%', border: '1px', width: "10px", height:"10px"}}></div>{" "}<span>Present</span> 
                        </div>

                        <div className="presenttext-wrapper">
                            <div style={{backgroundColor: '#e5e7eb',  borderRadius: '50%', border: '1px', width: "10px", height:"10px"}}></div>{" "}<span>Absent</span> 
                        </div>

                        


                    </div>
                </section>
                <div className="attendance-details">
                    <p>100 days</p>
                    <p>3 day</p>
                </div>
            </div>
        </div>
    )
}


export default StudentPerformanceChart