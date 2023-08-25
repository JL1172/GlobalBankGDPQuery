import { useState } from "react";

export const useForm  = (initialValue,fetchData,dropDownData,chartData,setData2) => {
 const [data,setData] = useState(initialValue);
 const [name,setName] = useState("");
 
 const changeData = (e) => {
    const valueToUse = e.target.type === "checkbox" ? e.target.checked : e.target.value; 
    setData({...data, 
        [e.target.name] : valueToUse,
     })
 }
 const submit = e => {
    e.preventDefault();
    let newName = dropDownData.map((n,i)=> {
        if (n.iso2Code === data.list) {
          return n.name;
        } return;
    });
    let filter = newName.filter(n=> n);
    setName(filter)
    const newObj =  data.list;
    fetchData(newObj).then(res=> {
        console.log(res)
        let object = res[1].slice(0,20);
        object.reverse();
        setData2(object);
    }) 
 }

 return [data,changeData,submit,name];
}


