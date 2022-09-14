function findGrade(staff_vaccine, staff_testing, customer_vaccine) {
  if (staff_vaccine >= 2 && customer_vaccine >= 1) {
    console.log("D");
  } else if (staff_vaccine >= 1) {
    console.log("C");
  } else if (staff_testing == true) {
    console.log("B");
  } else console.log("A");
}

findGrade(2, false, 1);
findGrade(3, true, 0);
findGrade(0, true, 1);
findGrade(0, false, 1);
