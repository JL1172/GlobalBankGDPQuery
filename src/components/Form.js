import { useForm } from "../hooks/useForm";
import BrazilChart from './BrazilChart';

const initialValue = {
    list : "",
    appearance : false, 
}

export default function Form(props) {
    const {dropDownData,fetchData,chartData,setData} = props; 
    const [data,changeData,submit,name] = useForm(initialValue,fetchData,dropDownData,chartData,setData); 
    return(
        <div>
            <BrazilChart chartData = {props.chartData} name = {name}/>
            <form onSubmit={submit}>
                <select onChange={changeData} value={data.list} id = "list" name = "list">
                    <option value = "">--Select Country--</option>
                    {dropDownData.map((n,i)=> {
                        return <option key = {i} value = {n.iso2Code}>{n.name}</option>
                    })}
                </select>
                <input type = "submit" id = "submit" />
                <div>
                <label></label>
                <input onChange={changeData} type = "checkbox" name = "appearance" checked = {data.appearance}/>
                </div>
            </form>
        </div>
    )
}