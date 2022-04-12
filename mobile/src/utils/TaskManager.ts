import axios from "axios"
import Setting from "../constants/Setting"


export const getTask = async(userID:string) => {
   try {
       const {data:taskFromCloud} = await axios.get(`${Setting.ApiUrl}/task/getTask?userid=${userID}`);
        if(taskFromCloud.status === "success")
        {
            return taskFromCloud.data;
        }else{
            return null
        }
   } catch (error:any) {
       return error;
   }
}   
