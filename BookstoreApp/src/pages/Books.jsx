import React, { useEffect, useState } from "react";
import { Box, Typography, Paper } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import api from "../services/api";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/books")
      .then((response) => {
        setBooks(response.data.books);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al cargar los libros:", error);
        setLoading(false);
      });
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "title", headerName: "Título", width: 250 },
    { field: "author", headerName: "Autor", width: 200 },
    { field: "isbn", headerName: "ISBN", width: 150 },
    {
      field: 'releaseDate',
      headerName: 'Fecha de Publicación',
      width: 180,
      valueGetter: (params) => {
        const date = params ? new Date(params) : null;
        return date ? date.toISOString().split('T')[0] : 'Fecha no disponible';
      },
    },
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        margin: '20px auto',
        padding: '10px',
        borderRadius: '10px',
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        textAlign="center"
        sx={{ color: "#90caf9", marginBottom: "20px" }}
      >
        Lista de Libros
      </Typography>
      <Paper
        elevation={3}
        sx={{
          backgroundColor: "rgba(0,0,0,0.6)",
          border: "1px solid #90caf9",
          borderRadius: "10px",
          margin: '3rem auto',
          padding: '10px'
        }}
      >
        <DataGrid
          rows={books}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          loading={loading}
          sx={{
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: "#1e1e1e",
              color: "#90caf9",
            },
            "& .MuiDataGrid-row": {
              color: "white",
            },
            "& .MuiDataGrid-row:hover": {
              backgroundColor: "#121212",
            },
          }}
        />
      </Paper>
    </Box>
  );
};

export default Books;
