const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(students) {
let totalStudentScore = students.reduce((accumulator, currentValue)=> {
  return currentValue.score + accumulator;
}, 0)

return totalStudentScore / students.length;
}
getAverageStudentScore(students); // Output: 87.5
