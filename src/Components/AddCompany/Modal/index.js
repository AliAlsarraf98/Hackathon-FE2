import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import classes from "./style.module.scss";
import TextField from "@mui/material/TextField";
import { Controller, useForm } from "react-hook-form";
import { CREATE_COMPANY } from "../../../graphql/mutations";
import { useMutation } from "@apollo/client";

const style = {
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 4,
  p: 4,
};

export default function AddCompanyModal() {
  const [createCompany, { loading, error }] = useMutation(CREATE_COMPANY);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { handleSubmit, control } = useForm();
  const onSubmit = (data) => {
    console.log("data", data);
    createCompany({ variables: data });
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error! {error.message}</h1>;
  }

  return (
    <div>
      <Button onClick={handleOpen}>
        <span className={classes["company-button"]}>Add Company</span>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box sx={style}>
            <Controller
              name={"name"}
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextField
                  onChange={onChange}
                  value={value}
                  label={"Name"}
                  sx={{ margin: 2 }}
                />
              )}
            />
            <Controller
              name={"budget"}
              control={control}
              render={({ field: { onChange, value } }) => (
                <TextField
                  onChange={onChange}
                  value={value}
                  label={"Budget"}
                  sx={{ margin: 2 }}
                />
              )}
            />
            <Button onClick={handleSubmit(onSubmit)}>
              <span className={classes["submit-button"]}>Submit</span>
            </Button>
          </Box>
        </form>
      </Modal>
    </div>
  );
}
