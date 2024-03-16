import { ethers } from "ethers";
import stakingpoolabi from "./stakingpoolabi.json";
import StakeTokenAbi from "./StakeTokenabi.json"
import EmaxRewardAbi from "./EmaxRewardAbi.json"

export const getProposalsContract = (providerOrSigner) =>
    new ethers.Contract(
        import.meta.env.VITE_staking_contract_address,
        stakingpoolabi,
        providerOrSigner
    );


    export const getStakeTokenContract = (providerOrSigner) =>
    new ethers.Contract(
        import.meta.env.VITE_stake_Token,
        StakeTokenAbi,
        providerOrSigner
    );

    export const getRewardTokenContract = (providerOrSigner) =>
    new ethers.Contract(
        import.meta.env.VITE_stake_Token,
        EmaxRewardAbi,
        providerOrSigner
    );
