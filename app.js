class Node {
    constructor(value) {
        this.value = value
        this.next = value
    }
}

class LinkList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(val) {
        let newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = this.head
        }
        else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }

    pop() {
        if (this.head === null) return undefined

        let current = this.head
        let newNode = current
        while (current.next) {
            newNode = current
            current = current.next
        }
        this.tail = newNode
        this.tail.next = null
        this.length--
        if (this.length === 0) {
            this.head = null
            this.tail = null
        }
        return current

    }
}

let data = new LinkList()
data.push("saurabh")
data.push("singh")
data.push("mca")
data.pop()
data.pop()
data.pop()
data.pop()
data.pop()


console.log(data)
