import mongoose,{Schema,Document,Types} from "mongoose";

export interface IChat extends Document {
    sender: Types.ObjectId;
    receiver: Types.ObjectId;
    message: string;
    mediaUrl ?: string;
    createdAt: Date;
    updatedAt: Date;
    isUpdated ?: boolean;
    isRead ?: boolean;
}
const ChatSchema: Schema<IChat> = new Schema({
    sender:{
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    receiver:{
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    message:{
        type: String,
        required: true
    },
    mediaUrl:{
        type: String,
        default: ""
    },
}, { timestamps: true });
const ChatModel = (mongoose.models.Chat as mongoose.Model<IChat>)||(mongoose.model<IChat>("Chat",ChatSchema));
export default ChatModel;