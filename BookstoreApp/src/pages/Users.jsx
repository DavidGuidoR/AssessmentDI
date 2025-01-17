import React, { useEffect, useState } from "react";
import { IconButton, Tooltip, Button, Box } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import api from "../services/api";
import CustomTable from "../components/CustomTable";
import BackButton from "../components/ArrowBack";
import EditUserModal from "../components/EditUserModal";
import AddIcon from "@mui/icons-material/Add";
import AddUserModal from "../components/AddUserModal";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedUser, setSelectedUser] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  
    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = () => {
        api
          .get("/users")
          .then((response) => {
            setUsers(response.data.users);
            setLoading(false);
          })
          .catch((error) => {
            console.error("Error al cargar los usuarios:", error);
            setLoading(false);
          });
      };

    const handleDelete = (id) => {
        const confirmDelete = window.confirm("¿Estás seguro de que deseas eliminar este usuario?");
        if (confirmDelete) {
          api
            .delete(`/users/${id}`)
            .then(() => {
              alert("Usuario eliminado exitosamente");
              fetchUsers();
            })
            .catch((error) => {
              console.error("Error al eliminar el usuario:", error);
              alert("No se pudo eliminar el usuario");
            });
        }
      };
    
      const handleEdit = (user) => {
        setSelectedUser(user);
        setIsEditModalOpen(true);
      };

    
  
    const columns = [
      { field: "id", headerName: "ID", width: 70 },
      { field: "name", headerName: "Nombre", width: 200 },
      { field: "email", headerName: "Correo Electrónico", width: 300 },
      {
        field: "actions",
        headerName: "Acciones",
        width: 150,
        sortable: false,
        renderCell: (params) => (
          <>
            <Tooltip title="Editar">
              <IconButton onClick={() => handleEdit(params.row)}>
                <EditIcon sx={{ color: "#90caf9" }} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Eliminar">
              <IconButton onClick={() => handleDelete(params.row.id)}>
                <DeleteIcon sx={{ color: "red" }} />
              </IconButton>
            </Tooltip>
          </>
        ),
      },
    ];
  
    return (
      <div style={{ padding: "20px" }}>
        <BackButton/>
        <CustomTable
          title="Lista de Usuarios"
          rows={users}
          columns={columns}
          loading={loading}
        />
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "10px", 
            }}
            >
            <Button
                variant="contained"
                color="primary"
                startIcon={<AddIcon />}
                onClick={() => setIsAddModalOpen(true)}
                sx={{
                backgroundColor: "#90caf9",
                "&:hover": {
                    backgroundColor: "#64b5f6",
                },
                }}
                >
                Agregar Usuario
            </Button>
        </Box>
        {isEditModalOpen && (
        <EditUserModal
          open={isEditModalOpen}
          user={selectedUser}
          onClose={() => setIsEditModalOpen(false)}
          onSave={fetchUsers}
        />
      )}
      {isAddModalOpen && (
        <AddUserModal
          open={isAddModalOpen}
          onClose={() => setIsAddModalOpen(false)}
          onSave={fetchUsers}
        />
      )}
      </div>
    );
  };
  
  export default Users;
  