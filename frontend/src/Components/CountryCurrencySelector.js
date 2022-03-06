import React,{useState,useEffect} from "react"



export const CountryCurrencySelector=()=>{

    const [options,setOptions]=useState(null);
    const [selected,setSelected]=useState(null);
    const[loading, setLoading]=useState(false);
    const[error,setError]=useState(null);
    


    useEffect(()=>{


        setLoading(true);
        fetch(`http://localhost:3000/getAllCurrencyToDollar`, {
            "method": "GET",
            headers: {
              'Content-Type': 'application/json',
               'Content-Type': 'application/x-www-form-urlencoded',
            }
        }).then(response=>response.json()).then((c)=>setOptions(c)).then(()=>{setLoading(false)}).then(console.log(options)).catch(setError);
        
       
    
      },[error]);


      function handleChange(e) 
      {

       // this.setState({value: event.target.value});
     setSelected(  e.target.value)
        
        }

        if(loading) return <h1>loading</h1>
        if(!options)
        return null
         if(options )

return(

    <>
  
    <select value={options[0].Currency} onChange={handleChange}>
   {options.map((data)=>(
       <>
       {console.log(options[0].Currency)}
     <option key={data._id} value={data.Currency}>{data.Currency}</option>
       </>
   ))}
     
 </select>
    
    </>
);

}