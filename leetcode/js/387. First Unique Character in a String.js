// https://leetcode.com/problems/first-unique-character-in-a-string/

/**
 * @param {string} s
 * @return {number}
 */
 const firstUniqCharA = function(s) {
   if (s.length < 2) return 0
   if (s.length < 1) return -1
   
   const map = new Map()


   for (let i = 0; i < s.length; i++) {
     const char = s[i]
     const mapped = map.get(char)

     // First occurence
     if (mapped === undefined) map.set(char,i)
       
     // Next occurences
     else if (mapped > -1) map.set(char,-1)
   }

   let unique = -1
   const mapIterator = map.values()
   while (unique === -1) {
     unique = mapIterator.next().value
   }

   return unique ?? -1
};
 
const firstUniqCharB = function(s) {
  for(let i=0;i<s.length;i++){
    let char=s[i]
    if(s.indexOf(char) == i && s.indexOf(char, i+1 ) == -1) return i
  }
   return -1
};



const s = "Z"
firstUniqCharA(s)