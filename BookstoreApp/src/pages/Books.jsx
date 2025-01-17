import React, { useEffect, useState } from "react";
import { Box, Typography, Paper } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import api from "../services/api";
import CustomTable from "../components/CustomTable";
import BackButton from "../components/ArrowBack";

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
    <div style={{ position: "relative", padding: "20px" }}>
      <BackButton/>
      <CustomTable
        title="Lista de Libros"
        rows={books}
        columns={columns}
        loading={loading}
      />
    </div>
  );
};

export default Books;
