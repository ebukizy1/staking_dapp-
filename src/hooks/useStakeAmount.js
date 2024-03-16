import { useCallback } from "react";
import { isSupportedChain } from "../utils";
// import { isAddress } from "ethers";
import { getProvider } from "../constants/providers";
import { getProposalsContract } from "../constants/contracts";
import {
    useWeb3ModalAccount,
    useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import { toast } from 'react-toastify';
// import { ethers } from "ethers";



const useStakeAmount = () => {
    const { chainId } = useWeb3ModalAccount();
    const { walletProvider } = useWeb3ModalProvider();
 

    return useCallback(async (id, amount) => {
        if (!isSupportedChain(chainId)) {
            toast.error("Wrong network");
            return;
        }
        const readWriteProvider = getProvider(walletProvider);
        const signer = await readWriteProvider.getSigner();
            
      

        try {

            const contract = getProposalsContract(signer);
            console.log("Contract:", contract);


            const transaction = await contract.stake(id, amount);
            console.log("Transaction: ", transaction);

            const receipt = await transaction.wait();
            console.log("Receipt: ", receipt);

            if (receipt.status) {
                toast.success("Successful!");
            } else {
                toast.error("Failed!");
            }
        } catch (error) {
            console.error("Error: ", error);
        }
    }, [chainId, walletProvider]);
};



export default useStakeAmount ;
