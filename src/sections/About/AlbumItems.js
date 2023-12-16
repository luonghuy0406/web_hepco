import React, { useState } from 'react';
import { Grid, Card, CardMedia,Container, useTheme, Typography, Box, Dialog, DialogContent, Pagination, CardContent } from '@mui/material';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useTranslation } from 'react-i18next';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import CloseIcon from '@mui/icons-material/Close';
import LazyLoad from 'react-lazyload';
import { Link, useParams } from 'react-router-dom';

const images = [
  { album_id: '1',id: 1,description: 'ác thông tin kháccác thông tin khác tại đây',url: 'https://www.seiu1000.org/sites/main/files/imagecache/hero/main-images/camera_lense_0.jpeg'},
  { album_id: '1a',id: 2,description: 'Bạn có thể thêm các thác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đây',url: 'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg'},
  { album_id: '1a',id: 3,description: 'Bạn có thể thêm các thôngn khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đây',url: 'https://statusneo.com/wp-content/uploads/2023/02/MicrosoftTeams-image551ad57e01403f080a9df51975ac40b6efba82553c323a742b42b1c71c1e45f1.jpg'},
  { album_id: '1a',id: 4,description: 'Bạn có thể thêm các thông tin khác tại đây Bạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đây',url: 'https://www.seiu1000.org/sites/main/files/imagecache/hero/main-images/camera_lense_0.jpeg'},
  { album_id: '1a',id: 5,description: 'Bạn có thể thêm các thông tin khác tại đây Bạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đây',url: 'https://www.seiu1000.org/sites/main/files/imagecache/hero/main-images/camera_lense_0.jpeg'},
  { album_id: '1a',id: 6,description: 'Bạn có thể thêm các thông tin khác tại đây Bạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đây',url: 'https://www.techsmith.com/blog/wp-content/uploads/2022/03/resize-image.png'},
  { album_id: '1',id: 7,description: 'Bạn có thể thêmđây',url: 'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg'},
  { album_id: '1b',id: 8,description: 'Bạn có thể thêm c tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đây',url: 'https://statusneo.com/wp-content/uploads/2023/02/MicrosoftTeams-image551ad57e01403f080a9df51975ac40b6efba82553c323a742b42b1c71c1e45f1.jpg'},
  { album_id: '1b',id: 9,description: 'Bạn có thể thêm các thông tin khác tại đây Bạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đây',url: 'https://www.seiu1000.org/sites/main/files/imagecache/hero/main-images/camera_lense_0.jpeg'},
  { album_id: '1b',id: 10,description: 'Bạn có thể thêm các thông tin khác tại đây Bạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đây',url: 'https://www.seiu1000.org/sites/main/files/imagecache/hero/main-images/camera_lense_0.jpeg'},
  { album_id: '1b',id: 11,description: 'Bạn có thể thêm các thông tin khác tại đây Bạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đây',url: 'https://www.techsmith.com/blog/wp-content/uploads/2022/03/resize-image.png'},
  { album_id: '1b',id: 12,description: 'Bạn có thể thêm các thông tin khác tại đây Bạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đây',url: 'https://www.seiu1000.org/sites/main/files/imagecache/hero/main-images/camera_lense_0.jpeg'},
  { album_id: '1',id: 13,description: 'Bạn có thể thêm các thông tin khác tại đây Bạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đây',url: 'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg'},
  { album_id: '1c',id: 14,description: 'Bạn có thể thêm các thông tin khác tại đây Bạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đây',url: 'https://statusneo.com/wp-content/uploads/2023/02/MicrosoftTeams-image551ad57e01403f080a9df51975ac40b6efba82553c323a742b42b1c71c1e45f1.jpg'},
  { album_id: '1c',id: 15,description: 'Bạn có thể thêm các thông tin khác tại đây Bạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đây',url: 'https://www.seiu1000.org/sites/main/files/imagecache/hero/main-images/camera_lense_0.jpeg'},
  { album_id: '1c',id: 16,description: 'Bạn có thể thêm các thông tin khác tại đây Bạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đây',url: 'https://www.seiu1000.org/sites/main/files/imagecache/hero/main-images/camera_lense_0.jpeg'},
  { album_id: '1c',id: 17,description: 'Bạn có thể thêm các thông tin khác tại đây Bạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đây',url: 'https://www.techsmith.com/blog/wp-content/uploads/2022/03/resize-image.png'},
  { album_id: '1c',id: 18,description: 'Bạn có thể thêm các thông tin khác tại đây Bạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đây',url: 'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg'},
  { album_id: '1c',id: 19,description: 'Bạn có thể thêm các thông tin khác tại đây Bạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đây',url: 'https://statusneo.com/wp-content/uploads/2023/02/MicrosoftTeams-image551ad57e01403f080a9df51975ac40b6efba82553c323a742b42b1c71c1e45f1.jpg'},
  { album_id: '1c',id: 20,description: 'Bạn có thể thêm các thông tin khác tại đây Bạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đây',url: 'https://www.seiu1000.org/sites/main/files/imagecache/hero/main-images/camera_lense_0.jpeg'},
  { album_id: '1',id: 21,description: 'Bạn có thể thêm các thông tin khác tại đây Bạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đây',url: 'https://www.seiu1000.org/sites/main/files/imagecache/hero/main-images/camera_lense_0.jpeg'},
  { album_id: '1',id: 22,description: 'Bạn có thể thêm các thông tin khác tại đây Bạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đây',url: 'https://www.techsmith.com/blog/wp-content/uploads/2022/03/resize-image.png'},
  { album_id: '1',id: 23,description: 'Bạn có thể thêm các thông tin khác tại đây Bạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đây',url: 'https://www.seiu1000.org/sites/main/files/imagecache/hero/main-images/camera_lense_0.jpeg'},
  { album_id: '1',id: 24,description: 'Bạn có thể thêm các thông tin khác tại đây Bạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đây',url: 'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg'},
  { album_id: '1',id: 25,description: 'Bạn có thể thêm các thông tin khác tại đây Bạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đây',url: 'https://statusneo.com/wp-content/uploads/2023/02/MicrosoftTeams-image551ad57e01403f080a9df51975ac40b6efba82553c323a742b42b1c71c1e45f1.jpg'},
  { album_id: '1',id: 26,description: 'Bạn có thể thêm các thông tin khác tại đây Bạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đây',url: 'https://www.seiu1000.org/sites/main/files/imagecache/hero/main-images/camera_lense_0.jpeg'},
  { album_id: '1',id: 27,description: 'Bạn có thể thêm các thông tin khác tại đây Bạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đây',url: 'https://www.seiu1000.org/sites/main/files/imagecache/hero/main-images/camera_lense_0.jpeg'},
  { album_id: '1',id: 28,description: 'Bạn có thể thêm các thông tin khác tại đây Bạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đây',url: 'https://www.techsmith.com/blog/wp-content/uploads/2022/03/resize-image.png'},
  { album_id: '1',id: 29,description: 'Bạn có thể thêm các thông tin khác tại đây Bạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đây',url: 'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg'},
  { album_id: '1',id: 30,description: 'Bạn có thể thêm các thông tin khác tại đây Bạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đây',url: 'https://statusneo.com/wp-content/uploads/2023/02/MicrosoftTeams-image551ad57e01403f080a9df51975ac40b6efba82553c323a742b42b1c71c1e45f1.jpg'},
  { album_id: '1',id: 31,description: 'Bạn có thể thêm các thông tin khác tại đây Bạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đây',url: 'https://www.seiu1000.org/sites/main/files/imagecache/hero/main-images/camera_lense_0.jpeg'},
  { album_id: '1',id: 32,description: 'Bạn có thể thêm các thông tin khác tại đây Bạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đây',url: 'https://www.seiu1000.org/sites/main/files/imagecache/hero/main-images/camera_lense_0.jpeg'},
  { album_id: '1',id: 33,description: 'Bạn có thể thêm các thông tin khác tại đây Bạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đây',url: 'https://www.techsmith.com/blog/wp-content/uploads/2022/03/resize-image.png'},
  
  // Thêm các ảnh khác vào đây
];
const album =[
    {id: '1',name:'Không thuộc album nào',count:120,url:'https://www.seiu1000.org/sites/main/files/imagecache/hero/main-images/camera_lense_0.jpeg'},
    {id: '1a',name:'Album 1a',count:12 ,url:'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg'},
   {id: '1b',name:'Album 1b',count:40 ,url:'https://www.seiu1000.org/sites/main/files/imagecache/hero/main-images/camera_lense_0.jpeg'},
    {id: '1c',name:'Album 1c',count:33 ,url:'https://www.seiu1000.org/sites/main/files/imagecache/hero/main-images/camera_lense_0.jpeg'},
    {id: '1d',name:'Album 1a',count:12 ,url:'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg'},
    {id: '1e',name:'Album 1b',count:40 ,url:'https://www.seiu1000.org/sites/main/files/imagecache/hero/main-images/camera_lense_0.jpeg'},
     {id: '1f',name:'Album 1c',count:33 ,url:'https://www.seiu1000.org/sites/main/files/imagecache/hero/main-images/camera_lense_0.jpeg'},
     {id: '2a',name:'Album 2a',count:12 ,url:'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg'},
     {id: '2b',name:'Album 2b',count:40 ,url:'https://www.seiu1000.org/sites/main/files/imagecache/hero/main-images/camera_lense_0.jpeg'},
      {id: '2c',name:'Album 2c',count:33 ,url:'https://www.seiu1000.org/sites/main/files/imagecache/hero/main-images/camera_lense_0.jpeg'},
      {id: '2d',name:'Album 2a',count:12 ,url:'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg'},
      {id: '2e',name:'Album 2b',count:40 ,url:'https://www.seiu1000.org/sites/main/files/imagecache/hero/main-images/camera_lense_0.jpeg'},
       {id: '2f',name:'Album 2c',count:33 ,url:'https://www.seiu1000.org/sites/main/files/imagecache/hero/main-images/camera_lense_0.jpeg'}
   
]

