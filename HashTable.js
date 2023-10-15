function HashTable () {
    this.storage = []
    this.count = 0
    this.limit = 8

    //哈希函数
    HashTable.prototype.HashFunction = function (str, size){
        var hashCode = 0
        for(var i=0; i<str.length; i++){
            hashCode = 37 * hashCode +str.charCodeAt(i)
        }
        var index = hashCode % size
        return index
    }

    //插入
    HashTable.prototype.put = function (key,value) {
        //根据key获得对应index
        var index = this.HashFunction(key,this.limit)


    }

}