type User = {
    type: 'user'
    name: string
    age: number
}

type Product = {
    type: 'product'
    id: number
    price: number
}

type Order = {
    type: 'order'
    orderId: string
    amount: number
}

function handleData(data: (User | Product | Order)[]): void {
    for (let i = 0; i < data.length; i++) {
        let item = data[i]

        if (item.type === 'user') {
            console.log(`Hello ${item.name}, you are ${item.age} years old.`)
        } else if (item.type === 'product') {
            console.log(`Product ID: ${item.id}, Price: $${item.price}`)
        } else if (item.type === 'order') {
            console.log(`Order ID: ${item.orderId}, Amount: $${item.amount}`)
        } else {
            console.log("Unknown type")
        }
    }
}

const mixedData: (User | Product | Order)[] = [
    { type: 'user', name: "John", age: 28 },
    { type: 'product', id: 101, price: 49.99 },
    { type: 'order', orderId: "ORD-5523", amount: 129.99 },
    { type: 'user', name: "Sarah", age: 34 },
    { type: 'product', id: 202, price: 19.99 }
]

handleData(mixedData)
