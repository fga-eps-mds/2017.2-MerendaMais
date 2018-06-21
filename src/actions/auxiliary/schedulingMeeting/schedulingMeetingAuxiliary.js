export const dateNotExpired = (scheduleData) => {
  // Day is in range [0]-[2] from the string, two digits long
  const daySchedule = scheduleData.content.date.substr(0, 2);

  // Month is in range [3]-[4] from the string, two digits long
  const monthSchedule = scheduleData.content.date.substr(3, 2);

  // The year is listed at string's index 6 - Remaining string after [6]
  const yearSchedule = scheduleData.content.date.substr(6);

  const meetingDate = new Date(yearSchedule, monthSchedule, daySchedule);
  const actualDate = new Date();

  // Erases the actual date hours/minutes/seconds/milliseconds
  actualDate.setHours(0, 0, 0, 0);

  return meetingDate <= actualDate;
};

export default dateNotExpired;
