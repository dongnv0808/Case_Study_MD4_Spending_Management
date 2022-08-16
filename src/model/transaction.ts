import { Schema } from "mongoose";
import { ICategory } from "./category";
import { IWallet } from "./wallet";

interface ITransaction {
    icon: string,
    categoryId: ICategory,
    walletId: IWallet,
    description: string,
    time: string
}

const transactionSchema = new Schema<ITransaction>({
    icon: String,
    categoryId: {
        type: Schema.Types.ObjectId,
        ref: "category"
    },
    walletId: {
        type: Schema.Types.ObjectId,
        ref: "wallet"
    },
    description: String,
    time: String
})