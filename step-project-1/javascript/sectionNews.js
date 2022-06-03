let date = new Date();
const returnNowDate = () => {
  return date.getDate();
};
const returnNowMonth = () => {
  switch (date.getMonth()) {
    case 0:
      return "Jan";
      break;
    case 1:
      return "Feb";
      break;
    case 2:
      return "Mar";
      break;
    case 3:
      return "Apr";
      break;
    case 4:
      return "May";
      break;
    case 5:
      return "June";
      break;
    case 6:
      return "July";
      break;
    case 7:
      return "Aug";
      break;
    case 8:
      return "Sept";
      break;
    case 9:
      return "Oct";
      break;
    case 10:
      return "Nov";
      break;
    case 11:
      return "Dec";
      break;
  }
};
const nowDate = document.querySelectorAll(".date");
nowDate.forEach((e) => {
  e.innerText = returnNowDate();
});
const nowMonth = document.querySelectorAll(".month");
nowMonth.forEach((e) => {
  e.innerText = returnNowMonth();
});


