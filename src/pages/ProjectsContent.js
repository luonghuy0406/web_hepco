import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import LazyLoad from 'react-lazyload'
import { Box, Container, Grid, Pagination, TextField, Typography, styled, useTheme } from '@mui/material'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { formatDateTime } from '../../functions'
import ProjectsNewest from './ProjectsNewest'

library.add(fas, faFontAwesome, faPlay)

const FeaturedProjectstWrap = styled(Box)(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.color.white,
  boxShadow:'0 5px 20px rgba(34,34,34,.1)', 
  borderRadius: '10px',
  height:'100%'
}));

const FeaturedProjectstImage = styled(Box)(({ theme, image }) => ({
  background: `url("${image}")`,
  height: 'auto',
  aspectRatio: 1.6,
  width: '100%',
  borderRadius: '10px 10px 0 0',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  position: 'relative'
}));
const BlogButton = styled(Box)(({ theme }) => ({
  a: {
    color: theme.color.black,
    background: 0,
    border: 'none',
    borderRadius: '25px',
    paddingRight: '25px',
    lineHeight: '30px',
    display: 'inline-block',
    transition: 'all .4s ease-in-out 0s',
    position: 'relative',
    fontSize: '16px',
    fontWeight: 600,
    textDecoration: 'none',
    '&:hover': {
      color: theme.color.red,
      '.arrow-projects': {
        color: theme.color.red,
        transform: 'translateX(20%)',
      },
    },
  },
  '.arrow-projects': {
    position: 'absolute',
    top: 0,
    right: 0,
    transition: 'transform 0.5s ease',
    lineHeight: '1.5rem',
  },
}));


