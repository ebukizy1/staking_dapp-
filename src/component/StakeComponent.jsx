import { Button, Dialog, Flex, Text, TextField } from "@radix-ui/themes";
import useStakeAmount from "../hooks/useStakeAmount";
import { useState } from "react";

export const StakeComponent = ({ id }) => {
    const [amount, setAmount] = useState('');
    const stake = useStakeAmount(); // Initialize useStakeAmount hook

    const handleStake = () => {
        // Ensure amount is not empty and it's a valid number
        if (amount === '' || isNaN(Number(amount))) {
            console.error('Invalid amount');
            return;
        }
        stake(id, Number(amount)); // Call the stake function with id and amount
    };

    return (
        <Dialog.Root>
            <Dialog.Trigger>
                <Button className="bg-blue-600">Stake Token</Button>
            </Dialog.Trigger>
            <Dialog.Content style={{ maxWidth: 450 }}>
                <Dialog.Title>
                    Stake Token
                </Dialog.Title>
                <Flex direction="column" gap="3">
                    <label>
                        <Text as="div" size="2" mb="1" weight="bold">
                            Enter your amount staked
                        </Text>
                        <TextField.Input
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            placeholder="Enter the amount you want to stake"
                        />
                    </label>
                </Flex>
                <Flex gap="3" mt="4" justify="end">
                    <Dialog.Close>
                        <Button variant="soft" color="gray">
                            Cancel
                        </Button>
                    </Dialog.Close>
                    <Button
                        className="bg-blue-600"
                        onClick={handleStake} // Call handleStake function on button click
                    >
                        Stake
                    </Button>
                </Flex>
            </Dialog.Content>
        </Dialog.Root>
    );
};
