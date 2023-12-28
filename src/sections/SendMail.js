
import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useTranslation } from "react-i18next";
import { Alert, Grid, Snackbar, useTheme } from "@mui/material";

export default function SendMail({ id, pr_name, open,setOpen }){
  const {t} = useTranslation()
  const theme = useTheme()
    
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [sbContent, setSbContent] = useState({type:"info", content:t("Đang gửi email")})
  const handleClose = () => {
      setOpen(false)
};
  const handleCloseSnack = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  const [contentMail,setContentMail] = useState({name:"",email:"",phone:"",subject:"",content:""})


  const handleChangeContent = (key,value)=>{
    const data = { ...contentMail }; // Shallow copy
    data[key] = value;
    setContentMail(data);
  }
  
    const handleSendMail = (data, setContentMail, setSbContent, setOpenSnackbar) => {
        
        let content = `
            Dear Mr/Ms,<br>Some clients has contact in website<br>
            Below is their infomation:<br>
            Name: ${data.name},<br>
            Email: ${data.email},<br>
            Phone number: ${data.phone},<br>
            Message: ${data.content}<br>
            Please reply them asap.<br>regard!!
        `
        let raw = JSON.stringify({
        "content": content
        });
        let myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
        let requestOptions = {
            method: 'POST',
            body: raw,
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(`${process.env.REACT_APP_HOST}/sendmail`, requestOptions)
        .then(response => response.json())
        .then(result => {
            setOpenSnackbar(true)
            if(result.status == 'success'){
                setContentMail({name:"",email:"",phone:"",subject:"",content:""})
            }
            setSbContent({type:result.status, content: result.msg})
            setTimeout(()=>{
                setSbContent({type:"info", content:t("Đang gửi email")})
            },4000)
        })
        .catch(error => {
            setOpenSnackbar(true)
            setSbContent({type:'error', content: error})
            setTimeout(()=>{
                setSbContent({type:"info", content:t("Đang gửi email")})
            },4000)
        });
    }
  
    return (
      <div style={{ float: "right" }}>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle
              sx={{
                backgroundColor: "var(--green1)",
                color: "white",
                textAlign: "center",
              }}
            >
              {t('Gửi câu hỏi')}
            </DialogTitle>
            <DialogContent sx={{ paddingTop: "24px !important" }}>
              
              <Grid container spacing={4}>
                <Grid item xs={6}>
                    <TextField  
                        label={t("Tên")} 
                        fullWidth 
                        variant="outlined" 
                        value = {contentMail["name"] || ""}
                        onChange={(e)=>{handleChangeContent("name",e.target.value)}}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField 
                        label={t("Email")} 
                        fullWidth 
                        variant="outlined"  
                        value = {contentMail["email"] || ""}
                        onChange = {(e)=>{handleChangeContent("email",e.target.value)}}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField 
                        label={t("Số điện thoại")} 
                        fullWidth 
                        variant="outlined"  
                        value = {contentMail["phone"] || ""}
                        onChange={(e)=>{handleChangeContent("phone",e.target.value)}}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField 
                        label={t("Tiêu đề")} 
                        fullWidth 
                        variant="outlined"  
                        value = {contentMail["subject"] || ""}
                        onChange={(e)=>{handleChangeContent("subject",e.target.value)}}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        label={t("Nội dung")}
                        multiline
                        rows={4}
                        fullWidth
                        value = {contentMail["content"] || ""}
                        onChange={(e)=>{handleChangeContent("content",e.target.value)}}
                    />
                </Grid>
            </Grid>
            </DialogContent>
            <DialogActions>
              <Button sx={{color: theme.color.gray1}} onClick={handleClose}>{t('Huỷ')}</Button>
              <Button 
              sx={{color: theme.color.green1}}  
              onClick={()=>{
                setOpenSnackbar(true)
                handleSendMail(contentMail, setContentMail, setSbContent, setOpenSnackbar)
            }}
              >{t('Gửi')}</Button>
            </DialogActions>
        </Dialog>
        {
            sbContent.type == "info" &&
            <Snackbar open={openSnackbar} autoHideDuration={3000} onClose={handleCloseSnack}>
                <Alert severity="info" sx={{ width: '100%' }}>
                    {sbContent.content}
                </Alert>
            </Snackbar>
        }
        {
            sbContent.type == "success" &&
            <Snackbar open={openSnackbar} autoHideDuration={3000} onClose={handleCloseSnack}>
                <Alert severity="success" sx={{ width: '100%' }}>
                    {sbContent.content}
                </Alert>
            </Snackbar>
        }
        {
            sbContent.type == "error" &&
            <Snackbar open={openSnackbar} autoHideDuration={3000} onClose={handleCloseSnack}>
                <Alert severity="error" sx={{ width: '100%' }}>
                    {sbContent.content}
                </Alert>
            </Snackbar>
        }
      </div>
    );
  };

