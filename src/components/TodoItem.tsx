import { Checkbox, Flex, IconButton, Input, Spacer, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { FaPen, FaSave, FaTrashAlt } from 'react-icons/fa'
import { Todo, TodoItemProps } from '../interfaces/interfaces'

export default function TodoItem({ id, content, completed, edit, updateTodo, completeTodo, removeTodo, editTodo }: Todo & TodoItemProps) {

    const [text, setText] = useState<string>(content)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }

    const handleEdit = () => {
        if (text.trim().length === 0) {
            return
        }
        updateTodo(id, text)
    }

    return (
        <Flex align={"center"} gap={"10px"} >
            <Checkbox defaultChecked={completed} checked={completed} onChange={() => completeTodo(id)} />
            {edit ?
                <>
                    <Input fontSize={{ base: 'xs', md: 'sm', lg: 'md' }} onChange={handleChange} defaultValue={content} type="text" />
                    <Spacer />
                    <IconButton onClick={handleEdit} aria-label='edit item' colorScheme={"blue"} variant={"ghost"} icon={<FaSave />} />
                </>
                :
                <>
                    <Text fontSize={{ base: 'xs', md: 'sm', lg: 'md' }} overflow={"hidden"} textAlign={"justify"} color={completed ? "gray" : ""} style={{ textDecoration: completed ? 'line-through' : "" }}>{content}</Text>
                    <Spacer />
                    <IconButton onClick={() => editTodo(id)} aria-label='edit item' colorScheme={"blue"} variant={"ghost"} icon={<FaPen />} />
                </>
            }

            <IconButton onClick={() => removeTodo(id)} aria-label='delete item' colorScheme={"red"} variant={"ghost"} icon={<FaTrashAlt />} />
        </Flex >
    )
}
