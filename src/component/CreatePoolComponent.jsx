import { Button, Dialog, Flex, Text, TextField } from "@radix-ui/themes";
import { useState } from "react";
// import useGiveRightToVote from "../hooks/useGiveRightToVote";
import useCreatePool from "../hooks/useCreatePool"

const CreatePoolComponent = () => {
    const [rate, setRate] = useState(0);

    const handleCreatePool = useCreatePool(Number(rate));

    return (
        <Dialog.Root>
            <Dialog.Trigger>
                <Button className="bg-blue-600">create pool</Button>
            </Dialog.Trigger>

            <Dialog.Content style={{ maxWidth: 450 }}>
                <Dialog.Title>                   
                     Create a pool
                </Dialog.Title>

                <Flex direction="column" gap="3">
                    <label>
                        <Text as="div" size="2" mb="1" weight="bold">
                            Enter your Reward Rate
                        </Text>
                        <TextField.Input
                            value={rate}
                            onChange={(e) => setRate(e.target.value)}
                            placeholder="Enter your staking rate default 100 token"
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
                        onClick={handleCreatePool}
                    >
                        create pool
                    </Button>
                </Flex>
            </Dialog.Content>
        </Dialog.Root>
    );
};

export default CreatePoolComponent;
