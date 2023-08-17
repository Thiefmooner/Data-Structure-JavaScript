function quene () {
    var collection = [];
    this.print = function(){
        console.log(collection);
    }
    // 入列，向列尾加一个元素
    this.enquene = function(element){
        collection.push(element);
    }
    //出列，列头删一个元素
    this.dequene = function(){
        return collection.shift();
    }
    this.front = function (){
        return collection[0];
    }
    this.isEmpty = function (){
        return collection.length === 0;
    }
    this.size = function(){
        return collection.length;
    }
}