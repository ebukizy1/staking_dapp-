/* eslint-disable react/prop-types */
import {Box, Card, Flex, Text } from "@radix-ui/themes";
import { StakeComponent } from "./StakeComponent";
import { UnStakeComponent } from "./UnStakeComponent";
import { ClaimReward } from "./ClaimReward";

const PoolCard = ({
  id,
  totalStakers,
  totalStakedAmount,
  rewardReserve,
  rewardRate,
  // handleStake,
}) => {


  
  return (
   <>
   
    <Card size="2" style={{ width: 425 }}>


      <Flex gap="" align="center">
        <Box width={"100%"}>
          <Flex justify={"between"} align={"center"}>
            <div>
              <Text as="div" weight="bold">
                totalStakers {totalStakers}
              </Text>
              <Text as="div" weight="bold">
                totalStakedAmount {totalStakedAmount}
              </Text>
              <Text as="div" weight="bold">
                rewardReserve {rewardReserve}
              </Text>
              <Text as="div" weight="bold">
                rewardRate {rewardRate}
              </Text>
            </div>
            
            <StakeComponent id={id}/>
            <UnStakeComponent id={id} />
            <ClaimReward id={id}/>
          </Flex>
        </Box>
      </Flex>
    </Card>

    </>
  );
};

export default PoolCard;


























































































































































