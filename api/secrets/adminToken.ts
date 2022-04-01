import { TokenPermissionLevel } from "../src/utils/constants/Permissions";

const tokens = ["76cc5058-f795-4c30-9c0b-0d43e9334339", "e5f4518d-a7e3-407e-a76f-285c782de6a7", "c0676d73-23cd-4fd8-a0d5-49a61f6a5df6", "630385d2-6f00-473a-95de-6f76421ea2fc", "7e22e1ae-ead2-4d08-b511-272f6c1009a5", "a967f397-845e-437b-a285-4ba60cb4c0f3"]


//binary search
const binarySearch = (arr:any[], target:any) => {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] === target) {
            return mid; 
        } else if (arr[mid] > target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return -1;
}

export const verifyToken = (token:string, permisionRequirement:TokenPermissionLevel, role:string) => {
    
    if(role === permisionRequirement.name)
    {
        const index = binarySearch(tokens, token);
        if (index !== -1) {
            return true;
        }
        return false;        
    }

}   
 
