function searchPhone(phones: number[], target: number): number {
  let start = 0;
  let end = phones.length - 1;

  while (start <= end) {
    const index = Math.floor((start + end) / 2);

    if (target === phones[index]) {
      return index;
    }
    if (target < phones[index]) {
      end = index - 1;
    } else {
      start = index + 1;
    }
  }

  return -1;
}

const phones = [1001, 1002, 1005, 1008, 1010, 1015, 1020];

const search1 = searchPhone(phones, 1008);
// → 3 (it's at index 3)
console.log(search1);

const search2 = searchPhone(phones, 1001);
// → 0 (it's at index 0)
console.log(search2);

const search3 = searchPhone(phones, 1020);
// → 6 (it's at index 6)
console.log(search3);

const search4 = searchPhone(phones, 9999);
// → -1 (doesn't exist)
console.log(search4);

/* 
Candies earned: 18
1,046 ops/s
Bonus for solving within the week! +3 points
*/
