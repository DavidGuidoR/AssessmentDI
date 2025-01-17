import React, { useState } from "react";
import { Modal, Box, TextField, Button, Typography } from "@mui/material";
import api from "../services/api";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
};

const EditUserModal = ({ open, user, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "El nombre es obligatorio.";
    if (!formData.email) {
      newErrors.email = "El correo electrónico es obligatorio.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Debe ser un correo válido.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    api
      .put(`/users/${user.id}`, formData)
      .then(() => {
        alert("Usuario actualizado exitosamente");
        onSave();
        onClose();
      })
      .catch((error) => {
        console.error("Error al actualizar el usuario:", error);
        const serverErrors = error.response?.data?.errors || [
          { message: "No se pudo actualizar el usuario" },
        ];
        alert(
          serverErrors.map((err) => `• ${err.message}`).join("\n")
        );
      });
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <Typography variant="h6" mb={2}>
          Editar Usuario
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Nombre"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            error={!!errors.name}
            helperText={errors.name}
            sx={{ marginBottom: "15px" }}
          />
          <TextField
            fullWidth
            label="Correo Electrónico"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            error={!!errors.email}
            helperText={errors.email}
            sx={{ marginBottom: "15px" }}
          />
          <Box sx={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
            <Button onClick={onClose} color="error" variant="contained">
              Cancelar
            </Button>
            <Button type="submit" color="primary" variant="contained">
              Guardar
            </Button>
          </Box>
        </form>
      </Box>
    </Modal>
  );
};

export default EditUserModal;
