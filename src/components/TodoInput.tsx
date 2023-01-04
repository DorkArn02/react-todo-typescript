import { Flex, FormControl, FormErrorMessage, IconButton, Input } from "@chakra-ui/react";
import { useState } from "react";
import { FaPlus } from "react-icons/fa"
import { TodoInputProps } from "../interfaces/interfaces";
import { v4 } from "uuid"

export default function TodoInput({ addTodo }: TodoInputProps) {

    const [text, setText] = useState<string>("")
    const [error, setError] = useState<boolean>(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
        setError(false)
    }

    const handleAdd = () => {
        if (text.trim().length === 0) {
            setError(true)
            return
        }
        addTodo({ id: v4(), content: text, completed: false })
        setText("")
    }

    return (
        <Flex mb={10} gap={2.5} flexDir={"row"} justify={"center"}>
            <FormControl isInvalid={error} maxW={250}>
                <Input value={text} onChange={handleChange} type={"text"} placeholder={"Text"} />
                <FormErrorMessage>Todo text is required.</FormErrorMessage>
            </FormControl>
            <IconButton onClick={handleAdd} aria-label="add todo item" icon={<FaPlus />} />
        </Flex >
    )
}
