import { useForm } from "../hooks/useForm";
import BrazilChart from './BrazilChart';
import {Input,Form} from "reactstrap";

const initialValue = {
    list : "",
    appearance : false, 
}

export default function Form1(props) {
    const {dropDownData,fetchData,chartData,setData} = props; 
    const [data,changeData,submit,name] = useForm(initialValue,fetchData,dropDownData,chartData,setData); 
    return(
        <div>
            <BrazilChart chartData = {props.chartData} name = {name}/>
            <Form onSubmit={submit}> 
                <div style={{display:"flex", flexDirection:"column",justifyContent:  "center",alignItems: "center"}}>
                <label>{}</label>
                <input onChange={changeData} type = "checkbox" name = "appearance" checked = {data.appearance}/>
                <Input style = {{width : "30rem", marginTop : "2rem",marginBottom : "2rem"}} type = "submit" id = "submit" />
                <Input type = "select" onChange={changeData} value={data.list} id = "list" name = "list">
                    <option value = "">--Select Country--</option>
                    {dropDownData.map((n,i)=> {
                        return <option key = {i} value = {n.iso2Code}>{n.name}</option>
                    })}
                </Input>
                </div>
            </Form>
        </div>
    )
}