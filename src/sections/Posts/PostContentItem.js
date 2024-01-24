import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import LazyLoad from 'react-lazyload'
import { Box, Grid,  Typography, styled, useTheme } from '@mui/material'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { formatDateTime } from '../../functions'

library.add(fas, faFontAwesome, faPlay)

const FeaturedPosttWrap = styled(Box)(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.color.white,
  boxShadow:'0 5px 20px rgba(34,34,34,.1)', 
  borderRadius: '10px',
  height:'100%'
}));

const FeaturedPosttImage = styled(Box)(({ theme, image }) => ({
  background: `url("${image}")`,
  height: 'auto',
  aspectRatio: 1.6,
  width: '100%',
  borderRadius: '10px 10px 0 0',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  position: 'relative'
}))


export default function PostContentItem({post, categories, typePost, type}){
    const theme = useTheme()
    const {t, i18n} = useTranslation()
    const currentLang = i18n.language == 'en' ? 'en' : ''
    const [imageError, setImageError] = useState(false);

    const handleImageError = () => {
      setImageError(true);
    }
    const normalizedTitle = (post["name_"+currentLang] || post.name).toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')                     
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Link to={`/${type[typePost].path}/${normalizedTitle}.${post['id_'+typePost]}`}>
                <FeaturedPosttWrap>
                    <LazyLoad height={200} offset={100}>
                        <FeaturedPosttImage image={imageError ? '/assets/no_image.jpeg' :`${process.env.REACT_APP_HOST}/read_image/${post.image?.replace(/%2f|%2F/g,'%252F')}`}>
                            <img
                                src={`${process.env.REACT_APP_HOST}/read_image/${post.image?.replace(/%2f|%2F/g,'%252F')}`}
                                alt="Image replace"
                                onError={({ currentTarget }) => {
                                    currentTarget.onerror = null; // prevents looping
                                    currentTarget.src='/assets/no_image.jpeg'
                                    handleImageError()
                                }}
                                style={{ display: 'none' }}
                            />
                                
                            <Box
                                sx={{
                                    px: theme.spacing(4),
                                    py:theme.spacing(1),
                                    background: theme.color.green1,
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
                                    className='post-date' 
                                    fontFamily={theme.typography.MuktaMahee}
                                    color={theme.color.white}
                                    fontWeight={700}
                                >
                                    {formatDateTime(post.cre_date,'%d-%m-%Y')}
                                </Typography>
                            </Box>
                        </FeaturedPosttImage>
                    </LazyLoad>
                    <Box
                        sx={{padding:theme.spacing(4)}}
                    >
                        <Grid container spacing={1}>
                            <Grid item xs={12} pb={1}>
                                <Typography 
                                    variant="h6" 
                                    color={theme.color.red} 
                                    fontWeight={700}
                                >
                                    {post["name_"+currentLang] || post.name}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Box sx={{display:'flex'}}>
                                <Typography paddingRight={1} color={theme.color.gray1} fontWeight={700}>{post.author}</Typography>
                                <Typography paddingRight={1} color={theme.color.gray1} fontWeight={700}>-</Typography>
                                <Typography color={theme.color.gray1} fontWeight={700} >{categories?.[post.type_id]?.name}</Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                <Box 
                                    className='ck-content' 
                                    dangerouslySetInnerHTML={{__html:post["content_"+currentLang] || post.content}} 
                                    sx={{overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical'}}
                                />
                            </Grid>
                        </Grid>
                    </Box>
                </FeaturedPosttWrap>
            </Link>
        </Grid>
    )
}