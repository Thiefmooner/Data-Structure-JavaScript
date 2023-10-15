//49.字母异位词分组

//给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表
//字母异位词 是由重新排列源单词的所有字母得到的一个新单词
//例子：
//输入: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
//输出: [["bat"],["nat","tan"],["ate","eat","tea"]]

//strs是一个字符串数组["ada","sfcd","fscd","kka"]
var func = function (strs) {
    var map = new Map()//先创建一个空map
    for(let str of strs){
        let arr = Array.from(str)//字符串转数组
        arr.sort()//数组排序
        let key = arr.toString()//再转为字符串，作为key
        let bucket = map.get(key)?map.get(key):new Array()//初始化一个空数组，有key对应的value时候，就把value存进空数组
        bucket.push(str)//bucket是个数组!
        map.set(key,bucket)//key是个字符串!
    }
    return Array.from(map.values())//map.values()的结果是entries,不是数组，需要Array.from()一下
}
/**
 * 整体思路：
 * 字符串——数组——排序后的字符串作为key
 * bucket是数组，不断push(str)
 * 返回map.values()即可
 */

