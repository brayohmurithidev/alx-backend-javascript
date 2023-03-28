const getListStudentIds = (arr) => {
  if (!Array.isArray(arr)) {
    return [];
  }
  const ids = arr.map((item) => item.id);
  return ids;
};

export default getListStudentIds;
