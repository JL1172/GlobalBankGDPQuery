import {LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip} from 'recharts';


export default function BrazilChart(props) {
    const {chartData}= props; 
    return (
        <div style = {{textAlign : "center"}}>
            <h1>{props.name.length > 0 ? props.name.toString() : "Afghanistan"}</h1>
            <LineChart width={1000} height={300} data = {chartData}>
                <Line type = "monotone" stroke = "#8884d8" dataKey="value" />
                <CartesianGrid stroke = "#ccc" strokeDasharray="5 5"/>
                <XAxis dataKey="date"/>
                <YAxis />
                <Tooltip />
            </LineChart>
        </div>
    )
}