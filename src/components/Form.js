import { useForm } from "../hooks/useForm";
import BrazilChart from './BrazilChart';
import {Input,Form,FormGroup} from "reactstrap";

import styled from 'styled-components';

const StyledDiv = styled.div`
background-color : ${props => props.appearance ? "rgb(58, 56, 56)" : "white"};
h1 {
    color : ${props => props.appearance ? "lightgray" : " black"};;
}
>div {
    height : 100vh;
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items  :center;
}
header {
  border-bottom :${props => props.appearance ? " 2px solid gray" : " 2px solid lightgray"};
  padding : 2rem;
  font-size : 25px;
  background-color :  ${props => props.appearance ? "rgb(31, 30, 30)" : "whitesmoke"};
  color :  ${props => props.appearance ? "lightgray" : "gray"};
  position : fixed;
  top : 0;
  width : 100%;
}
footer {
    border-top :${props => props.appearance ? " 2px solid gray" : " 2px solid lightgray"};
  padding : 4rem;
  background-color : ${props => props.appearance ? "rgb(31, 30, 30)" : "whitesmoke"};
}
div {
  margin-top : 3rem;
}
input {
    background-color :${props => props.appearance ? " rgb(31, 30, 30)" : " white"};
    color : ${props => props.appearance ? "lightgray" : " black"};
    &:focus {
        background-color :${props => props.appearance ? " rgb(31, 30, 30)" : " white"};
        color : ${props => props.appearance ? "lightgray" : " black"};
    }
}
select {
    background-color :${props => props.appearance ? " rgb(31, 30, 30)" : " white"};
    color : ${props => props.appearance ? "lightgray" : " black"};
}
`


const initialValue = {
    list : "",
    appearance : false, 
}

export default function Form1(props) {
    const {dropDownData,fetchData,chartData,setData} = props; 
    const [data,changeData,submit,name] = useForm("form",initialValue,fetchData,dropDownData,chartData,setData); 
    return(
        <StyledDiv appearance = {data.appearance}>
            <div>
             <header>GDP Search</header>
            <BrazilChart chartData = {props.chartData} name = {name}/>
            <Form onSubmit={submit}> 

                <FormGroup style={{display:"flex", flexDirection:"column",justifyContent:  "center",alignItems: "center"}} switch>
                <Input id = "checked" onChange={changeData} type = "switch" name = "appearance" checked = {data.appearance}/>
                </FormGroup>
                <div id = "divForm">
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
            <footer></footer>
        </StyledDiv>
    )
}