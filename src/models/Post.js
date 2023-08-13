import mongoose from 'mongoose'

const { Schema } = mongoose;

const PostSchema = new Schema({
    title: { type: String, required:true  },
    desc: { type: String, required:true  },
    img: { type: String,  required:true  },
    content: { type: String, required:true  },
    username: { type: String,  required:true  },
},{timestamps:true});


const PostModel = mongoose.models.Post || mongoose.model("Post", PostSchema);

export default mongoose.models.Post || mongoose.model("Post", PostSchema);