import React, { useEffect, useState } from 'react';
import { Grid, Card, CardMedia,Container, useTheme, Typography, Box, Dialog, Pagination } from '@mui/material';
import { useTranslation } from 'react-i18next';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import CloseIcon from '@mui/icons-material/Close';
import LazyLoad from 'react-lazyload';
import { useParams } from 'react-router-dom';
import { ImageDialog } from './Gallery';
import { formatDateTime } from '../../functions';


const AlbumItems = () => {
    const theme = useTheme()
    const {t, i18n} = useTranslation()
    const currentLang = i18n.language == 'en' ? 'en' : ''
    const [open,setOpen] = useState(false)
    const [currentId,setCurrentId] = useState(null)
    const [albumDetail,setAlbumDetail] = useState({})
    const { threadId } = useParams();
    const lastDotIndex = threadId.lastIndexOf('.');
    const idPart = threadId.substring(lastDotIndex + 1)
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
        fetch(`${process.env.REACT_APP_HOST}/album/detail/${idPart}`)
        .then(response => response.text())
        .then(result => {
            const data = JSON.parse(result).result.album
            setAlbumDetail(data)
        })
        .catch(error => console.log('error', error));
    },[idPart])

    useEffect(()=>{
        fetch(`${process.env.REACT_APP_HOST}/library/list?p=${page-1}&c=20&id_album=${idPart}`)
        .then(response => response.text())
        .then(result => {
            const data = JSON.parse(result).result
            setTotalPages(Math.ceil(data.num_image/itemsPerPage))
            setImages(data.data)
        })
        .catch(error => console.log('error', error));
    },[page, idPart])

    if(!albumDetail){
        return <></>
    }
    return (
            <Container 
                maxWidth={'xl'} 
                sx={{
                    marginTop:theme.spacing(10),
                    marginBottom:theme.spacing(10),
                }} 
            >
                <Typography  variant='h5' textAlign={"center"} fontWeight={700} >{albumDetail?.["name_"+currentLang] || albumDetail?.name}</Typography>
                <Typography sx={{marginBottom:theme.spacing(4)}} textAlign={"center"} fontWeight={600} fontSize={'13px'} color={theme.color.gray1}>{`${formatDateTime(albumDetail?.cre_date, '%d-%m-%Y')} - ${images?.length} ${t("items")}`}</Typography>
                <Typography sx={{marginBottom:theme.spacing(4), padding:theme.spacing(4)}} >{albumDetail?.["des_"+currentLang] || albumDetail?.des}</Typography>
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
            </Container>
    )
}

export default AlbumItems