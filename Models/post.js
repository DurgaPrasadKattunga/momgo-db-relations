// one to Squillions (>10000)
const mongoose = require('mongoose');
const {Schema} = mongoose
main()
    .then(()=>console.log("connection successful"))
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

const userSchema = new Schema({
    name:String,
    email:String
})

const postSchema = new Schema({
    content:String,
    likes:Number,
    user:{
        type: Schema.Types.ObjectId, 
        ref:"User"
    }
})

const User = mongoose.model("User",userSchema)

const Post = mongoose.model("Post",postSchema)


// const addData = async()=>{
//     let user1 = await User.findOne({name:"prasad"})

//     let post2 = new Post({
//         content:"Good morning",
//         likes:10,
//     })

//     post2.user = user1;
//     await post2.save()
// }

// addData()

const getData = async()=>{
    let result = await Post.findOne({}).populate("user","username");
    console.log(result)
}

getData()