import React from 'react';
import { Box, Typography, Card, CardContent, CardActionArea } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import BookIcon from '@mui/icons-material/Book';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        background: 'linear-gradient(to bottom, #0f0f0f, #1a1a1a)',
        padding: 3,
      }}
    >
      {/* Título principal */}
      <Typography
        variant="h3"
        sx={{
          fontWeight: 'bold',
          marginBottom: 5,
          textAlign: 'center',
          color: '#90caf9',
        }}
      >
        Servicio de Librería
      </Typography>

      {/* Contenedor responsivo */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 4,
          width: '100%',
          maxWidth: '900px',
        }}
      >
        {/* Tarjeta de Usuarios */}
        <Card
          sx={{
            width: '250px',
            border: '2px solid #00C6FF',
            borderRadius: '12px',
            backgroundColor: 'rgba(0, 0, 0, 0.5)', 
            '&:hover': {
              boxShadow: '0 0 15px #00C6FF',
              transform: 'scale(1.05)',
            },
            transition: 'all 0.3s ease-in-out',
          }}
        >
          <CardActionArea onClick={() => navigate('/users')}>
            <CardContent
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 4,
              }}
            >
              <PeopleIcon sx={{ fontSize: 60, color: '#90caf9', marginBottom: 2 }} />
              <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#ffffff' }}>
                Usuarios
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>

        {/* Tarjeta de Libros */}
        <Card
          sx={{
            width: '250px',
            border: '2px solid #00C6FF',
            borderRadius: '12px',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            '&:hover': {
              boxShadow: '0 0 15px #00C6FF',
              transform: 'scale(1.05)',
            },
            transition: 'all 0.3s ease-in-out',
          }}
        >
          <CardActionArea onClick={() => navigate('/books')}>
            <CardContent
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 4,
              }}
            >
              <BookIcon sx={{ fontSize: 60, color: '#4caf50', marginBottom: 2 }} />
              <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#ffffff' }}>
                Libros
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </Box>
  );
};

export default Home;
