
import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useTranslation } from "react-i18next";
import { useTheme } from "@mui/material";

export default function SendMail({ id, pr_name, open,setOpen }){
    const {t} = useTranslation()
    const theme = useTheme()
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('')
    const [phone, setPhone] = React.useState('')
    const [content, setContent] = React.useState('')
    const [title, setTitle] = React.useState('')
    const [nameValid, setNameValid] = React.useState(false)
    const [emailValid, setEmailValid] = React.useState(false)
    const [phoneValid, setPhoneValid] = React.useState(false)
  
    const handleClose = () => {
      setOpen(false)
      setOpen('')
      setName('')
      setEmail('')
      setContent('')
      setTitle('')
    };
    const handleSendMail = (id,pr_name) => {
    //   if (name.length > 0 && email.length > 0 && phone.length > 0 && isValidEmail(email)) {
    //     setOpen(false);
    //     setNameValid(false);
    //     setEmailValid(false);
    //     setPhoneValid(false);
        
    //     let data = $("#send-mail-form" + id).serializeArray();
    //     let content = `Dear Mr/Ms,<br>Some clients has interested in ${pr_name} in website<br>Below is their infomation:<br>name: ${data[0].value},<br>email: ${data[1].value},<br>phone number: ${data[2].value},<br>message: ${data[3].value}<br>Please reply them asap.<br>regard!!`
    //     let raw = JSON.stringify({
    //       "content": content
    //     });
    //     let myHeaders = new Headers();
    //         myHeaders.append("Content-Type", "application/json");
    //     let requestOptions = {
    //         method: 'POST',
    //         body: raw,
    //         headers: myHeaders,
    //         redirect: 'follow'
    //     };

    //     fetch(`${process.env.API_HOST}/sendmail`, requestOptions)
    //     .then(response => response.text())
    //     .then(result => console.log(result))
    //     .catch(error => console.log('error', error));
        
    //   } else {
    //     if (name.length == 0) {
    //       setNameValid(true);
    //     } else {
    //       setNameValid(false);
    //     }
    //     if (email.length == 0) {
    //       setEmailValid(true);
    //     } else {
    //       setEmailValid(false);
    //     }
    //     if (phone.length == 0) {
    //       setPhoneValid(true);
    //     } else {
    //       setPhoneValid(false);
    //     }
    //   }
    };
  
    return (
      <div style={{ float: "right" }}>
        <Dialog open={open} onClose={handleClose}>
          <form id={"send-mail-form" + id}>
            <DialogTitle
              sx={{
                backgroundColor: "var(--green1)",
                color: "white",
                textAlign: "center",
              }}
            >
              {t('Contact us')}
            </DialogTitle>
            <DialogContent sx={{ paddingTop: "24px !important" }}>
              <TextField
                required
                autoFocus
                margin="dense"
                name="name"
                label={t('Name')}
                type="text"
                fullWidth
                variant="outlined"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  if (e.target.value.length > 0) {
                    setNameValid(false);
                  } else {
                    setNameValid(true);
                  }
                }}
                error={nameValid}
                helperText={nameValid ? t("Name is not null.") : ""}
              />
              <TextField
                required
                margin="dense"
                name="email"
                label="Email"
                type="email"
                fullWidth
                variant="outlined"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (e.target.value.length > 0) {
                    setEmailValid(false);
                  } else {
                    setEmailValid(true);
                  }
                }}
                error={emailValid || email && !isValidEmail(email)}
                helperText={emailValid ? t("Email is not null.") : email && !isValidEmail(email) ? t("Email is invalid.") : ""}
              />
              <TextField
                required
                margin="dense"
                name="phone"
                label={t("Phone number")}
                type="text"
                fullWidth
                variant="outlined"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                  if (e.target.value.length > 0) {
                    setPhoneValid(false);
                  } else {
                    setPhoneValid(true);
                  }
                }}
                
                error={phoneValid ||  phone && !isValidPhoneNumber(phone)}
                helperText={phoneValid ? t("Phone number is not null.") : phone && !isValidPhoneNumber(phone)? t('Phone is invalid.') : ""}
              />
              <TextField
                margin="dense"
                name="title"
                label={t("Title")}
                type="text"
                fullWidth
                variant="outlined"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value)
                }}
              />
              <TextField
                margin="dense"
                name="content"
                label={t("Content")}
                multiline
                rows={4}
                fullWidth
                variant="outlined"
                pt={1}
                value={content}
                onChange={(e)=>{setContent(e.target.value)}}
              />
            </DialogContent>
            <DialogActions>
              <Button sx={{color: theme.color.gray1}} onClick={handleClose}>{t('CANCEL')}</Button>
              <Button sx={{color: theme.color.green1}}  onClick={()=>{handleSendMail(id,pr_name)}}>{t('SEND')}</Button>
            </DialogActions>
          </form>
        </Dialog>
      </div>
    );
  };


const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
const isValidPhoneNumber = (number) => {
  return /((^(\+84|84|0|0084|[0-9]){1})([0-9])+)$/.test(number);
};