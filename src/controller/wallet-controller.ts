import { Wallet } from "../model/wallet"
import { Request, Response} from "express"

class WalletController {
    showAllWallet = async(req: Request, res: Response) => {
        try{
            let wallets = Wallet.find();
            res.status(200).json()
        }catch(err){
            res.status(404).json()
        }
    }

    addWallet = async(req: Request, res: Response) => {
        let wallet = req.body;
        
    }
}

export default new WalletController();