import mongoose,{Schema,Document,Types} from "mongoose";
export interface IFriend extends Document {
    user1: Types.ObjectId;
    user2: Types.ObjectId;
    status: "Freind"| "Req_user1"| "Req_user2";
    createdAt: Date;
    updatedAt: Date;
}
const FriendSchema: Schema<IFriend> = new Schema({
    user1:{
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    user2:{
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    status:{
        type: String,
        enum:["Friend","Req_user1","Req_user2"],
        required:true,
    }
}, { timestamps: true });
const FreindModel = (mongoose.models.Freind as mongoose.Model<IFriend>) || (mongoose.model<IFriend>("Friend",FriendSchema));
export default FreindModel;