import { Box, Container, Heading, Stack } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Image } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';



const headingOptions = {
    pos:"absolute",
    left:"50%",
    top:"50%",
    transform:"translate(-50% , -50%)",
    textTransform:"uppercase",
    p:"4",
    size:"4xl",
}



const Home = () => {
  return <Box>

    <MyCarousel />

    <Container minW={'container.xl'} minH={'100vh'} p='16'>
        <Heading textTransform={"uppercase"} padding='2' w={'fit-content'} borderBottom={'2px solid'} margin='auto' >Services</Heading>

        <Stack h={'full'} p={'4'} alignItems={'center'} direction={['column' , 'row']}  >
        <Image src={img5} filter={"hue-rotate(-130deg)"} h={['40','400']} />
        <Text letterSpacing={'widest'} lineHeight={'190%'} p={['4' , '16']} textAlign='center' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut perspiciatis aspernatur nisi mollitia ab. Quas quibusdam necessitatibus vel porro vitae? Autem, consequuntur cupiditate odio recusandae minus eius laboriosam eveniet cum quibusdam numquam. Dolorem illo vero modi ex qui aut quod! Perferendis distinctio totam ea aspernatur vero natus nulla expedita nesciunt quas unde obcaecati eum ullam, hic officiis, voluptates voluptate ipsa possimus ipsam ab nobis ut a? Alias nemo sapiente quisquam recusandae dolorem. Tempore odio sed, inventore omnis sapiente ad earum necessitatibus itaque, commodi temporibus consectetur rem? Sint cumque labore aperiam nulla qui adipisci laborum explicabo tempore minus vitae deleniti optio est dignissimos porro obcaecati placeat ex quibusdam libero blanditiis quam numquam quas atque, perferendis maiores! Soluta voluptatum autem aut aspernatur?</Text>
        </Stack>

    </Container>

  </Box>

};

const MyCarousel = () => (
    <Carousel autoPlay infiniteLoop interval={1000} showStatus={false} showThumbs={false} showArrows={false}>

        <Box w={'full'} h={'100vh'} >
            <Image src={img1} h='full' w={'full'} objectFit='cover' />
            <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
                Watch The Future
            </Heading>
        </Box>
        
        <Box w={'full'} h={'100vh'} >
            <Image src={img2} h='full' w={'full'} objectFit='cover' />
            <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
              Gaming is Future
            </Heading>
        </Box>

        <Box w={'full'} h={'100vh'} >
            <Image src={img3} h='full' w={'full'} objectFit='cover' />
            <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
              Gaming is Life
            </Heading>
        </Box>

        <Box w={'full'} h={'100vh'} >
            <Image src={img4} h='full' w={'full'} objectFit='cover' />
            <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
              Night Life is Dumb
            </Heading>
        </Box>
        
    </Carousel>
)


export default Home
