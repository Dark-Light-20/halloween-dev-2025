function changeLock(current: string, target: string): number {
  let totalMoves = 0;
  for (let i = 0; i < 4; i++) {
    const distance = Math.abs(Number(current[i]) - Number(target[i]));
    const distance2 = 10 - distance;
    totalMoves += Math.min(distance, distance2);
  }
  return totalMoves;
}

const result1 = changeLock("0022", "0044");
// → 4
// Wheel 2: 2→4 (2 moves forward)
// Wheel 3: 2→4 (2 moves forward)
// Total: 2+2 = 4
console.log(result1);

const result2 = changeLock("0000", "9999");
// → 4
// Each wheel: 0→9 (1 move backward is faster than 9 forward)
// Total: 1+1+1+1 = 4
console.log(result2);

const result3 = changeLock("1234", "5678");
// → 16
// Wheel 0: 1→5 (4 moves)
// Wheel 1: 2→6 (4 moves)
// Wheel 2: 3→7 (4 moves)
// Wheel 3: 4→8 (4 moves)
// Total: 4+4+4+4 = 16
console.log(result3);

const result4 = changeLock("0000", "0000");
// → 0
// We're already at the target code
console.log(result4);

const result5 = changeLock("1357", "2468");
// → 4
// Wheel 0: 1→2 (1 move)
// Wheel 1: 3→4 (1 move)
// Wheel 2: 5→6 (1 move)
// Wheel 3: 7→8 (1 move)
// Total: 1+1+1+1 = 4
console.log(result5);

/* 
Candies earned: 18
1,430 ops/s
Bonus for solving within the week! +3 points
*/
