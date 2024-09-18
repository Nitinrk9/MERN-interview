// destructuing array

const scores = [10, 12, 30, 40, 50, 60];
const [mathMarks, engMarks, phySics, ...others] = scores;
console.log(mathMarks, engMarks, phySics, others); // 10 12 30 [ 40, 50, 60 ]
