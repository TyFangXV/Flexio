import axios from "axios"
import { Task } from "../../types";
import Setting from "../constants/Setting"
import { getItem } from "./database"

const removeDuplicates = (array:Task[]) => {
    const result = [];
    for (let i = 0; i < array.length; i++) {
      let exists = false;
      for (let j = 0; j < result.length; j++) {
        if (array[i]._id === result[j]._id) {
          exists = true;
          break;
        }
      }
      if (!exists) {
        result.push(array[i]);
      }
    }
    return result;
  }

export const getTaskFromLocal = async() => {
    const data = await getItem("task");
    if(data){
        return JSON.parse(data);
    }else{
        return null;
    }
}

export const getTaskFromCloud = async(userID:string) => {
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


export const SyncTaskWithRest = async(userID:string) => {
    //get te existing task from local storage and cloud
    const taskFromLocal = await getTaskFromLocal();
    const taskFromCloud = await getTaskFromCloud(userID);

    const newArr:Task[] = [];

    if(taskFromLocal) 
    {
        newArr.push(...taskFromLocal);
    }
    
    if(taskFromCloud)
    {
        newArr.push(...taskFromCloud);
    }

    const newArrWithoutDuplicate = removeDuplicates(newArr);
    return newArrWithoutDuplicate;
}
