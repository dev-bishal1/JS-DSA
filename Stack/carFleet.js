/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
const carFleet = (target, position, speed) => {
  const fleetData = [];
  const stack = [];
  for (let i = 0; i < position.length; i++) {
    const carWithPositionAndSpeed = [position[i], speed[i]];
    fleetData.push(carWithPositionAndSpeed);
  }

  fleetData.sort((a, b) => a[0] - b[0]);

  for (let i = fleetData.length - 1; i >= 0; i--) {
    const carPosition = fleetData[i][0];
    const carSpeed = fleetData[i][1];
    const timeTakenToReachDestination = (target - carPosition) / carSpeed;
    const timeTakenByAheadCar = stack[stack.length - 1] || 0;
    if (timeTakenToReachDestination > timeTakenByAheadCar) {
      stack.push(timeTakenToReachDestination);
    }
  }

  return stack.length;
};

let target = 100,
  position = [0, 2, 4],
  speed = [4, 2, 1];

console.log(carFleet(target, position, speed));
