import { Box, Button, Heading, HStack, Input, Stack, VStack } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';
import { Text } from '@chakra-ui/react';

const Footer = () => {
  return <Box bg={'blackAlpha.900'} minH={'40'} padding='16' color={'white'}>
    <Stack direction={['column','row']}>
    <VStack alignItems={'stretch'} w={'full'} px={'4'}>
        <Heading size={'md'} textTransform='uppercase' textAlign={['center','left']}>
            Follow to get updates
        </Heading>
        <HStack borderBottom={'2px solid white'} p='2'>
            <Input placeholder='Enter E-mail Here...' border={'none'} borderRadius={'none'} outline='none' focusBorderColor='none'/>
            <Button p={'0'} colorScheme={'purple'} variant={'ghost'} borderRadius={'0 20px 20px 0'}>
                <AiOutlineSend size={20}/>
            </Button>
        </HStack>
    </VStack>

    <VStack w={'full'} borderLeft={['none','1px solid white']} borderRight={['none','1px solid white']} >
    <Heading textTransform={'uppercase'} textAlign={'center'} >
        PLay HUB
    </Heading>
    <Text>All rights reserved</Text>
    </VStack>

    <VStack w={'full'} >
    <Heading size={'md'} textTransform='uppercase'>Social Media</Heading>
    <Button variant={'link'} colorScheme='white'>
        <a target={'blank'} href="https://youtube.com/6packprogrammer">Youtube</a>
        <a target={'blank'} href="https://instagram.com/__im.faiyyazzz___">Instagram</a>
        <a target={'blank'} href="https://github.com/MdFaiyyazz10">Github</a>
    </Button>
    </VStack>
    </Stack>
  </Box>
}

export default Footer
