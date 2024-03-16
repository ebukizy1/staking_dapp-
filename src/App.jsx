import { Box, Container } from "@radix-ui/themes";
import { configureWeb3Modal } from "./connection";
import "@radix-ui/themes/styles.css";
import Header from "./component/Header";
import useGetPools from "./hooks/useGetPool";
import PoolCard from "./component/PoolCard";


configureWeb3Modal();

function App() {
    const pools = useGetPools();
    // const handleVote = useHandleVote();

    const structuredPools = pools.map((item, index) => ({
        id: index,
        totalStakers: item[0],
        totalStakedAmount: item[1],
        rewardReserve: item[2],
        rewardRate: item[3],
      }));
    
      console.log("structuredPools", structuredPools);
   

    return (
        <Container>
            <Header />
            <main className="mt-6">
                <Box mb="4">
                {structuredPools.map((pool) => (
          <PoolCard 
            key={pool.id}
            totalStakers={Number(pool.totalStakers)}
            totalStakedAmount={Number(pool.totalStakedAmount)}
            rewardReserve={Number(pool.rewardReserve)}
            rewardRate={Number(pool.rewardRate)}
          />
        ))}
            
                </Box>

        {/* <Flex wrap={"wrap"} gap={"6"}>
                    {loading ? (
                        <Text>Loading...</Text>
                    ) : proposals.length !== 0 ? (
                        proposals.map((item, index) => (
                            <Proposal
                                key={index}
                                name={item.name}
                                handleVote={() => handleVote(index)}
                                id={index}
                                voteCount={Number(item.voteCount)}
                            />
                        ))
                    ) : (
                        <Text>Could not get proposals!!</Text>
                    )}
                </Flex> */}
            </main>
        </Container>
    );
}

export default App;
