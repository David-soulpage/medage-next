// on passing date , this function return name of month
export function getMonthOfDate(date: Date): any {
  const d = new Date(date);
  const month = [];
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";
  return month[d.getMonth()];
}
// on passing next count it returns all dates in a month of given date
export function getMonthArray(next: number): any {
  const today = new Date();

  const date = new Date();
  let calculatedArray = new Array(
    new Date(today.getFullYear(), date.getMonth() + next, 0).getDate()
  ).fill(0);

  calculatedArray = calculatedArray.map((ele: any, index: number) => {
    const currentDate = new Date();
    currentDate.setDate(index + 1);

    if (next !== 1) currentDate.setMonth(date.getMonth() + next - 1);

    return new Date(currentDate);
  });

  return calculatedArray;
}

// on passing date and clicking left arrow or right , it returns all dates in a week of given date
export function getWeekArray(element: Date, arrowButton: string): any {
  let firstElement;
  let lastElement;
  const dateArray: any = [];
  if (arrowButton === "left") {
    element.setDate(element.getDate() - 1);
    lastElement = new Date(element);
    element.setDate(element.getDate() - 7);
    firstElement = new Date(element);
  } else {
    element.setDate(element.getDate() + 1);
    firstElement = new Date(element);
    element.setDate(element.getDate() + 7);
    lastElement = new Date(element);
  }

  while (firstElement <= lastElement) {
    dateArray.push(new Date(firstElement));
    firstElement.setDate(firstElement.getDate() + 1);
  }

  return dateArray;
}
