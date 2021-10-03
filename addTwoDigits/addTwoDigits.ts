export function addTwoDigits(n: any): number {
  let total = 0;
  let newNumber = n.toString().split('');
  for (let num of newNumber) {
    total += parseInt(num);
  }
  return total;
}

console.log(addTwoDigits(29));
