import { model, Schema } from "mongoose"
import { IUser } from "./user"
export interface IWallet {
    icon: string;
    name: string;
    typeMoney: string;
    totalMoney: number;
    idUser?: IUser
}

const walletSchema = new Schema<IWallet>({
    icon: String,
    name: String,
    typeMoney: String,
    totalMoney: Number,
    idUser: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
})

const Wallet = model<IWallet>('Wallet', walletSchema);

export {Wallet};