function lengthOfLongestSubstring(letras) {
   let maxSize = 0;
   let p1 = 0;
   let map = new Map();
   for (let p2 = 0; p2 < letras.length; p2++) {
      const actualindex = map.get(letras[p2])
      if (actualindex == undefined || actualindex < p1) {
         map.set(letras[p2], p2)
         const newMaxSize = p2 - p1 + 1;
         if (newMaxSize > maxSize) {
            maxSize = newMaxSize;
         }
      } else {
         p1 = actualindex + 1
         map.set(letras[p2], p2)
      }
   }
   return maxSize;
}

console.log(lengthOfLongestSubstring("abcabcbb"))
console.log(lengthOfLongestSubstring("jdkafnlcdsalkxcmpoiuytfccv"))

