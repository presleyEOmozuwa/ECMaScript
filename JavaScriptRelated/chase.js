const user = {
    firstname: "Smith",
    lastname: "Blake",
    email: "smithblake@gmail.com",
    getInfo: function (key) {
        const arrKeys = Object.keys(this)
        const foundKey = arrKeys.find((k) => k === key);
        if (!foundKey) {
            return "invalid input"
        }
        return this[key];
    }
}

const paliChecker = (str) => {
    let result = "";
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i]
    }
    const isPali = result === str ? true : false
    return isPali;
}

class NodeValue {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        const newNode = new NodeValue(value);
        this.head = newNode;
        this.tail = this.head;
        this.count = 1;
    }

    push(value) {
        const node = new NodeValue(value);
        if (!this.head ) {
            this.head = node;
            this.tail = this.head;
        }
        else {
            this.tail.next = node;
            this.tail = node;
            this.count++;
        }
    }
}

const ll = new LinkedList("A");
ll.push("B");
ll.push("C");
ll.push("D");


const customer = {
    firstname: "Smith",
    lastname: "Blake"
}






