//One to Many (>1000)
const mongoose = require('mongoose');
const {Schema} = mongoose
main()
    .then(()=>console.log("connection successful"))
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

const orderSchema = new Schema({
    item:String,
    price:Number
})



const Order = mongoose.model("Order",orderSchema)


const customerSchema = new Schema({
    name:String,
    orders:[{
        type: Schema.Types.ObjectId, 
        ref:"Order"
    }]
})

const Customer = mongoose.model("Customer",customerSchema)

// const addOrder = async()=>{
//     let result = await Order.insertMany([
//         {item:'chips',price:10},
//         {item:'somasa',price:12},
//         {item:'chocalate',price:40},
//     ])
//     console.log(result)
// }

// addOrder()

const addCustomer = async()=>{
    let cust1 = new Customer({
        name:"Neha",
    })
    let order1 = await Order.findOne({item:'chips'})
    let order2 = await Order.findOne({item:'somasa'})

    cust1.orders.push(order1)
    cust1.orders.push(order2)
    let result = cust1.save()
    console.log(result)
}

addCustomer()