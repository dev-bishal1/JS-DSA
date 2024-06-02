/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
const minEatingSpeed = (piles, h) => {
  let p1 = 1;
  let p2 = (result = Math.max(...piles));

  while (p1 <= p2) {
    const div = Math.floor((p1 + p2) / 2);
    let hours = 0;

    for (const e of piles) {
      hours += Math.ceil(e / div);
    }

    if (hours <= h) {
      result = div;
      p2 = div - 1;
    } else {
      p1 = div + 1;
    }
  }

  return result;
};

let piles = [30, 11, 23, 4, 20],
  h = 5;

console.log(minEatingSpeed(piles, h));
