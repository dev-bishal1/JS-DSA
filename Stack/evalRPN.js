/**
 * @param {string[]} tokens
 * @return {number}
 */
const evalRPN = (tokens) => {
  const result = [];

  for (let i = 0; i < tokens.length; i++) {
    if (!isNaN(tokens[i])) {
      result.push(parseInt(tokens[i]));
      continue;
    }

    const lastValue = result.pop();
    const secondLastValue = result.pop();

    let calculation = 0;
    switch (tokens[i]) {
      case "*":
        calculation = secondLastValue * lastValue;
        break;

      case "+":
        calculation = secondLastValue + lastValue;
        break;

      case "-":
        calculation = secondLastValue - lastValue;
        break;
      case "/":
        calculation = Math.trunc(secondLastValue / lastValue);
        break;
    }

    result.push(calculation);
  }

  return result[0];
};

const tokens = ["4", "-2", "/", "2", "-3", "-", "-"];
console.log(evalRPN(tokens));