const AlbumItems = () => {
    const theme = useTheme()
    const {t} = useTranslation()

    const [open,setOpen] = useState(false)
    const [currentId,setCurrentId] = useState(null)
    const { threadId } = useParams();
    const lastDotIndex = threadId.lastIndexOf('.');
    const idPart = threadId.substring(lastDotIndex + 1);
    const albumCurrent = album.filter((item)=>item.id == idPart)[0]
    const currentImage = images.filter((image)=> image.album_id == albumCurrent.id)
    const [page, setPage] = useState(1);
    const itemsPerPage = 20; // Change this according to your needs

    // Your data array
    const data = [...currentImage];

    // Calculate the total number of pages
    const totalPages = Math.ceil(data.length / itemsPerPage);

    // Get the current page's data
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = page * itemsPerPage;
    const currentPageData = data.slice(startIndex, endIndex);

    // Handle page change
    const handlePageChange = (event, value) => {
        setPage(value);
    };
    
  return (
        <Container 
            maxWidth={'xl'} 
            sx={{
                marginTop:theme.spacing(10),
                marginBottom:theme.spacing(10),
            }} 
        >
            <Typography sx={{marginBottom:theme.spacing(4)}} variant='h5' textAlign={"center"} fontWeight={700} >{albumCurrent.name}</Typography>
            <Box sx={{ width: '100%' }}>
            <Grid container spacing={2}>
                {currentPageData.map((image, index) => (
                    <Grid key={index} item xs={6} sm={6} md={4} lg={3}>
                        <Card 
                            sx={{
                                width: '100%',
                                height: 'auto',
                                aspectRatio: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                position:'relative'
                            }}
                            onClick={()=>{
                                setOpen(true)
                                setCurrentId(index)
                            }}
                        >
                                <CardMedia 
                                    component="img"
                                    alt={`Image ${index + 1}`}
                                    height="auto"
                                    image={image.url}
                                    sx={{flex: 1,
                                    objectFit: 'cover'}}
                                />
                        </Card>
                    </Grid>
                ))}
            </Grid>

            <Box sx={{width:'100%', marginTop: theme.spacing(10), display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <Pagination
                    variant="outlined" 
                    color="primary"
                    count={totalPages}
                    page={page}
                    onChange={handlePageChange}
                    boundaryCount={1} 
                    siblingCount={1}
                />
            </Box>
            <Dialog 
                open={open} 
                onClose={()=>{
                    setOpen(false)
                    setCurrentId(null)
                }}
                maxWidth="md"
                fullWidth
                
            >
                <Box sx={{padding: theme.spacing(2),position:'relative'}} className='wrap-image-dialog'>
                    <LazyLoad height={200} offset={100}>
                        <Box 
                            sx={{
                                textAlign: 'center',
                                width:'100%',
                                overflow:'hidden',
                                height:'700px',
                                display:'flex',
                                alignItems:'center', 
                                justifyContent:'center'
                            }}
                        >
                                <img
                                    src={currentPageData?.[currentId]?.url}
                                    alt="Fullscreen"
                                    style={{
                                        maxWidth: '100%',
                                        // height: 'auto',
                                        maxHeight:'700px',
                                        objectFit: 'contain'
                                    }}
                                />
                        </Box>
                    </LazyLoad>
                    <Box sx={{padding: theme.spacing(3),background: '#00000066',position:'absolute',left:0,right:0,bottom:0}}>
                        <Typography 
                            color={theme.color.white}
                            >{currentPageData?.[currentId]?.description}</Typography>
                    </Box>
                    <Box onClick={()=>{
                        setOpen(false)
                        setCurrentId(null)
                    }} sx={{display:'flex',cursor:'pointer', alignItems:'center',justifyContent:'center', width:'30px', color:'#000', height:'30px', borderRadius:'50%', margin:'10px', position:'absolute', right:0, top:0}}>
                        <CloseIcon/>
                    </Box>
                    <Box 
                        className='button-next-image'
                        onClick={()=>{
                            if(currentId - 1 >= 0){
                                setCurrentId(currentId - 1 )
                            }
                        }}
                        sx={{
                            transition: 'all .4s ease-in-out 0s',
                            opacity:'.3', 
                            marginLeft:'10px', 
                            display:'flex',
                            cursor:'pointer', 
                            alignItems:'center',
                            justifyContent:'center',
                            width:'60px', 
                            color:'#fff', 
                            height:'60px', 
                            borderRadius:'50%', 
                            background: '#00000066', 
                            position:'absolute', 
                            left:0, 
                            bottom:'50%'
                        }}
                        >
                        <KeyboardArrowLeftIcon/>
                    </Box>
                    <Box 
                    className='button-next-image'
                    onClick={()=>{
                        if(currentId + 1 <= images.length){
                            setCurrentId(currentId + 1 )
                        }
                    }}
                    sx={{
                        transition: 'all .4s ease-in-out 0s',
                        opacity:'.3', 
                        marginRight:'10px', 
                        display:'flex',
                        cursor:'pointer', 
                        alignItems:'center',
                        justifyContent:'center',
                        width:'60px', 
                        color:'#fff', 
                        height:'60px', 
                        borderRadius:'50%', 
                        background: '#00000066', 
                        position:'absolute', 
                        right:0, 
                        bottom:'50%'
                        }}
                    >
                        <KeyboardArrowRightIcon/>
                    </Box>
                </Box>
            </Dialog>
            </Box>
        </Container>
  );
};

export default AlbumItems;