import { Box, Container } from "@radix-ui/themes";
import { configureWeb3Modal } from "./connection";
import "@radix-ui/themes/styles.css";
import Header from "./component/Header";
import useGetPools from "./hooks/useGetPool";
import PoolCard from "./component/PoolCard";
// import { useState } from "react";


configureWeb3Modal();

function App() {
    const pools = useGetPools();
    // const handleVote = useHandleVote();
    // const [isOpen,setIsOpen] = useState(false)

    const structuredPools = pools.map((item, index) => ({
        id: index,
        totalStakers: item[0],
        totalStakedAmount: item[1],
        rewardReserve: item[2],
        rewardRate: item[3],
      }));
    
      console.log("structuredPools", structuredPools);
   
    // const handleStake = ()=>{
    //     setIsOpen(true)
    // }
    return (

        <Container>
            
            <Header />
            <main className="mt-6">
                <Box mb="4">
                {structuredPools.map((pool) => (
          <PoolCard 
            key={pool.id}
            id={pool.id}
            totalStakers={Number(pool.totalStakers)}
            totalStakedAmount={Number(pool.totalStakedAmount)}
            rewardReserve={Number(pool.rewardReserve)}
            rewardRate={Number(pool.rewardRate)}      
          />
        ))}
            </Box>
            </main>
        </Container>
    );
}

export default App;
