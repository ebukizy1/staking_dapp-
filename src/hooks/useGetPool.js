import { useEffect, useState } from "react";
import { getProposalsContract } from "../constants/contracts";
import { readOnlyProvider } from "../constants/providers";

const useGetPools = () => {
  const [pools, setPools] = useState([]);

  useEffect(() => {
    const fetchPools = async () => {
      try {
        const contract = getProposalsContract(readOnlyProvider);
        let numberOfPools = await contract.id();

        const poolData = [];
        for (let i = 0; i < numberOfPools; i++) {
          poolData.push(await contract.getPoolByID(i));
        }

        setPools(
          poolData.map(pool =>
            Array.from({ length: pool.length }, (_, index) => pool[index])
          )
        );
      } catch (error) {
        console.error("Error fetching pools: ", error);
      }
    };

    fetchPools();
  }, [setPools]); // Add setPools to dependency array

  return pools;
};

export default useGetPools;
