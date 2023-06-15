class Solution {
  constructor() {
    this.solutions = [];
  }
  valid(s) {
    if (s.length === 0) {
      return false;
    }
    if (s.length > 1 && s[0] === '0') {
      return false;
    }
    return parseInt(s) >= 0 && parseInt(s) <= 255;c
  }
  restoreIpAddresses(s) {
    this.solutions = [];
    this.restoreIp(s, 0, "", 0);
    return this.solutions;
  }
  restoreIp(ip, idx, restored, count) {
    if (count > 4) {
      return;
    }
    if (count === 4 && idx === ip.length) {
      this.solutions.push(restored);
    }
    for (let i = 1; i <= 3; i++) {
      if (idx + i > ip.length) {
        break;
      }
      let s = ip.substring(idx, idx + i);
      if (!this.valid(s)) {
        continue;
      }
      this.restoreIp(ip, idx + i, restored + s + (count === 3 ? "" : "."), count + 1);
    }
  }
}
function main() {
  let s = "25525511135";
  let solucion = new Solution();
  let listaPalabras = solucion.restoreIpAddresses(s);
  console.log(listaPalabras);
}
main();