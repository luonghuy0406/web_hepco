import React, { useEffect, useState } from 'react';
import { Grid, Card, CardMedia,Container, useTheme, Typography, Box, Dialog, Pagination, CardContent } from '@mui/material';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useTranslation } from 'react-i18next';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import CloseIcon from '@mui/icons-material/Close';
import LazyLoad from 'react-lazyload';
import { Link } from 'react-router-dom';

const Gallery = () => {
    const theme = useTheme()
    const {t} = useTranslation()
    const [tab, setTab] = useState(0);

    const handleChange = (event, newtab) => {
        setTab(newtab);
    };
    
  return (
        <Container 
            maxWidth={'xl'} 
            sx={{
                marginTop:theme.spacing(10),
                marginBottom:theme.spacing(10),
            }} 
        >
            <Typography sx={{marginBottom:theme.spacing(2)}} variant='h4' textAlign={"center"} fontWeight={700} color={theme.color.red}>{t('Thư viện ảnh')}</Typography>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={tab} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label={t("Toàn bộ ảnh")} {...a11yProps(0)} />
                    <Tab label={t("Album ảnh")} {...a11yProps(1)} />
                    </Tabs>
                </Box>
                <CustomTabPanel value={tab} index={0}>
                    <AllPhotos tab={tab}/>
                </CustomTabPanel>
                <CustomTabPanel value={tab} index={1}>
                    <AllAlbums tab={tab}/>
                </CustomTabPanel>
            </Box>
        </Container>
  );
};

export default Gallery;

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    }
}

const AllPhotos  = ({tab}) =>{
    const theme = useTheme()
    
    const {t, i18n} = useTranslation()
    const currentLang = i18n.language == 'en' ? 'en' : ''
    const [open,setOpen] = useState(false)
    const [currentId,setCurrentId] = useState(null)
    const [page, setPage] = useState(1);
    const [images, setImages] = useState([])
    const [totalPages, setTotalPages] = useState([])
    const itemsPerPage = 20;
    // Handle page change
    const handlePageChange = (event, value) => {
        setPage(value);
    }
    useEffect(()=>{
        setPage(1)
    },[tab])

    useEffect(()=>{
        fetch(`${process.env.REACT_APP_HOST}/library/list?p=${page-1}&c=20&id_album=0`)
        .then(response => response.text())
        .then(result => {
            const data = JSON.parse(result).result
            setTotalPages(Math.ceil(data.num_image/itemsPerPage))
            setImages(data.data)
        })
        .catch(error => console.log('error', error));
    },[page])
    return(
        <Box>
            <Grid container spacing={2}>
                {images.map((image, index) => (
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
                                    alt={image?.["des_"+currentLang] || image?.des}
                                    height="auto"
                                    image={`${process.env.REACT_APP_HOST}/read_image/${image.link}`}
                                    sx={{flex: 1, objectFit: 'cover'}}
                                    onError={({ currentTarget }) => {
                                        currentTarget.onerror = null; // prevents looping
                                        currentTarget.src='/assets/no_image2.jpeg'
                                    }}
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
            {
                currentId !== null &&
                <ImageDialog currentId={currentId} images={images} open={open} setCurrentId={setCurrentId} setOpen={setOpen}/>
            }
        </Box>
    )
}

export const ImageDialog = ({currentId,images, open, setCurrentId, setOpen})=>{
    const theme = useTheme()
    const {t, i18n} = useTranslation()
    const currentLang = i18n.language == 'en' ? 'en' : ''
    let image = images[currentId]
    console.log(currentId,image)
    return(
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
                                src={`${process.env.REACT_APP_HOST}/read_image/${image?.link}`}
                                alt={image?.["des_"+currentLang] || image?.des}
                                style={{
                                    maxWidth: '100%',
                                    maxHeight:'700px',
                                    objectFit: 'contain'
                                }}
                                onError={({ currentTarget }) => {
                                    currentTarget.onerror = null; // prevents looping
                                    currentTarget.src='/assets/no_image2.jpeg'
                                }}
                            />
                    </Box>
                </LazyLoad>
                <Box sx={{padding: theme.spacing(3),background: '#00000066',position:'absolute',left:0,right:0,bottom:0}}>
                    <Typography color={theme.color.white} >{image?.["des_"+currentLang] || image?.des}</Typography>
                </Box>
                <Box 
                    onClick={()=>{
                        setOpen(false)
                        setCurrentId(null)
                    }} 
                    sx={{display:'flex',cursor:'pointer', alignItems:'center',justifyContent:'center', width:'30px', color:'#000', height:'30px', borderRadius:'50%', margin:'10px', position:'absolute', right:0, top:0}}
                >
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
                    if(currentId + 1 < images.length){
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
    )
}

const AllAlbums  = ({tab}) =>{
    const theme = useTheme()
    
    const {t, i18n} = useTranslation()
    const currentLang = i18n.language == 'en' ? 'en' : ''
    const [open,setOpen] = useState(false)
    const [currentId,setCurrentId] = useState(null)
    const [page, setPage] = useState(1);
    const [images, setImages] = useState([])
    const [totalPages, setTotalPages] = useState([])
    const itemsPerPage = 20;
    // Handle page change
    const handlePageChange = (event, value) => {
        setPage(value);
    }
    useEffect(()=>{
        setPage(1)
    },[tab])

    useEffect(()=>{
        fetch(`${process.env.REACT_APP_HOST}/album/list?p=${page-1}&c=20&name=`)
        .then(response => response.text())
        .then(result => {
            const data = JSON.parse(result).result
            setTotalPages(Math.ceil(data.num_album/itemsPerPage))
            setImages(data.data)
        })
        .catch(error => console.log('error', error));
    },[page])
    return(
        <Box>
            <Grid container spacing={2}>
                {images.map((image, index) => {
                    const normalizedTitle = (image?.["name_"+currentLang] || image?.name).toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
                    if(image.id_album == 1 || image.id_album == 2){
                        return <></>
                    }
                    return (
                        <Grid key={index} item xs={6} sm={6} md={4} lg={3}>
                            <Link to={`/${t('gioithieu')}/${t('thuvien')}/${normalizedTitle}.${image.id_album}`}> 
                                <Card 
                                    sx={{
                                        width: '100%',
                                        height: 'auto',
                                        aspectRatio: 1,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        position:'relative'
                                    }}
                                >
                                        <CardMedia 
                                            component="img"
                                            alt={image?.["name_"+currentLang] || image?.name}
                                            height="auto"
                                            image={`${process.env.REACT_APP_HOST}/read_image/${image.avatar}`}
                                            sx={{flex: 1,objectFit: 'cover', maxHeight:"200px"}}
                                            onError={({ currentTarget }) => {
                                                currentTarget.onerror = null; // prevents looping
                                                currentTarget.src='/assets/no_image2.jpeg'
                                            }}
                                        />
                                        <CardContent>
                                            <Typography variant='h7' fontWeight={700}>{image?.["name_"+currentLang] || image?.name}</Typography>
                                            <Typography >{`${image.num_image} ${t("items")}`}</Typography>
                                        </CardContent>
                                </Card>
                            </Link>
                        </Grid>
                    )
                })}
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
        </Box>
    )
}
