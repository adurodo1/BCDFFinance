import { getAllRates } from "../controllers/bcdfController.js";

 const routes =(app)=>{

   // app.route("/allrates").get(getAllRates).post(addNewTodo)
    app.route("/allrates").get(getAllRates);
;}
 

export default routes;