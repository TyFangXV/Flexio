//formate the date to be displayed
export const formatAMPM = (date: Date) => {
    if(date === undefined)
    {
      return "";
    }
    
    if(date !== undefined)
    {
      var hours = date.getHours();
      var minutes: string | number = date.getMinutes();
      var ampm = hours >= 12 ? 'pm' : 'am';
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      minutes = minutes < 10 ? '0' + minutes.toString() : minutes.toString();
      var strTime = hours + ':' + minutes + ' ' + ampm;
      return strTime;    
    }
  
  };
  

  //convert the time to minutes
export const minsPerDay = (time: Date) => {
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let totalMins = hours * 60 + minutes;
    return totalMins;
  };
  
  
//binary search

export const binarySearch = (arr: any[], value: any) => {
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (arr[mid] === value) {
            return mid;
        } else if (arr[mid] < value) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
}



  