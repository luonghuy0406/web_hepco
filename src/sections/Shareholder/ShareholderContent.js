import { Autocomplete, Box, Card, CardMedia, Container, Grid, Pagination, TextField, Typography, styled, useTheme } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import LazyLoad from 'react-lazyload'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';

library.add(fas, faFontAwesome, faPlay)

const FeaturedShareholdertWrap = styled(Box)(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.color.white,
  boxShadow:'0 5px 20px rgba(34,34,34,.1)', 
  borderRadius: '10px',
  height:'100%'
}));

const FeaturedShareholdertImage = styled(Box)(({ theme, image }) => ({
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
      '.arrow-shareholder': {
        color: theme.color.red,
        transform: 'translateX(20%)',
      },
    },
  },
  '.arrow-shareholder': {
    position: 'absolute',
    top: 0,
    right: 0,
    transition: 'transform 0.5s ease',
    lineHeight: '1.5rem',
  },
}));

export const shareholder = [
    {date: '29-12-2023',id : '1', author: 'Admin', image: "/assets/thongbao.png", group_id: '1', title :"Nghị quyết và Biên bản Đại hội đồng Cổ đông bất thường năm 2023 và Thông báo thay đổi người đại diện pháp luật Công ty", content: "content socontent socontent socontent socontent socontent so 1"},
    {date: '29-12-2023',id : '2', author: 'Admin', image: "/assets/thongbao.png", group_id: '1', title :"Nghị quyết và Biên bản Đại hội đồng Cổ đông bất thường năm 2023 và Thông báo thay đổi người đại diện pháp luật Công ty", content: "content socontent socontent socontent socontent socontent so 1"},
    {date: '29-12-2023',id : '3', author: 'Admin', image: "/assets/baocao.jpeg", group_id: '2', title :"Báo cáo thường niên niên độ kế toán đã kiểm toán năm 2022", content: "content socontent socontent socontent socontent socontent so 1"},
    {date: '29-12-2023',id : '4', author: 'Admin', image: "/assets/thongbao.png", group_id: '1', title :"Nghị quyết và Biên bản Đại hội đồng Cổ đông bất thường năm 2023 và Thông báo thay đổi người đại diện pháp luật Công ty", content: "content socontent socontent socontent socontent socontent so 1"},
    {date: '29-12-2023',id : '5', author: 'Admin', image: "/assets/thongbao.png", group_id: '1', title :"Nghị quyết và Biên bản Đại hội đồng Cổ đông bất thường năm 2023 và Thông báo thay đổi người đại diện pháp luật Công ty", content: "content socontent socontent socontent socontent socontent so 1"},
    {date: '29-12-2023',id : '31', author: 'Admin', image: "/assets/baocao.jpeg", group_id: '2', title :"Báo cáo thường niên niên độ kế toán đã kiểm toán năm 2022", content: "content socontent socontent socontent socontent socontent so 1"},
    {date: '29-12-2023',id : '32', author: 'Admin', image: "/assets/baocao.jpeg", group_id: '2', title :"Báo cáo thường niên niên độ kế toán đã kiểm toán năm 2022", content: "content socontent socontent socontent socontent socontent so 1"},
    {date: '29-12-2023',id : '33', author: 'Admin', image: "/assets/baocao.jpeg", group_id: '2', title :"Báo cáo thường niên niên độ kế toán đã kiểm toán năm 2022", content: "content socontent socontent socontent socontent socontent so 1"},
    {date: '29-12-2023',id : '6', author: 'Admin', image: "/assets/thongbao.png", group_id: '1', title :"Nghị quyết và Biên bản Đại hội đồng Cổ đông bất thường năm 2023 và Thông báo thay đổi người đại diện pháp luật Công ty", content: "content socontent socontent socontent socontent socontent so 1"},
    {date: '29-12-2023',id : '7', author: 'Admin', image: "/assets/thongbao.png", group_id: '1', title :"Nghị quyết và Biên bản Đại hội đồng Cổ đông bất thường năm 2023 và Thông báo thay đổi người đại diện pháp luật Công ty", content: "content socontent socontent socontent socontent socontent so 1"},
    {date: '29-12-2023',id : '8', author: 'Admin', image: "/assets/thongbao.png", group_id: '1', title :"Nghị quyết và Biên bản Đại hội đồng Cổ đông bất thường năm 2023 và Thông báo thay đổi người đại diện pháp luật Công ty", content: "content socontent socontent socontent socontent socontent so 1"},
    {date: '29-12-2023',id : '9', author: 'Admin', image: "/assets/thongbao.png", group_id: '1', title :"Nghị quyết và Biên bản Đại hội đồng Cổ đông bất thường năm 2023 và Thông báo thay đổi người đại diện pháp luật Công ty", content: "content socontent socontent socontent socontent socontent so 1"},
    {date: '29-12-2023',id : '10', author: 'Admin', image: "/assets/thongbao.png", group_id: '1', title :"Nghị quyết và Biên bản Đại hội đồng Cổ đông bất thường năm 2023 và Thông báo thay đổi người đại diện pháp luật Công ty", content: "content socontent socontent socontent socontent socontent so 1"},
]


