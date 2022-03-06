import mongoose from "mongoose";
import request from "request";
 

import { CountrySchema } from "../model/country.js";
import {CurrencyToDollarSchema} from "../model/countryToDollar.js"



const CountryCurrency= mongoose.model('CountryCurrency',CountrySchema);

const CurrencyToDollar= mongoose.model('CurrencyToDollar',CurrencyToDollarSchema)

// add all countries

export const addAllCountries =(req,res)=>{
    let CountriesandtheirCodes={}
    const arr= req.body.data;
    console.log(req.body.data.length)
    var cnt =0;
    for(var i=0;i<req.body.data.length;i++)
    {

         CountriesandtheirCodes = new CountryCurrency(arr[i]);
         console.log(arr[i])
         CountriesandtheirCodes.save((err,todo)=>{
            if(err)
            console.log(err);
            //res.json(todo);
        
        })
    }

   
    

    
    }


export const addAllRates=(req,res)=>{

 

const options = {
    method: 'GET',
    url: 'https://exchangerate-api.p.rapidapi.com/rapid/latest/USD',
    headers: {
      'x-rapidapi-host': 'exchangerate-api.p.rapidapi.com',
      'x-rapidapi-key': '1c937a06bfmsh36dbf08a71e315fp1188cbjsn7dd66513661d',
      useQueryString: true
    }
  };
  
  request(options, function (error, response, body) {
      if (error) throw new Error(error);
  
      body= JSON.parse(body)
   

      var keys = Object.keys(body.rates);

  

      for(var i=0;i<keys.length;i++)
{

   // console.log(body.rates)

    var newCurrency = new CurrencyToDollar({
         
        Currency:keys[i],
        DollarAmount:body.rates[keys[i]]});
     //console.log(arr[i])

    //  newCurrency.save((err,todo)=>{
    //     if(err)
    //     console.log(err);
    //     //res.json(todo);
    //     console.log(todo)
    
    // })
}
  });

}

export const getAllCountryCourencies =(req,res)=>{


    CountryCurrency.find({},(err,result)=>{
        if(err)
         console.log(err)
         else 
           res.json(result)

    })

}


export const getAllCurrencyToDollar =(req,res)=>{


    CurrencyToDollar.find({id:req.body.id},(err,result)=>{
        if(err)
         console.log(err)
         else 
           res.json(result)

    })

}


// all bit coins on count
//


//logic to set 

export const getAllBitCoinsData =(req,res)=>{
    const options = {
        method: 'GET',
        url: 'https://api.coinlore.net/api/tickers/',
  
      };
   
    
  request(options, function (error, response, body) {
    if (error) throw new Error(error);

    body= JSON.parse(body)

    res.json(body.data);
 

   // var keys = Object.keys(body.rates);


 
});

    
    }