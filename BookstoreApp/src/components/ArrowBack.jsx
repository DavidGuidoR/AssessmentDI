import React from "react";
import { useNavigate } from "react-router-dom";
import { IconButton, Tooltip } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const BackButton = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Tooltip title="Regresar">
      <IconButton
        onClick={handleBack}
        sx={{
          color: "#90caf9",
          position: "absolute",
          top: "10px",
          left: "10px",
          backgroundColor: "rgba(144,202,249,0.1)",
          borderRadius: "50%",
          "&:hover": {
            backgroundColor: "rgba(144,202,249,0.3)",
          },
        }}
      >
        <ArrowBackIcon />
      </IconButton>
    </Tooltip>
  );
};

export default BackButton;
