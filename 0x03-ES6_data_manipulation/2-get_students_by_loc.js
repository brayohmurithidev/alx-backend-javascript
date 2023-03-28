const getStudentsByLocation = (arr, city) => {
  const newList = arr.filter((stud) => stud.location === city);
  return newList;
};

export default getStudentsByLocation;
