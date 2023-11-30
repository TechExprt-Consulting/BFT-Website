import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import FormControl from "@mui/material/FormControl";
import emailjs from "emailjs-com";

function ApplyModal({ title }) {
  const [open, setOpen] = React.useState(false);
  const [companyName, setCompanyName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [pdfFile, setPdfFile] = useState(null);
const fileInputRef = React.createRef();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log("Selected File:", file);
    setPdfFile(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting PDF File:", pdfFile);
    // Your emailjs template parameters
    const templateParams = {
      companyName,
      phoneNo,
      attachments: {
        resume: pdfFile,
      },
      title:title
      // Add more parameters if needed
    };

    // Your emailjs service ID and template ID
    const serviceID = "service_zocqpui";
    const templateID = "template_o2i1wkn";
    const userID = "20UFju62he0ixUwo6";

    // Sending email using emailjs
    emailjs
      .send(serviceID, templateID, templateParams, userID)
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
      setCompanyName("");
      setPhoneNo("");
      setPdfFile(null);
    // Close the dialog after submission
    handleClose();
  };

  return (
    <div className="">
      <span onClick={handleClickOpen}>Apply Now</span>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle className="text-bold" style={{ fontSize: "30px", fontWeight: "600" }}>
          {title}
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            name='name'
            label=" Name"
            type="text"
            fullWidth
            variant="standard"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />

          <TextField
            autoFocus
            margin="dense"
            id="name"
            name='phone'
            label="Phone No."
            type="number"
            fullWidth
            variant="standard"
            value={phoneNo}
            onChange={(e) => setPhoneNo(e.target.value)}
          />
          <FormControl>
            <label className="text-secondary mt-4 ">
              <span>Upload CV</span>
            </label>
            <input
              type="file"
              id="pdfInput"
              name='resume'
              accept=".pdf"
              
              onChange={handleFileChange}
            />
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} className="bg-dark text-white">
            Cancel
          </Button>
          <Button onClick={handleSubmit} className="bg-dark text-white">
            Apply
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ApplyModal;
