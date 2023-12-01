import React, { useState } from 'react';
import { Grid, Card, CardMedia,Container, useTheme, Typography, Box, Dialog, DialogContent, Pagination } from '@mui/material';
import { useTranslation } from 'react-i18next';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import CloseIcon from '@mui/icons-material/Close';
import LazyLoad from 'react-lazyload';

const images = [
  { id: 1,description: 'ác thông tin kháccác thông tin khác tại đây',url: 'https://www.seiu1000.org/sites/main/files/imagecache/hero/main-images/camera_lense_0.jpeg'},
  { id: 2,description: 'Bạn có thể thêm các thác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đây',url: 'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg'},
  { id: 3,description: 'Bạn có thể thêm các thôngn khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đây',url: 'https://statusneo.com/wp-content/uploads/2023/02/MicrosoftTeams-image551ad57e01403f080a9df51975ac40b6efba82553c323a742b42b1c71c1e45f1.jpg'},
  { id: 4,description: 'Bạn có thể thêm các thông tin khác tại đây Bạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đây',url: 'https://www.seiu1000.org/sites/main/files/imagecache/hero/main-images/camera_lense_0.jpeg'},
  { id: 5,description: 'Bạn có thể thêm các thông tin khác tại đây Bạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đây',url: 'https://www.seiu1000.org/sites/main/files/imagecache/hero/main-images/camera_lense_0.jpeg'},
  { id: 6,description: 'Bạn có thể thêm các thông tin khác tại đây Bạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đây',url: 'https://www.techsmith.com/blog/wp-content/uploads/2022/03/resize-image.png'},
  { id: 7,description: 'Bạn có thể thêmđây',url: 'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg'},
  { id: 8,description: 'Bạn có thể thêm c tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đây',url: 'https://statusneo.com/wp-content/uploads/2023/02/MicrosoftTeams-image551ad57e01403f080a9df51975ac40b6efba82553c323a742b42b1c71c1e45f1.jpg'},
  { id: 9,description: 'Bạn có thể thêm các thông tin khác tại đây Bạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đây',url: 'https://www.seiu1000.org/sites/main/files/imagecache/hero/main-images/camera_lense_0.jpeg'},
  { id: 10,description: 'Bạn có thể thêm các thông tin khác tại đây Bạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đây',url: 'https://www.seiu1000.org/sites/main/files/imagecache/hero/main-images/camera_lense_0.jpeg'},
  { id: 11,description: 'Bạn có thể thêm các thông tin khác tại đây Bạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đây',url: 'https://www.techsmith.com/blog/wp-content/uploads/2022/03/resize-image.png'},
  { id: 12,description: 'Bạn có thể thêm các thông tin khác tại đây Bạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đây',url: 'https://www.seiu1000.org/sites/main/files/imagecache/hero/main-images/camera_lense_0.jpeg'},
  { id: 13,description: 'Bạn có thể thêm các thông tin khác tại đây Bạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đây',url: 'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg'},
  { id: 14,description: 'Bạn có thể thêm các thông tin khác tại đây Bạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đây',url: 'https://statusneo.com/wp-content/uploads/2023/02/MicrosoftTeams-image551ad57e01403f080a9df51975ac40b6efba82553c323a742b42b1c71c1e45f1.jpg'},
  { id: 15,description: 'Bạn có thể thêm các thông tin khác tại đây Bạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đây',url: 'https://www.seiu1000.org/sites/main/files/imagecache/hero/main-images/camera_lense_0.jpeg'},
  { id: 16,description: 'Bạn có thể thêm các thông tin khác tại đây Bạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đây',url: 'https://www.seiu1000.org/sites/main/files/imagecache/hero/main-images/camera_lense_0.jpeg'},
  { id: 17,description: 'Bạn có thể thêm các thông tin khác tại đây Bạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đây',url: 'https://www.techsmith.com/blog/wp-content/uploads/2022/03/resize-image.png'},
  { id: 18,description: 'Bạn có thể thêm các thông tin khác tại đây Bạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đây',url: 'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg'},
  { id: 19,description: 'Bạn có thể thêm các thông tin khác tại đây Bạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đây',url: 'https://statusneo.com/wp-content/uploads/2023/02/MicrosoftTeams-image551ad57e01403f080a9df51975ac40b6efba82553c323a742b42b1c71c1e45f1.jpg'},
  { id: 20,description: 'Bạn có thể thêm các thông tin khác tại đây Bạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đây',url: 'https://www.seiu1000.org/sites/main/files/imagecache/hero/main-images/camera_lense_0.jpeg'},
  { id: 21,description: 'Bạn có thể thêm các thông tin khác tại đây Bạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đây',url: 'https://www.seiu1000.org/sites/main/files/imagecache/hero/main-images/camera_lense_0.jpeg'},
  { id: 22,description: 'Bạn có thể thêm các thông tin khác tại đây Bạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đây',url: 'https://www.techsmith.com/blog/wp-content/uploads/2022/03/resize-image.png'},
  { id: 23,description: 'Bạn có thể thêm các thông tin khác tại đây Bạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đây',url: 'https://www.seiu1000.org/sites/main/files/imagecache/hero/main-images/camera_lense_0.jpeg'},
  { id: 24,description: 'Bạn có thể thêm các thông tin khác tại đây Bạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đây',url: 'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg'},
  { id: 25,description: 'Bạn có thể thêm các thông tin khác tại đây Bạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đây',url: 'https://statusneo.com/wp-content/uploads/2023/02/MicrosoftTeams-image551ad57e01403f080a9df51975ac40b6efba82553c323a742b42b1c71c1e45f1.jpg'},
  { id: 26,description: 'Bạn có thể thêm các thông tin khác tại đây Bạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đây',url: 'https://www.seiu1000.org/sites/main/files/imagecache/hero/main-images/camera_lense_0.jpeg'},
  { id: 27,description: 'Bạn có thể thêm các thông tin khác tại đây Bạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đây',url: 'https://www.seiu1000.org/sites/main/files/imagecache/hero/main-images/camera_lense_0.jpeg'},
  { id: 28,description: 'Bạn có thể thêm các thông tin khác tại đây Bạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đây',url: 'https://www.techsmith.com/blog/wp-content/uploads/2022/03/resize-image.png'},
  { id: 29,description: 'Bạn có thể thêm các thông tin khác tại đây Bạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đây',url: 'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg'},
  { id: 30,description: 'Bạn có thể thêm các thông tin khác tại đây Bạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đây',url: 'https://statusneo.com/wp-content/uploads/2023/02/MicrosoftTeams-image551ad57e01403f080a9df51975ac40b6efba82553c323a742b42b1c71c1e45f1.jpg'},
  { id: 31,description: 'Bạn có thể thêm các thông tin khác tại đây Bạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đây',url: 'https://www.seiu1000.org/sites/main/files/imagecache/hero/main-images/camera_lense_0.jpeg'},
  { id: 32,description: 'Bạn có thể thêm các thông tin khác tại đây Bạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đây',url: 'https://www.seiu1000.org/sites/main/files/imagecache/hero/main-images/camera_lense_0.jpeg'},
  { id: 33,description: 'Bạn có thể thêm các thông tin khác tại đây Bạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đâyBạn có thể thêm các thông tin khác tại đây',url: 'https://www.techsmith.com/blog/wp-content/uploads/2022/03/resize-image.png'},
  
  // Thêm các ảnh khác vào đây
];

const Gallery = () => {
    const theme = useTheme()
    const {t} = useTranslation()
    const [open,setOpen] = useState(false)
    const [currentId,setCurrentId] = useState(null)
    const [page, setPage] = useState(1);
    const itemsPerPage = 20; // Change this according to your needs

    // Your data array
    const data = [...images];

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
        <Typography sx={{marginBottom:theme.spacing(4)}} variant='h4' textAlign={"center"} fontWeight={700} color={theme.color.red}>{t('Thư viện ảnh')}</Typography>
        <Grid container spacing={2}>
            {currentPageData.map((image, index) => (
                <Grid key={index} item xs={6} sm={6} md={4} lg={3}>
                    <Card 
                        sx={{
                            width: '100%',
                            height: '100%',
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
                        <Box sx={{padding: theme.spacing(2),background: '#00000066',position:'absolute',left:0,right:0,bottom:0}}>
                            <Typography 
                                sx={{
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis'
                                }} 
                                color={theme.color.white}
                                >{image.description}</Typography>
                        </Box>
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
    </Container>
  );
};

export default Gallery;
