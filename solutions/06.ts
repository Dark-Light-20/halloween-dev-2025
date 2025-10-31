function surviveRoulette(n: number, k: number): number {
  let survivor = 0;
  let step = 1;
  while (step !== n) {
    step++;
    survivor = (survivor + k) % step;
  }
  return survivor;
}

const survive1 = surviveRoulette(4, 2);
// Result: 0

// Explanation:
// Start: [0, 1, 2, 3]
// Count 2 from position 0: eliminates 1 → [0, 2, 3]
// Count 2 from position 2: eliminates 3 → [0, 2]
// Count 2 from position 0: eliminates 2 → [0]
// Survivor: 0
console.log(survive1);

const survive2 = surviveRoulette(5, 3);
// Result: 3

// Explanation:
// Start: [0, 1, 2, 3, 4]
// Count 3 from 0: eliminates 2 → [0, 1, 3, 4]
// Count 3 from 3: eliminates 0 → [1, 3, 4]
// Count 3 from 1: eliminates 4 → [1, 3]
// Count 3 from 1: eliminates 1 → [3]
// Survivor: 3
console.log(survive2);

const survive3 = surviveRoulette(6, 2);
// Result: 4

// Explanation:
// Start: [0, 1, 2, 3, 4, 5]
// Round 1: eliminates 1 → [0, 2, 3, 4, 5]
// Round 2: eliminates 3 → [0, 2, 4, 5]
// Round 3: eliminates 5 → [0, 2, 4]
// Round 4: eliminates 2 → [0, 4]
// Round 5: eliminates 0 → [4]
// Survivor: 4
console.log(survive3);

const survive4 = surviveRoulette(1, 1);
// Result: 0

// Explanation:
// There is only one victim, therefore they survive
console.log(survive4);

/* 
Candies earned: 18
4,753 ops/s
Bonus for solving within the week! +3 points
*/
