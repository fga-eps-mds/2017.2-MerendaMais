export const dateNotExpired = (scheduleData) => {
  const date = new Date();
  const systemDay = date.getDate();
  const systemMonth = date.getMonth() + 1;
  const systemYear = date.getFullYear();

  // Day is in range [0]-[2] from the string, two digits long
  const daySchedule = scheduleData.content.date.substr(0, 2);

  // Month is in range [3]-[4] from the string, two digits long
  const monthSchedule = scheduleData.content.date.substr(3, 2);

  // The year is listed at string's index 6 - Remaining string after [6]
  const yearSchedule = scheduleData.content.date.substr(6);

  const validDate =
    yearSchedule < systemYear &&
    monthSchedule < systemMonth &&
    daySchedule < systemDay;

  return validDate;
};

export default dateNotExpired;
