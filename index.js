console.log("Hello world..");
const answers = {};

const fact = (a) => {
  let ans = 1;
  if (answers[a]) {
    return answers[a];
  }
  if (a === 0 || a === 1) {
    return 1;
  }
  for (let i = 2; i <= a; i++) {
    console.log("calculation fact of", a);
    ans *= i;
  }
  answers[a] = ans;
  return ans;
};

console.log(answers);
