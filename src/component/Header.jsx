import { Flex } from "@radix-ui/themes";
// import GiveRightToVoteComponent from "./CreatePoolComponent";
// import useIsChairPerson from "../hooks/useIsChairPerson";
import CreatePoolComponent from "./CreatePoolComponent";

export default function Header() {
    // const isChairPerson = useIsChairPerson();
    return (
        <div className="flex justify-between items-center
        ">
            <div>EmaxStackingPool</div>
            <Flex gap={"4"} align={"center"}>
                <CreatePoolComponent />
                <w3m-button />
            </Flex>
        </div>
    );
}
