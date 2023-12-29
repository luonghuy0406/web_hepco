import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Container, Grid, Pagination, TextField, Typography,useTheme } from '@mui/material'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import PostNewest from './PostNewest'
import PostContentItem from './PostContentItem'

library.add(fas, faFontAwesome, faPlay)



export default function PostContent({pageParam, typePost, type, categories}) {
    const theme = useTheme()
    const {t, i18n} = useTranslation()
    const currentLang = i18n.language == 'en' ? 'en' : ''
    const [keyword, setKeyword] = useState('')
    const [page, setPage] = useState(1);
    const itemsPerPage = 9;
    const [totalPages,setTotalPages] = useState(0);
    const [currentPageData,setCurrentPageData] = useState([])
    
    const didMount = useRef(false);

    const handlePageChange = (event, value) => {
        setPage(value)
        window.scrollTo(0, 0)
    };
    const handleSearch = (value) => {
        setKeyword(value);
        setPage(1)
    };
    useEffect(() => {
        const timeOutId = setTimeout(() => doneTyping(), 300);
        function doneTyping () {
            if(didMount.current){
                fetch(`${process.env.REACT_APP_HOST}/${typePost}/list?c=${itemsPerPage}&type_id=${pageParam}&title=${keyword}&p=${page-1}&lang=${currentLang || 'vi'}`)
                .then(response => response.text())
                .then(result => {
                    const data = JSON.parse(result).result
                    setTotalPages(Math.ceil(data['num_'+typePost]/itemsPerPage))
                    setCurrentPageData(data.data)
                })
                .catch(error => console.log('error', error));
            }
        }
        didMount.current = true
        return () => clearTimeout(timeOutId);
      }, [keyword])
    useEffect(()=>{
        fetch(`${process.env.REACT_APP_HOST}/${typePost}/list?c=${itemsPerPage}&type_id=${pageParam}&title=${keyword}&p=${page-1}&lang=${currentLang || 'vi'}`)
        .then(response => response.text())
        .then(result => {
            const data = JSON.parse(result).result
            setTotalPages(Math.ceil(data['num_'+typePost]/itemsPerPage))
            setCurrentPageData(data.data)
        })
        .catch(error => console.log('error', error));
    },[pageParam,page,typePost])
    return (
        <Container 
            maxWidth={'xl'} 
            sx={{
                marginTop:theme.spacing(5),
                marginBottom:theme.spacing(10),
            }} 
        >
            <Grid container spacing={2}>
                <Grid item container spacing={3} xs={12} md={9}>
                    <Grid item xs={12}>
                        <Box 
                            sx={{
                                padding: theme.spacing(2),
                                backgroundColor: theme.color.white, 
                                boxShadow:'0 5px 20px rgba(34,34,34,.1)', 
                                borderRadius: '10px', height:'100%', width:'100%'
                            }}
                        >
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Typography 
                                        variant="h4" 
                                        textAlign={"center"} 
                                        fontWeight={700} 
                                        sx={{marginBottom: theme.spacing(1)}}
                                    >
                                        {categories?.[pageParam]?.name}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography 
                                        fontWeight={500} 
                                        sx={{marginBottom: theme.spacing(1)}}
                                    >
                                        {t("Tìm kiếm")}
                                    </Typography>
                                    <TextField 
                                        placeholder={t("Nhập từ khoá để tìm kiếm")} 
                                        variant="outlined" 
                                        value={keyword} 
                                        fullWidth 
                                        onChange={(e)=>{handleSearch(e.target.value)}}
                                    />
                                </Grid>
                                {
                                    currentPageData?.length == 0 &&
                                    <Grid item xs={12}>
                                        <Typography 
                                            textAlign="center" 
                                            variant='h5'
                                        >
                                            {t("Nothing to display at the moment")}
                                        </Typography>
                                    </Grid>
                                }
                            </Grid>
                        </Box>
                    </Grid>
                    {
                        currentPageData?.length > 0 &&
                        currentPageData.map((post) => {
                            return( 
                            <PostContentItem key={post.id_post} post={post} categories={categories} typePost={typePost} type={type}/>
                            )
                        })
                    }
                    <Box 
                        sx={{
                            width:'100%', 
                            marginTop: theme.spacing(10), 
                            display: 'flex', 
                            lignItems: 'center', 
                            justifyContent: 'center'
                        }}
                    >
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
                </Grid>
                
                <Grid item container xs={12} md={3}>
                    <Box 
                        sx={{
                            padding: theme.spacing(3),
                            backgroundColor: theme.color.white, 
                            boxShadow:'0 5px 20px rgba(34,34,34,.1)', 
                            borderRadius: '10px', 
                            width:'100%', 
                            height: 'fit-content'
                        }}
                    > 
                        <PostNewest typePost={typePost} type={type} categories={categories}/>
                    </Box>
                </Grid>
                
            </Grid>
        </Container>
  )
}


