import { binarySearch } from "./binarysearch";

export const ObjectPropertyFinder = (obj:any, property:string) => {
    const keys = Object.keys(obj);

    const objectProperty = binarySearch(keys, property.toUpperCase());

    if(objectProperty)
    {
        return obj[objectProperty];
    }
}


export default ObjectPropertyFinder;