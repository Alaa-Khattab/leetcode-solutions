/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
// var longestCommonSubsequence = function(text1, text2, arg='') {
    
//     console.log('1111',text1, text2, arg)
//     console.log('2222', text1.length, text2.length)
//     if (text1.length == 0 || text2.length == 0) {
//         console.log('FIRST')
//         console.log('--------------------------------------------------')
//         return 0
//     }
//     else if (text1.charAt(0) == text2.charAt(0)) {
//         console.log('SEECOND')
//         console.log('--------------------------------------------------')
//         return (1 +  longestCommonSubsequence(text1.substring(1), text2.substring(1)))
//     } else {
//         console.log('3333333', text1, text2)
//     console.log('--------------------------------------------------')
    
    
//     return Math.max(
//         longestCommonSubsequence(text1.substring(1),text2, 'first arg'),
//         longestCommonSubsequence(text1,text2.substring(1), 'second arg')
        
//     )
    
        
//     }
    
  
    
    
// };

var longestCommonSubsequence = function(text1, text2) {
  const result = new Array(text1.length + 1).fill(null)
    .map(() => new Array(text2.length + 1).fill(null))
  console.log(result)
  function test(end1, end2) {
    if (end1 === -1 || end2 === -1) {
      return 0
    }
    if (result[end1][end2] !== null) {
      return result[end1][end2]
    }
    if (text1[end1] === text2[end2]) {
      result[end1][end2] = 1 + test(end1 - 1, end2 - 1)
      return result[end1][end2]
    } else {
      result[end1][end2] = Math.max(
        test(end1 - 1, end2),
        test(end1, end2 - 1)
      )
      return result[end1][end2]
    }
  }
  return test(text1.length - 1, text2.length - 1)
}