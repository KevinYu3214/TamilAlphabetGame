export const getColumnsPerPage = () => {
  const screenWidth = window.innerWidth;

  if (screenWidth >= 1500) {
    return 12;
  } else if (screenWidth >= 768) {
    return 10;
  } else if (screenWidth >= 600) {
    return 8;
  } else if (screenWidth >= 480) {
    return 7;
  } else if (screenWidth >= 480) {
    return 5;
  } else if (screenWidth >= 300) {
  return 5;
  }
  else {
    return 4;
  }
};
