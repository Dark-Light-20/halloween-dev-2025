function countSheep(letters: string): number {
  const sheepMap = new Map<string, number>([]);
  for (const letter of letters) {
    sheepMap.set(letter, (sheepMap.get(letter) ?? 0) + 1);
  }
  const sCount = sheepMap.get("s") ?? 0;
  const hCount = sheepMap.get("h") ?? 0;
  const eCount = Math.floor((sheepMap.get("e") ?? 0) / 2);
  const pCount = sheepMap.get("p") ?? 0;
  return Math.min(sCount, hCount, eCount, pCount);
}

const count1 = countSheep("sheepxsheepy");
// → 2 (you can form "sheep" twice)
console.log(count1);

const count2 = countSheep("sshhheeeepppp");
// → 2 (s=2, h=3, e=4, p=4 → only 2 complete "sheep")
console.log(count2);

const count3 = countSheep("hola");
// → 0 (not enough letters)
console.log(count3);

const count4 = countSheep("peesh");
// → 1 (letters are scrambled but they're all there)
console.log(count4);

/* 
Candies earned: 20
2,802 ops/s
Bonus for solving on release day! +5
*/