export default function ProjectsContent({pageParam}) {
    const theme = useTheme()
    const {t, i18n} = useTranslation()
    const currentLang = i18n.language == 'en' ? 'en' : ''
    const categories = {
        '0': {name: t('Tất cả dự án'), value:'0'},
        '7': {name: t('Dự án đầu tư'), value:'7'},
        '8': {name: t('Hợp tác trong nước'), value:'8'},
        '9': {name: t('Hợp tác nước ngoài'), value:'9'}
    }
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
        const timeOutId = keyword && setTimeout(() => doneTyping(), 300);
        function doneTyping () {
            if(didMount.current){
                fetch(`${process.env.REACT_APP_HOST}/project/list?c=${itemsPerPage}&type_id=${pageParam}&title=${keyword}&p=${page-1}`)
                .then(response => response.text())
                .then(result => {
                    const data = JSON.parse(result).result
                    setTotalPages(Math.ceil(data.num_project/itemsPerPage))
                    setCurrentPageData(data.data)
                })
                .catch(error => console.log('error', error));
            }
        }
        didMount.current = true
        return () => clearTimeout(timeOutId);
      }, [keyword])
    useEffect(()=>{
        fetch(`${process.env.REACT_APP_HOST}/project/list?c=${itemsPerPage}&type_id=${pageParam}&title=${keyword}&p=${page-1}`)
        .then(response => response.text())
        .then(result => {
            const data = JSON.parse(result).result
            setTotalPages(Math.ceil(data.num_project/itemsPerPage))
            setCurrentPageData(data.data)
        })
        .catch(error => console.log('error', error));
    },[pageParam,page])
    
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
                        <Box sx={{padding: theme.spacing(2),backgroundColor: theme.color.white, boxShadow:'0 5px 20px rgba(34,34,34,.1)', borderRadius: '10px', height:'100%', width:'100%'}}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Typography variant="h4" textAlign={"center"} fontWeight={700} sx={{marginBottom: theme.spacing(1)}}>{categories?.[pageParam]?.name}</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography fontWeight={500} sx={{marginBottom: theme.spacing(1)}}>{t("Tìm kiếm")}</Typography>
                                    <TextField placeholder={t("Nhập từ khoá để tìm kiếm")} variant="outlined" value={keyword} fullWidth onChange={(e)=>{handleSearch(e.target.value)}}/>
                                </Grid>
                                {
                                    currentPageData?.length == 0 &&
                                    <Grid item xs={12}>
                                        <Typography textAlign="center" variant='h5'>{t("Nothing to display at the moment")}</Typography>
                                    </Grid>
                                }
                            </Grid>
                        </Box>
                    </Grid>
                    {
                        currentPageData?.length > 0 &&
                        currentPageData.map((projects) => {
                            const normalizedTitle = (projects["name_"+currentLang] || projects.name).toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')
                            return(
                                <Grid key={projects.id_project} item xs={12} sm={6} md={4}>
                                    <Link to={`/${t('duan')}/${normalizedTitle}.${projects.id_project}`}>
                                        <FeaturedProjectstWrap>
                                            <LazyLoad height={200} offset={100}>
                                            <FeaturedProjectstImage image={`${process.env.REACT_APP_HOST}/read_image/${projects.image}`}>
                                            {/* <FeaturedProjectstImage image={`https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg`}> */}
                                            
                                                <Box
                                                    sx={{
                                                        // width: '20%',
                                                        px: theme.spacing(4),
                                                        py:theme.spacing(1),
                                                        background: theme.color.green1,
                                                        // aspectRatio: '0.9',
                                                        position: 'absolute',
                                                        borderRadius: '4px',
                                                        textAlign:'center',
                                                        bottom: '0',
                                                        left: '50%',
                                                        transform: 'translate(-50%, 20px)',
                                                        boxShadow:'0 5px 20px rgba(34,34,34,.1)'
                                                    }}
                                                >
                                                <Typography 
                                                    className='projects-date' 
                                                    fontFamily={theme.typography.MuktaMahee}
                                                    color={theme.color.white}
                                                    fontWeight={700}
                                                >{formatDateTime(projects.cre_date,'%d-%m-%Y')}</Typography>
                                                </Box>
                                            </FeaturedProjectstImage>
                                            </LazyLoad>
                                            <Box
                                                sx={{padding:theme.spacing(4)}}
                                            >
                                            <Grid container spacing={1}>
                                                <Grid item xs={12} pb={1}>
                                                    <Typography variant="h6" color={theme.color.red} fontWeight={700}>{projects["name_"+currentLang] || projects.name}</Typography>
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <Box sx={{display:'flex'}}>
                                                    <Typography paddingRight={1} color={theme.color.gray1} fontWeight={700}>{projects.author}</Typography>
                                                    <Typography paddingRight={1} color={theme.color.gray1} fontWeight={700}>-</Typography>
                                                    <Typography color={theme.color.gray1} fontWeight={700} >{categories?.[projects.type_id]?.name}</Typography>
                                                    </Box>
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <Box className='ck-content' dangerouslySetInnerHTML={{__html:projects["content_"+currentLang] || projects.content}} sx={{overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical'}}>
                                                    </Box>
                                                </Grid>
                                                {/* <Grid item>
                                                    <BlogButton>
                                                    <Link to={`/${t('duan')}/${normalizedTitle}.${projects.id_project}`}>
                                                        <Typography fontWeight={700} lineHeight={'1.5rem'}>{t("Read more")}</Typography>
                                                        <Typography sx={{display:'inline', pl: '5px'}} className='arrow-projects'><FontAwesomeIcon icon="fa-solid fa-arrow-right-long" /></Typography>
                                                    </Link>
                                                    </BlogButton>
                                                </Grid> */}
                                            </Grid>
                                            </Box>
                                        </FeaturedProjectstWrap>
                                    </Link>
                                </Grid>
                            )
                        })
                    }
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
                </Grid>
                
                <Grid item container xs={12} md={3}>
                    <Box sx={{padding: theme.spacing(3),backgroundColor: theme.color.white, boxShadow:'0 5px 20px rgba(34,34,34,.1)', borderRadius: '10px', width:'100%', height: 'fit-content'}}> 
                        <ProjectsNewest/>
                    </Box>
                </Grid>
                
            </Grid>
        </Container>
  )
}
