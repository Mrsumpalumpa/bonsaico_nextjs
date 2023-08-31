import { Schema,model,models } from "mongoose";

interface IUser {
  userName: string;
  email: string;
  image?: string;
}

const UserSchema = new Schema<IUser>({
    email: {
      type: String,
      unique: true, 
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    }
  });
  
  const User = models.User || model("User", UserSchema);
  
  export default User;