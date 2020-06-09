// Spring is here and your friend calls to see if you are interested in meeting someone for a blind date next month.You have been a loner for so long - solo for 3 years - and even gained 30 pounds.You are determined to meet the person looking your best, so you decide to cut meals and do intensive cardio.You want to track how often your daily caloric intake is lower than the day before and daily hours spent excercising exceeds those from the previous day.If so, you will mark it as a success day.Create a function that returns the total number of success days.

function loseWeight(routine) {
  let successDays = 1;
  for(let i = 1; i < routine.caloricIntake.length; i++) {
    if (routine.caloricIntake[i] < routine.caloricIntake[i - 1] && routine.hoursExercised[i] > routine.hoursExercised[i-1]  ) {
      successDays++;
    } else {
      return successDays;
    }
  }
  return successDays;

}

let routine = {
  caloricIntake: [3090, 2500, 2000, 2888, 1234, 1000],
  hoursExercised: [1, 2, 4, 3, 5, 2]
}

console.log(loseWeight(routine))
