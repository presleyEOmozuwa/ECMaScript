const arr = [{id: "1", name: "Sofa", price: 1455.35}];
const item = {
    id: "3",
    name: "Mattress",
    price: 1250.45
}
const createProduct = (product) => {
    if (arr && arr.length === 0) {
        arr.push(product);
        console.log("product pushed when array equal to 0");
        console.log(arr);
        return;
    }
    else if (arr && arr.length === 1) {
        if (arr[0].id != product.id) {
            arr.push(product);
            console.log("product pushed when array equal to 1");
            console.log(arr);
        }
        return;
    }
    else if (arr && arr.length > 1) {
        const ischecked = arr.includes(product);
        if(!ischecked){
            arr.push(product);
            console.log("product pushed when array greater than 1");
            console.log(arr);
        }
        return;
    }
}

createProduct(item)







const phone = "+122-872-302-9493";
const password = "Book3400#56@";
const email = "presleyomozuwa123@gmail.com";

const boundary = "grey";
const boundReg = /^gr(a|e)y$/g

const phoneReg = /^\+(\d{1,3})\-(\d{3})\-(\d{3})\-(\d{4})$/g;
const passReg = /^[0-9a-zA-Z#%@&*]{9,12}$/g;
const emailReg = /^[0-9a-zA-Z#%&*]+@[a-zA-Z]{1,5}\.[a-zA-Z]{1,3}$/g
console.log(boundary.match(boundReg));


class Node {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}

const handler = () => {
    const head = new Node(1)
    head.next = new Node(2);

    const curr = head;
    while (curr.next) {
        curr = curr.next;
    }

}



const root = new Node(1);
root.next = new Node(2);
root.next.next = new Node(3)
root.next.next.next = new Node(4)
root.next.next.next.next = new Node(5)
console.log(root);

const array = [1, 2, 3, 4, 5]
const pushEnd = (pos, value) => {

}


// class LinkedList{
//     constructor(){
//         this.head = null;
//         this.tail = null;
//         this.length = 0;
//     }

//     push(value){
//         const node = new Node(value);
//         if(this.length === 0){
//             this.head = node;
//             this.tail = this.head;
//             this.length++;
//             return this;
//         }
//     }
// }

// class LinkedArray{
//     constructor(){
//         const node = new Node(4)
//         this.head = node;
//         this.tail = node;
//         this.length = 1;
//     }

//     pushStart(value){
//         const node = new Node(value);
//         if(this.length === 1){
//             node.next = this.head;
//             this.head = node;
//             this.length++;
//             return this;
//         }
//     }

//     pushEnd(value){
//         const node = new Node(value);
//         if(this.length === 1){
//             this.tail.next = node;
//             this.tail = node;
//             this.length++;
//             return this;
//         }
//     }
// }


// const ll = new LinkedArray();
// console.log(ll.pushEnd(5));


// const numbers = [10, 20, 30, 40];
// const worker = (arr) => {
//     const result = arr.map((num) => num * 3);
//     console.log(result);
// }
// worker(numbers);

// const word = "noon";
// const reverse = (word) => {
//     if (typeof word != "string") {
//         console.log("input must be a string")
//         return;
//     }
//     const flip = word.split("");
//     const output = flip.reverse();
//     const result = output.join("");
//     return result;
// }

// const isPali = (str) => {
//     if (str === reverse(str)) {
//         return true
//     }
//     return false
// }
// console.log(reverse("noon"));
// console.log(isPali("madam"))






// const words = "javascript";
// const transform = words.split("");
// const filter = transform.filter((ch) => {
//     if (ch != 'a') {
//         return true
//     }
//     return false;
// })
// const back = filter.join("")
// console.log(back);






// const options = {
//     weekday: "long",
//     month: "long",
//     day: "numeric",
//     year: "numeric"
// }

// const date = new Date();
// const time = date.toLocaleTimeString();
// const customeTime = "10:06:25 PM";

// const timeprocessor = (strtime) => {
//     if (strtime.length === 10) {
//         const grabTime = strtime.substring(0, 4);
//         const grabZone = strtime.substring(8)
//         console.log(`${grabTime} ${grabZone}`);
//         return;
//     }
//     else if (strtime.length === 11) {
//         const grabTime = strtime.substring(0, 5);
//         const grabZone = strtime.substring(9)
//         console.log(`${grabTime} ${grabZone}`);
//         return;
//     }
// }

// console.log(date.toLocaleDateString("en-US", options));
// timeprocessor(time);






// const products = [{ id: 1, name: "Sofa", price: 100, qty: 2 }, { id: 2, name: "Mattress", price: 150, qty: 3 }, { id: 3, name: "Laptop", price: 250, qty: 1 }, { id: 4, name: "Sneakers", price: 120, qty: 4 }]

// const filtered = products.filter((p) => p.qty > 2);
// // console.log(filtered);

// const golf = document.getElementById("golf")
// const baseball = document.getElementById("baseball")
// const bball = document.getElementById("basketball")



// golf.addEventListener('click', (e) => {
//     console.log("Golf :", e.target.checked);
// })
// baseball.addEventListener('click', (e) => {
//     console.log("Baseball :", e.target.checked);
// })
// bball.addEventListener('click', (e) => {
//     console.log("Basketball :", e.target.checked);
// })

// const array = [2, 4, 1, 2, 5, 3, 6, 9, 4, 11]

// const distinct = (array) => {
//     const emp = [];
//     for(let i = 0; i < array.length; i ++){
//         if(!emp.includes(array[i])){
//             emp.push(array[i])
//         }
//     }
//     return emp;
// }

// const set = new Set(array);
// const result = [...set];
// console.log(result);




// // console.log(distinct(array));

// const day = "Wednesday";

// const work = () => {
//     if(day === "Monday"){
//         console.log("busy day");
//     }
//     else if(day === "Friday"){
//         console.log("club nignts after work");
//     }
//     else{
//         console.log("common");
//     }
// }
// work();

// const data = "";
// const handler = (data) => data;

// if(!data){
//     console.log("no value found");
// }

// const value = handler(data);
// console.log("value found");
// console.log(value);


