import { Button, Dialog } from "@radix-ui/themes";
// import useUnStake from "../hooks/useUnStake";
import useClaimReward from "../hooks/useClaimStake";

export const ClaimReward = ({ id }) => {
    const unClaimStake = useClaimReward(id); // Initialize useUnStake hook

    const handleUnStake = () => {
        unClaimStake(id); // Call the unStake function with id
    };

    return (
        <Dialog.Root>
            <Dialog.Trigger>
                <Button className="bg-green-400" onClick={handleUnStake}>ClaimReward</Button>
            </Dialog.Trigger>
        </Dialog.Root>
    );
};