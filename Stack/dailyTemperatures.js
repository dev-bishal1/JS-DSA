/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
const dailyTemperatures = (temperatures) => {
  const result = [];
  const trackTemperature = [];

  for (let i = temperatures.length - 1; i >= 0; i--) {
    let curr = temperatures[i];

    console.log(
      trackTemperature.length - 1,
      temperatures[trackTemperature.length - 1]
    );
    while (
      trackTemperature.length &&
      temperatures[trackTemperature[trackTemperature.length - 1]] <= curr
    ) {
      trackTemperature.pop();
    }

    if (!trackTemperature.length) {
      result[i] = 0;
    } else {
      const nextWarmerTemp = trackTemperature[trackTemperature.length - 1];
      const diff = nextWarmerTemp - i;
      result[i] = diff;
    }

    trackTemperature.push(i);
  }
  return result;
};

let temperatures = [34, 80, 80, 34, 34, 80, 80, 80, 80, 34];

console.log(dailyTemperatures(temperatures));
