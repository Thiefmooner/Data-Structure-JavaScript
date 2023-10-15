/**
 * @param {string} s
 * @return {number}
 */

 /**
  * 这个arr[]的作用是接受最长字串的元素，动态变化，不断的push元素，当有元素重复的时候
  * 删掉之前的元素，继续PUSH
  */
 var lengthOfLongestSubstring = function(s) {
    let arr = []
    let max = 0
    for(let i=0; i<s.length; i++){
        let index = arr.indexOf(s.charAt(i))//字符串里的字母再数组里的下标index
        if( index!==-1 ){//这里出过bug，直接写indx不行
            arr.splice(0,index+1)//有对应index，直接删除这个字母以及以前
        }
        arr.push(s.charAt(i))
        //没重复的你就push，还要立刻和max对比，max最终结果，max要一直和arr.length比大小
        max = Math.max(arr.length,max)
     }
     return max
 };