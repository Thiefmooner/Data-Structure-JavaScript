//链表LinkedList

//链表基本结构封装:Node类+head属性
function LinkedList (){
    //内部的类：节点类
    function Node(data,next){
        this.data = data
        this.next = null//把null初始化为null，意为尾部，后面没有节点了
    }
    //必要的头部属性head
    this.head = null
    this.length = 0 //最好再加一个属性length
}


//链表append操作的封装:末尾加一
function LinkedList (){
    //内部的类：节点类
    function Node(data){
        this.data = data
        this.next = null//next值初始化为null，意为尾部
    }
    //必要的头部属性head
    this.head = null
    this.length = 0 
    //append方法
    LinkedList.prototype.append = function (data){
        //1.无论是否空链表，先创建新节点
        var newNode = new Node(data)
        if(this.length == 0){  //2.1如果为空链表，那么newNode就是第一个，把head指向newNode            
            this.head = newNode
        }else{  //2.2如果非空，找到最后一个节点，然后把newNode赋给最后一个节点
            var current = this.head  //头部
            while(current.next){
                current = current.next
            }
            current.next = newNode  //此时current已经为最后一个节点了，把newNode放在他的next
        }
        this.length++
    }
}


//链表toString方法的封装
function LinkedList (){
    //内部的类：节点类
    function Node(data){
        this.data = data
        this.next = null//next值初始化为null，意为尾部
    }
    //必要的头部属性head
    this.head = null
    this.length = 0 
    LinkedList.prototype.append = function (data){
        //1.无论是否空链表，先创建新节点
        var newNode = new Node(data)
        if(this.length == 0){  //2.1如果为空链表，那么newNode就是第一个，把head指向newNode
            this.head = newNode
        }else{  //2.2如果非空，找到最后一个节点，然后把newNode赋给最后一个节点
            var current = this.head  //头部
            while(current.next){
                current = current.next
            }
            current.next = newNode  //此时current已经为最后一个节点了，把newNode放在他的next
        }
        this.length++//放到这里的原因是，无论添加之前是否为空，添加之后length都会+1
    }
    LinkedList.prototype.toString = function (){
        //1.获取头部节点
        var current = this.head
        var listString = ""
        //2.获取一个个节点
        while(current){
            listString += current.data + ""
            current = current.next
        }
        return listString
    }
}


//链表的insert插入方法
function LinkedList (){
    //内部的类：节点类
    function Node(data){
        this.data = data
        this.next = null//next值初始化为null，意为尾部
    }
    //必要的头部属性head
    this.head = null
    this.length = 0
    //appent方法(element)
    LinkedList.prototype.append = function (data){
        //1.无论是否空链表，先创建新节点
        var newNode = new Node(data)
        if(this.length == 0){  //2.1如果为空链表，那么newNode就是第一个，把head指向newNode
            this.head = newNode
        }else{  //2.2如果非空，找到最后一个节点，然后把newNode赋给最后一个节点
            var current = this.head  //头部
            while(current.next){
                current = current.next
            }
            current.next = newNode  //此时current已经为最后一个节点了，把newNode放在他的next
        }
        this.length++//放到这里的原因是，无论添加之前是否为空，添加之后length都会+1
    }

    //insert方法(position,element)
    LinkedList.prototype.insert = function (position,data) {
        if(position<0 || position>this.length ) return false  //1.position的越界判断
        var newNode = new Node(data) //2.无论如何，先创建个Node
        //3.判断position是否为第一个
        if(position == 0){
            newNode.next = this.head//this.head——原来第一个节点的地址
            this.head = newNode    
        }
        else{
            var index = 0
            current = this.head
            var previous = null
            while(index++ < position){
                previous = current
                current = current.next
            }
            newNode.next = current
            previous.next = newNode
        }
        this.length++
        return true
    
    }
}
//测试insert
//var list = new LinkedList()
//list.append('aaa')
//list.append('bbb')
//list.append('ccc')
//list.append('ddd')
//list.insert(1,'hhahahahhahahahahhahhahhahha')
//console.log(list)


//链表的get()方法
function LinkedList (){
    //内部的类：节点类
    function Node(data){
        this.data = data
        this.next = null//next值初始化为null，意为尾部
    }
    //必要的头部属性head
    this.head = null
    this.length = 0 

    //get方法
    LinkedList.prototype.get() =function (position) {
        //1.越界判断
        if(position<0 || position >= this.length) return null
        //2.获取对应的data
        var current = this.head
        var index = 0
        while(index++ < position){
            current = current.next
        }
        return current.data
    }
}
//测试get
//var list = new LinkedList()
//list.append('aaa')
//list.append('bbb')
//list.append('ccc')
//list.append('ddd')
//list.insert(1,'hhahahahhahahahahhahhahhahha')
//alert(list.get(1))


//链表的indexOf方法
function LinkedList (){
    //内部的类：节点类
    function Node(data){
        this.data = data
        this.next = null//next值初始化为null，意为尾部
    }
    //必要的头部属性head
    this.head = null
    this.length = 0 

    //indexOf方法(element)，查找不到返回-1
    LinkedList.prototype.indexOf = function (data) {
        //1.定义变量  
        var current = this.head    //默认current指向第一个
        var index = 0   //默认index为0
        //2.开始查找
        //current从第一个向后一个个排查，遇到current.data和参数data一样的，就返回
        while(current){//意思是，当current指向的东西不为空，就执行while循环
            if(current.data == data){
                return index
            }
            else{
                current = current.next
                index++ 
            }
        }
        //3.没找到
        return -1
    }
}
//测试indexOf，成功
//var list = new LinkedList()
//list.append('aaa')
//list.append('bbb')
//list.append('ccc')
//list.append('ddd')
//alert(list.indexOf('ccc'))


//update方法实现
function LinkedList (){
    //内部的类：节点类
    function Node(data){
        this.data = data
        this.next = null//next值初始化为null，意为尾部
    }
    //必要的头部属性head
    this.head = null
    this.length = 0 
    LinkedList.prototype.update = function (position,newData) {
        //1.越界
        if(position<0 || position>=this.length)return false
        //2.查找节点
        var current = this.head
        var index = 0
        while(index++ < position){
            current = current.next
        }
        //3将position位置的data修改为newData
        current.data = newData
        return true
    }
    
}
//var list = new LinkedList()
//list.append('aaa')
//list.append('bbb')
//list.append('ccc')
//list.append('ddd')
//list.update(0,'sadsadw')
//alert(list)