export default function ShareholderContent({pageParam}) {
    const theme = useTheme()
    const {t} = useTranslation()
    const [page, setPage] = useState(1);
    const [dataShareholder, setDataShareholder] = useState(shareholder)
    const categories = {
        '0': {name: t('Tất cả tin'), value:'0'},
        '1': {name: t('Thông báo'), value:'1'},
        '2': {name: t('Báo cáo'), value:'2'},
    }
    const [valueFilter, setValueFilter] = useState([categories[pageParam]] || [categories['0']])
    const [keyword, setKeyword] = useState('')
    const shareholderNewest = shareholder.slice(0, 5)
    
    const itemsPerPage = 9; // Change this according to your needs
    useEffect(()=>{
        setValueFilter([categories[pageParam]])
    },[pageParam])


    // Calculate the total number of pages
    const totalPages = Math.ceil(dataShareholder.length / itemsPerPage);

    // Get the current page's data
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = page * itemsPerPage;
    const currentPageData = dataShareholder.slice(startIndex, endIndex);

    // Handle page change
    const handlePageChange = (event, value) => {
        setPage(value);
    };
    const handleSearch = ()=>{
        let value = valueFilter?.map((option)=> option.value)
        let data = []
        if(value?.length > 0 && value.indexOf('0')===-1){
            const shareholderFilter = shareholder.filter((shareholder)=>{
              return value.indexOf(shareholder.group_id) > -1
            })
            data = shareholderFilter
        }else{
            data = shareholder
        }
        if(keyword?.length > 0){
            const shareholderSearch= data.filter((shareholder)=>{
              return slugify(shareholder.title.toLowerCase()).indexOf(slugify(keyword.toLowerCase())) > -1
            })
            data = shareholderSearch
        }
        setDataShareholder(data)
        setPage(1)
    }

    useEffect(()=>{
        handleSearch()
    },[keyword, valueFilter])
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
                                <Grid item xs={12} md={4}>
                                    <Typography fontWeight={500} sx={{marginBottom: theme.spacing(1)}}>{t("Loại tin tức")}</Typography>
                                    <Autocomplete
                                        multiple
                                        options={Object.values(categories)}
                                        getOptionLabel={(option) => option.name}
                                        value={valueFilter}
                                        id="tags-standard-filter-projects"
                                        defaultValue={valueFilter}
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                variant="outlined"
                                                placeholder={t("Chọn loại tin tức để lọc")}
                                            />
                                        )}
                                        onChange={(e,value)=>{
                                            setValueFilter(value)
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} md={8}>
                                    <Typography fontWeight={500} sx={{marginBottom: theme.spacing(1)}}>{t("Tìm kiếm")}</Typography>
                                    <TextField placeholder={t("Nhập từ khoá để tìm kiếm")} variant="outlined" value={keyword} fullWidth onChange={(e)=>{setKeyword(e.target.value)}}/>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                    {
                        
                        currentPageData.map((shareholder) => {
                            const normalizedTitle = shareholder.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
                            return(
                                <Grid key={shareholder.id} item xs={12} sm={6} md={4}>
                                    <Link to={`/${t('codong')}/${normalizedTitle}.${shareholder.id}`}>
                                        <FeaturedShareholdertWrap>
                                            <LazyLoad height={200} offset={100}>
                                            <FeaturedShareholdertImage image={shareholder.image}>
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
                                                    className='shareholder-date' 
                                                    fontFamily={theme.typography.MuktaMahee}
                                                    color={theme.color.white}
                                                    fontWeight={700}
                                                >{shareholder.date}</Typography>
                                                </Box>
                                            </FeaturedShareholdertImage>
                                            </LazyLoad>
                                            <Box
                                                sx={{padding:theme.spacing(4)}}
                                            >
                                            <Grid container spacing={1}>
                                                <Grid item xs={12} pb={1}>
                                                    <Typography variant="h6" color={theme.color.red} fontWeight={700}>{shareholder.title}</Typography>
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <Box sx={{display:'flex'}}>
                                                    <Typography paddingRight={1} color={theme.color.gray1} fontWeight={700}>{shareholder.author}</Typography>
                                                    <Typography paddingRight={1} color={theme.color.gray1} fontWeight={700}>-</Typography>
                                                    <Typography color={theme.color.gray1} fontWeight={700} >{categories?.[shareholder.group_id]?.name}</Typography>
                                                    </Box>
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <Box className='ck-content' dangerouslySetInnerHTML={{__html:shareholder.content}} sx={{overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical'}}>
                                                    {/* <Typography fontWeight={500}>{shareholder.content}</Typography> */}
                                                    </Box>
                                                </Grid>
                                                <Grid item>
                                                    <BlogButton>
                                                    <Link to="#">
                                                        <Typography fontWeight={700} lineHeight={'1.5rem'}>{t("Read more")}</Typography>
                                                        <Typography sx={{display:'inline', pl: '5px'}} className='arrow-shareholder'><FontAwesomeIcon icon="fa-solid fa-arrow-right-long" /></Typography>
                                                    </Link>
                                                    </BlogButton>
                                                </Grid>
                                            </Grid>
                                            </Box>
                                        </FeaturedShareholdertWrap>
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
                        <Typography sx={{marginBottom:theme.spacing(3)}} variant='h5' textAlign={"center"} fontWeight={700} color={theme.color.green1}>{t('Tin tức mới nhất')}</Typography>
                        {
                            shareholderNewest.map((newest)=>{
                                const normalizedTitle = newest.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');

                                return(
                                    <Box key={'shareholder-newest'+newest.id} sx={{paddingBottom: theme.spacing(3)}}>
                                        <Link to={`/${t('codong')}/${normalizedTitle}.${newest.id}`}>
                                            <Grid container spacing={1}>
                                                <Grid item xs={3}>
                                                    <Card 
                                                        sx={{
                                                            width: '100%',
                                                            height: '100%',
                                                            // aspectRatio: '1',
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            position:'relative'
                                                        }}
                                                    >
                                                            <CardMedia 
                                                                component="img"
                                                                alt={newest.title}
                                                                height="auto"
                                                                image={newest.image}
                                                                sx={{flex: 1,
                                                                objectFit: 'cover'}}
                                                            />
                                                    </Card>
                                                </Grid>
                                                <Grid item xs={9}>
                                                    <Box sx={{marginBottom:'5px',overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical'}}>
                                                        <Typography fontWeight={600}>{newest.title}</Typography>
                                                    </Box>
                                                    <Box sx={{display:'flex'}}>
                                                        <AccessTimeFilledIcon fontSize={'13px'} color="disabled"/>
                                                        <Typography sx={{marginLeft:'5px'}} fontWeight={600} fontSize={'13px'} color={theme.color.gray1}>{newest.date}</Typography>
                                                    </Box>
                                                </Grid>
                                            </Grid>
                                        </Link>
                                    </Box>
                                )
                            })
                        }
                    </Box>
                </Grid>
                
            </Grid>
        </Container>
  )
}


function slugify (str) {
	var map = {
		'a' : 'á|à|ả|ã|ạ|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ|À|Á|Ả|Ã|Ạ|Ă|Ắ|Ằ|Ẳ|Ẵ|Ặ|Â|Ấ|Ầ|Ẩ|Ẫ|Ậ',
		'e' : 'é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ|É|È|Ẻ|Ẽ|Ẹ|Ê|Ế|Ề|Ể|Ễ|Ệ',
		'i' : 'í|ì|ỉ|ĩ|ị|î|Í|Ì|Ỉ|Ĩ|Ị',
		'o' : 'ó|ò|ỏ|õ|ọ|ơ|ớ|ờ|ở|ỡ|ợ|ô|ố|ồ|ổ|ỗ|ộ|Ó|Ò|Ỏ|Õ|Ọ|Ơ|Ớ|Ờ|Ở|Ỡ|Ợ|Ô|Ố|Ồ|Ổ|Ỗ|Ộ',
		'u' : 'ú|ù|ủ|ũ|ụ|ư|ừ|ứ|ử|ữ|ự|û|ü|Ú|Ù|Ủ|Ũ|Ụ|Ư|Ứ|Ừ|Ử|Ữ|Ự|Û|Ü',
		'c' : 'ç|Ç',
		'n' : 'ñ|Ñ',
		'd' : 'đ|Đ',
		'y' : 'ý|ỳ|ỷ|ỹ|ỵ|Ý|Ỳ|Ỷ|Ỹ|Ỵ'
	};
	for (var pattern in map) {
		str = str.replace(new RegExp(map[pattern], 'g'), pattern);
	};
	return str;
};
function convertPath(str) {
    return toSlug(str);
  }
  function toSlug(str) {
      // Chuyển hết sang chữ thường
      str = str.toLowerCase();     
   
      // xóa dấu
      str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
      str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
      str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
      str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
      str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
      str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
      str = str.replace(/(đ)/g, 'd');
   
      // Xóa ký tự đặc biệt
      str = str.replace(/([^0-9a-z\.-\s])/g, '');
   
      // Xóa khoảng trắng thay bằng ký tự -
      str = str.replace(/(\s+)/g, '-');
      
      // Xóa ký tự - liên tiếp
      str = str.replace(/-+/g, '-');
   
      // xóa phần dự - ở đầu
      str = str.replace(/^-+/g, '');
   
      // xóa phần dư - ở cuối
      str = str.replace(/-+$/g, '');
   
      // return
      return str;
  }