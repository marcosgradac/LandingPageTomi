import React from "react";
import {
  Box,
  Typography,
  Button,
  Avatar,
  Stack,
  Container,
  Card,
  CardMedia,
  CardContent,
  IconButton,
  Divider,
  Fade,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";

export default function LandingPage(){
  return (
    <Box sx={{ bgcolor: "#111", color: "white", fontFamily: "sans-serif" }}>
      {/* HERO */}
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(to right, #232526, #414345)",
          textAlign: "center",
          px: 2,
        }}
      >
        <Fade in timeout={1000}>
          <Box>
            <Typography variant="h2" fontWeight="bold" gutterBottom>
              Nombre del Artista
            </Typography>
            <Typography variant="h6" sx={{ mb: 4 }}>
              Música que nace del alma, vibra en tu piel
            </Typography>
            <Button
              variant="contained"
              href="https://open.spotify.com"
              target="_blank"
              sx={{
                bgcolor: "#1DB954",
                px: 4,
                py: 1.5,
                fontWeight: "bold",
                borderRadius: 4,
                "&:hover": { bgcolor: "#1ed760" },
              }}
            >
              Escuchá en Spotify
            </Button>
          </Box>
        </Fade>
      </Box>

      {/* SOBRE EL ARTISTA */}
      <Container sx={{ py: 10 }}>
        <Stack direction={{ xs: "column", md: "row" }} spacing={5} alignItems="center">
          <Avatar
            src="https://via.placeholder.com/200"
            sx={{
              width: 200,
              height: 200,
              border: "4px solid #1DB954",
            }}
          />
          <Box>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Sobre mí
            </Typography>
            <Typography color="#ccc">
              Soy un cantante que mezcla sonidos urbanos con raíces latinas. Cada canción que compongo cuenta una historia personal. Vengo trabajando desde hace años para llevar mi arte al siguiente nivel. ¡Gracias por escuchar!
            </Typography>
          </Box>
        </Stack>
      </Container>

      {/* LANZAMIENTOS */}
      <Box sx={{ py: 8, bgcolor: "#1a1a1a" }}>
        <Container>
          <Typography variant="h4" textAlign="center" fontWeight="bold" gutterBottom>
            Últimos Lanzamientos
          </Typography>
          <Stack direction={{ xs: "column", md: "row" }} spacing={4} mt={4} justifyContent="center">
            {[
              { title: "Álbum Uno", img: "https://via.placeholder.com/300x300" },
              { title: "Single Dos", img: "https://via.placeholder.com/300x300" },
              { title: "EP Tres", img: "https://via.placeholder.com/300x300" },
            ].map((item, i) => (
              <Card
                key={i}
                sx={{
                  maxWidth: 300,
                  bgcolor: "#222",
                  color: "white",
                  borderRadius: 3,
                  transition: "transform 0.3s",
                  "&:hover": { transform: "scale(1.05)", boxShadow: 10 },
                }}
              >
                <CardMedia component="img" height="300" image={item.img} alt={item.title} />
                <CardContent>
                  <Typography variant="h6" textAlign="center">
                    {item.title}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Stack>
        </Container>
      </Box>

      {/* REDES */}
      <Box sx={{ py: 6 }}>
        <Typography variant="h5" textAlign="center" gutterBottom>
          Seguime en redes
        </Typography>
        <Stack direction="row" spacing={3} justifyContent="center">
          <IconButton component="a" href="https://spotify.com" target="_blank" sx={{ color: "#1DB954" }}>
            <MusicNoteIcon fontSize="large" />
          </IconButton>
          <IconButton component="a" href="https://instagram.com" target="_blank" sx={{ color: "#E1306C" }}>
            <InstagramIcon fontSize="large" />
          </IconButton>
          <IconButton component="a" href="https://youtube.com" target="_blank" sx={{ color: "#FF0000" }}>
            <YouTubeIcon fontSize="large" />
          </IconButton>
          <IconButton component="a" href="https://tiktok.com" target="_blank" sx={{ color: "white" }}>
            <AudiotrackIcon fontSize="large" />
          </IconButton>
        </Stack>
      </Box>

      {/* FOOTER */}
      <Divider sx={{ bgcolor: "#333" }} />
      <Box sx={{ py: 3, textAlign: "center", fontSize: 14, color: "#aaa" }}>
        © {new Date().getFullYear()} Nombre del Artista. Sitio oficial.
      </Box>
    </Box>
  );
};

