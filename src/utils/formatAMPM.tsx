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
