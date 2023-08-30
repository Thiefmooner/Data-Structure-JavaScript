//Set基本结构
function Set(){
    this.items = {}
    //has
    Set.prototype.has = function (value) {
        return this.items.hasOwnProperty(value)//->true/false
    }
    //add
    Set.prototype.add = function (value) {
        if(this.has(value))return false //添加之前，判断当前集合是否有当前元素
        this.items[value] = value//key,value都是value
        return true
    }
    //remove
    Set.prototype.remove = function ( value ) {
        if(!this.has.value)return false
        delete this.items[value]
        return true
    }
    //clear
    Set.prototype.clear = function ( ) {
        this.items = {}
    }
    //values
	Set.prototype.values = function ( ) {
		return Object.keys(this.items)
	}
}


//Set之间的操作：并，交，差，子

//并集
function Set(){
    this.items = {}
    //has
    Set.prototype.has = function (value) {
        return this.items.hasOwnProperty(value)//->true/false
    }
    //add
    Set.prototype.add = function (value) {
        if(this.has(value))return false //添加之前，判断当前集合是否有当前元素
        this.items[value] = value//key,value都是value
        return true
    }
    //remove
    Set.prototype.remove = function ( value ) {
        if(!this.has.value)return false
        delete this.items[value]
        return true
    }
    //clear
    Set.prototype.clear = function ( ) {
        this.items = {}
    }
    //values
	Set.prototype.values = function ( ) {
		return Object.keys(this.items)
	}
    Set.prototype.union = function (B_Set) {
        var unionSet = new Set()
        var values = this.values()//取出A_Set的元素
        for(var i=0; i<values.length;i++){//注意，此时values已经是A的key值数组了
            unionSet.add(values[i])
        }
        var values = B_Set.values()//取出B_Set的元素
        for(var j=0; j<values.length; j++){
            unionSet.add(values[j])
        }
        return unionSet
    }
}

