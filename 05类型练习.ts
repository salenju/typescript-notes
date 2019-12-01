type SumValue = { money: number, count: (value: number) => void };

let sumVal: SumValue = {
  money: 200,
  count(value: number): void {
    this.money += value;
  }
};

let handleCount: { name: string, sum: SumValue, friends: string[] } = {
  name: "Salen",
  sum: sumVal,
  friends: ["lucy", "Helen"]
};

handleCount.sum.count(500);
console.log(handleCount);