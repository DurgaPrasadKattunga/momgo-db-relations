// One to Few
const mongoose = require('mongoose');
const {Schema} = mongoose
main()
    .then(()=>console.log("connection successful"))
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}
const userSchema = new Schema({
    username:String,
    address:[
        {
            _id:false,
            location:String,
            city:String
        }
    ]
})
const User = mongoose.model("User",userSchema)
const addUsers = async ()=>{
    let user1 = new User({
        username:"shradha",
        address:[
            {
                location:"Wall Street",
                city:"Delhi"
            }
        ]
    })
    user1.address.push({
                location:"Komaram Street",
                city:"Tanuku"
            })
    let result =  await user1.save()
    console.log(result)
}

addUsers();