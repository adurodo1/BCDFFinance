import { getAllCountryCourencies ,getAllCurrencyToDollar,getAllBitCoinsData} from "../controllers/bcdfController.js";

 const routes =(app)=>{

   // app.route("/allrates").get(getAllRates).post(addNewTodo)
   // app.route("/allrates").get(addAllRates);
   app.route("/getAllCountryCourencies").get(getAllCountryCourencies);
   app.route("/getAllCurrencyToDollar").get(getAllCurrencyToDollar);
   app.route("/getAllBitCoinsData").get(getAllBitCoinsData);
  // app.route('/getCurrencyToDollarWithID/:CurrencyId').get(getParameterwithID);

   
;}
 

export default routes;