import { Card, CardBody, CardFooter, Divider, Flex, Stack, StackDivider, Text } from "@chakra-ui/react";
import { TodoContainerProps } from "../interfaces/interfaces";
import TodoItem from "./TodoItem";

export default function TodoContainer({ todoList, completeTodo, removeTodo, updateTodo, editTodo }: TodoContainerProps) {
    return (
        <Flex justify={"center"}>
            <Card width={['90%', '80%', '60%', '30%']} boxShadow={"md"}>
                <CardBody p={"15px"}>
                    <Stack divider={<StackDivider />} spacing='2'>
                        {
                            todoList.length !== 0 ? todoList.map(t => {
                                return <TodoItem editTodo={editTodo} key={t.id} {...t} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo} />
                            })
                                :
                                ""
                        }
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter p={"15px"} justify={"center"} gap={2}>
                    <Text fontSize={{ base: 'xs', md: 'sm', lg: 'md' }}>All: {todoList.length}</Text>
                    <Text fontSize={{ base: 'xs', md: 'sm', lg: 'md' }}>Active: {todoList.filter(i => i.completed === false).length}</Text>
                    <Text fontSize={{ base: 'xs', md: 'sm', lg: 'md' }}>Completed: {todoList.filter(i => i.completed === true).length}</Text>
                </CardFooter>
            </Card>
        </Flex>
    )
}
