function plusMinus(arr) {
  // Write your code here
  const map = new Map();
  map.set("pos", 0)
  map.set("neg", 0)
  map.set("zero", 0)

  let result = []

  arr.forEach((num, i) => {
    if (num > 0) {
      map.set("pos", map.get("pos") + 1)
    }

    if (num < 0) {
      map.set("neg", map.get("neg") + 1)
    }

    if (num === 0) {
      map.set("zero", map.get("zero") + 1)
    }
  });

  for (const [key, value] of map) {
    let calc = value / arr.length
    result.push(calc)
  }

  for (let i = 0; i < result.length; i++) {
    const roundedNumber = Math.round(result[i] * 100000) / 100000;
    const roundedString = roundedNumber.toFixed(5).padEnd(6, "0");
    result[i] = roundedString;
  }

  for (let i = 0; i < result.length; i++) {
    console.log(result[i]);
  }
}