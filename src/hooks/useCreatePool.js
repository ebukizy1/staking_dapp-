import { useCallback } from "react";
import { isSupportedChain } from "../utils";
// import { isAddress } from "ethers";
import { getProvider } from "../constants/providers";
import { getProposalsContract,getRewardTokenContract } from "../constants/contracts";
import {
    useWeb3ModalAccount,
    useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import { toast } from 'react-toastify';
import { ethers } from "ethers";



const useCreatePool = (rate) => {
    const { chainId } = useWeb3ModalAccount();
    const { walletProvider } = useWeb3ModalProvider();
 

    return useCallback(async () => {
        if (!isSupportedChain(chainId)) {
            toast.error("Wrong network");
            return;
        }
        const readWriteProvider = getProvider(walletProvider);
        const signer = await readWriteProvider.getSigner();
            
      

        try {

            const contract = getProposalsContract(signer);
            console.log("Contract:", contract);


            const rewardToken = getRewardTokenContract(signer);
            console.log("Stake Token:", rewardToken); // Log stake token instance
          

            const fee =  ethers.parseUnits("100", 18)
            const approvalTransaction = await rewardToken.approve(contract.target, fee); // Adjust the amount and parameters as necessary
            await approvalTransaction.wait();

            const transaction = await contract.createPool(rate);
            console.log("Transaction: ", transaction);

            const receipt = await transaction.wait();
            console.log("Receipt: ", receipt);

            if (receipt.status) {
                console.log("Successful!");
            } else {
                console.log("Failed!");
            }
        } catch (error) {
            console.error("Error: ", error);
        }
    }, [chainId, walletProvider, rate]);
};



export default useCreatePool ;
