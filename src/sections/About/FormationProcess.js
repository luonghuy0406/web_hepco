import React from 'react'
import { Container, Typography, useTheme } from '@mui/material';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useTranslation } from 'react-i18next';

export default function FormationProcess() {
    const theme = useTheme()
    const {t} = useTranslation()
    return (
        <Container maxWidth={'xl'} sx={{marginTop:theme.spacing(7)}}>
            <Typography sx={{marginBottom:theme.spacing(4)}} variant='h4' textAlign={"center"} fontWeight={700} color={theme.color.red}>{t('Quá trình hình thành và phát triển')}</Typography>
            <VerticalTimeline lineColor="var(--green4)">
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'var(--green4)', color: '#000' }}
                    contentArrowStyle={{ borderRight: '7px solid  var(--green4)' }}
                    iconStyle={{ background: 'var(--green4)', color: '#000' }}
                    // icon={<WorkIcon />}
                    date='12/2014'
                >
                    <Typography variant="h5" textAlign={"center"} fontWeight={700} color={theme.color.white} className="vertical-timeline-element-title">26/12/2014</Typography>
                    <Typography fontWeight={500} color={theme.color.white}>
                        Thực hiện quá trình tái cơ cấu nền kinh tế, trong đó có tái cơ cấu doanh nghiệp Nhà nước, chuyển đổi mô hình tăng trưởng, ngày 26/12/2014, UBND tỉnh Thừa Thiên Huế đã ban hành Quyết định số 2728/QĐ-UBND về việc chuyển Công ty TNHH Nhà nước Môi trường và Công trình Đô thị Huế thành Công ty cổ phần.
                    </Typography>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="11/2005"
                    contentStyle={{ background: 'var(--red)', color: '#000' }}
                    contentArrowStyle={{ borderRight: '7px solid  var(--green4)' }}
                    iconStyle={{ background: 'var(--green4)', color: '#000' }}
                >
                    <Typography variant="h5" textAlign={"center"} fontWeight={700} color={theme.color.white}>29/11/2005</Typography>
                     <Typography fontWeight={500} color={theme.color.white}>
                        UBND tỉnh Thừa Thiên Huế đã ban hành Quyết định số 4041/2005/QĐ UBND về việc chuyển Công ty Môi trường và Công trình Đô thị Huế thành Công ty TNHH Nhà nước Môi trường và Công trình Đô thị Huế. 
                    </Typography>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="02/1998"
                    contentStyle={{ background: 'var(--green4)', color: '#000' }}
                    contentArrowStyle={{ borderRight: '7px solid  var(--green4)' }}
                    iconStyle={{ background: 'var(--green4)', color: '#000' }}
                    
                >
                    <Typography variant="h5" textAlign={"center"} fontWeight={700} color={theme.color.white}>06/02/1998</Typography>
                     <Typography fontWeight={500} color={theme.color.white}>
                        UBND tỉnh Thừa Thiên Huế ban hành Quyết định số 183/1998/QĐ UBND thành lập Doanh nghiệp nhà nước Môi trường và Công trình Đô thị Huế
                    </Typography>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2006 - 2008"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    // icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">05/08/1991</h3>
                    <p>
                     UBND thành phố Huế ban hành Quyết định số 501/QĐ-UB thành lập Trung tâm Quản lý Vệ sinh Môi trường Đô thị Huế
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="April 2013"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    // icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">28/12/1985</h3>
                    <p>
                     UBND thành phố Huế ban hành Quyết định số 59/QĐ-UB thành lập Công ty Quản lý Công trình Đô thị Huế
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="November 2012"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    // icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">01/05/1975</h3>
                    <p>
                    Năm 1975, sau khi giải phóng hoàn toàn Miền nam, ngày 01/5/1975 Phòng Quản lý Đô thị và Nhà đất được thành lập, là tiền thân của đơn vị hiện nay
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                    // icon={<StarIcomn />}
                />
            </VerticalTimeline>
        </Container>
    )
}
