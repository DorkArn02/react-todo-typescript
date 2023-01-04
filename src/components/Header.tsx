import { Flex, Heading, IconButton, Image, keyframes, useColorMode } from '@chakra-ui/react'
import { FaMoon, FaSun } from 'react-icons/fa'
import Logo from "../assets/react.svg"

export default function Header() {

    const { colorMode, toggleColorMode } = useColorMode()

    const animationKeyframes = keyframes` spin
    from {transform:rotate(0deg);}
    to {transform:rotate(360deg);}
  `;

    const animation = `${animationKeyframes} 4s  infinite linear`;

    return (
        <>
            <IconButton position={"absolute"} right={5} borderRadius={"100px"} aria-label='theme-changer' onClick={toggleColorMode} icon={colorMode === "light" ? <FaSun /> : <FaMoon />} />
            <Flex gap={5} mt={5} mb={10} flexDir={"column"} align={"center"} justify={"center"}>
                <Image animation={animation} minW={"75px"} src={Logo} />
                <Heading fontWeight={"thin"} textTransform={"uppercase"}>React to do</Heading>
            </Flex>
        </>
    )
}
