//convert the time to minutes
export const minsPerDay = (time: Date) => {
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let totalMins = hours * 60 + minutes;
  return totalMins;
};


