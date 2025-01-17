import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const CustomTable = ({ title, rows, columns, loading }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        padding: "20px",
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        textAlign="center"
        sx={{ color: "#90caf9", marginBottom: "20px" }}
      >
        {title}
      </Typography>
      <Paper
        elevation={3}
        sx={{
          width: "100%", // Ocupa todo el ancho disponible
          maxWidth: "1200px", // Ancho máximo para pantallas grandes
          backgroundColor: "rgba(0,0,0,0.6)",
          border: "1px solid #90caf9",
          borderRadius: "10px",
          margin: "0 auto",
          padding: "10px",
          overflow: "hidden", // Oculta contenido fuera de los bordes
        }}
      >
        <Box sx={{ 
          minHeight: '300px',
          maxHeight: 'calc(100vh - 250px)', 
          width: "100%" 
            }}
          >
          <DataGrid
            rows={rows}
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
              "& .MuiDataGrid-virtualScroller": {
                overflowX: "auto", // Habilita el desplazamiento horizontal en dispositivos pequeños
              },
            }}
          />
        </Box>
      </Paper>
    </Box>
  );
};

export default CustomTable;
