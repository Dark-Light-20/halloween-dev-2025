function myersCalendar(year: number): string[] {
  if (!Number.isInteger(year) || year < 1) {
    return [];
  }
  const dates: string[] = [];
  for (let i = 0; i < 12; i++) {
    const baseDate = new Date(year, i, 13);
    if (baseDate.getDay() === 5) {
      dates.push(baseDate.toISOString().split("T")[0]);
    }
    if (i === 9) {
      dates.push(`${year}-10-31`);
    }
  }
  return dates;
}

const year1 = myersCalendar(2025);
// → ['2025-06-13', '2025-09-13', '2025-10-31']
console.log(year1);

const year2 = myersCalendar(2026);
// → ['2026-02-13', '2026-03-13', '2026-10-31', '2026-11-13']
console.log(year2);

const year3 = myersCalendar(2024);
// → ['2024-09-13', '2024-10-31', '2024-12-13']
console.log(year3);

/* 
Candies earned: 20
2,849 ops/s
Bonus for solving on release day! +5
*/
