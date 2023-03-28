// const alturas = [1,8,6,2,5,4,8,3,7] //49
const alturas = [8, 1, 6, 2, 5, 4, 1, 3, 7] //56

function mostWaterContainer(heights){
  let p1 = 0
  let p2 = heights.length - 1
  let result = 0  

  while(p1 !== p2){
    let base = p2 - p1
    let altura = heights[p1] > heights[p2] ? heights[p2] : heights[p1]

    let area = base * altura
    result = result < area ? area : result;

    if (p1 < p2) {
      p1++
    } else { p2-- }
  }
  return result
}

console.log(mostWaterContainer(alturas))