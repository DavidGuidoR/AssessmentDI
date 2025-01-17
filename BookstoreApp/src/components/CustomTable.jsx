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
        height: "100%",
        width: "100%",
        margin: "20px auto",
        padding: "10px",
        borderRadius: "10px",
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
          backgroundColor: "rgba(0,0,0,0.6)",
          border: "1px solid #90caf9",
          borderRadius: "10px",
          margin: "3rem auto",
          padding: "10px",
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
          }}
        />
      </Paper>
    </Box>
  );
};

export default CustomTable;
