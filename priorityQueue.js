//优先队列
function PriorityQueue() {
    this.enqueue = function (element) {
      if (this.isEmpty()) {
        collection.push(element);
      } else {
        var added = false;
        for (var i = 0; i < collection.length; i++) {
          if (element[1] < collection[i][1]) {
            collection.splice(i, 0, element);
            added = true;
            break;
          }
        }
        if (!added) {
          collection.push(element);
        }
      }
    }
  }