import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./LandingPage.scss";
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
  Grid,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import Slider from "react-slick";
import { Height } from "@mui/icons-material";

export default function LandingPage() {
  const lanzamientos = [
    { title: "Álbum Uno", img: "./images/avatar-tomi.jpeg" },
    { title: "Single Dos", img: "https://via.placeholder.com/300x300" },
    { title: "EP Tres", img: "https://via.placeholder.com/300x300" },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 900, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <Grid sx={{ bgcolor: "#111", color: "white", fontFamily: "sans-serif" }}>
      {/* HERO */}
      <Grid container
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
          <Grid>
            <Typography variant="h2" fontWeight="bold" gutterBottom>
              Tomas Tissera
            </Typography>
            <Typography variant="h6" sx={{ mb: 4 }}>
              Domando Leones 2025
            </Typography>
            <Button
              variant="contained"
              href="https://open.spotify.com/intl-es/artist/75OPQenVE2uY3M2HMLz9Cx?nd=1&dlsi=6a98c5a3ad664a96"
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
              Escuchá mi musica
            </Button>
          </Grid>
        </Fade>
      </Grid>

      {/* SOBRE EL ARTISTA */}
      <Container sx={{ py: 10 }}>
        <Stack direction={{ xs: "column", md: "row" }} spacing={5} alignItems="center">
          <Avatar
            src="/images/avatar-tomi.jpeg"
            sx={{
              width: 200,
              height: 200,
              border: "4px solid rgb(38, 19, 207)",
            }}
          />
          <Grid container>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Sobre mí
            </Typography>
            <Typography color="#ccc">
            Soy Tomas Tissera, artista, cantante y compositor. Empecé a escribir y componer a los 12 años, y desde entonces no paré de buscar mi voz, mi estilo y mi propósito. Hoy, con 23 años, canalizo en mis canciones todo lo que vivo y he vivido.

Me gusta explorar sonidos, romper etiquetas y conectar desde lo auténtico. Cada tema que saco es un pedazo de mí, con el objetivo de inspirar, motivar y acompañar a quien lo escuche. Porque para mí, la música es una manera de expresar lo que, por timido a veces no puedo decir
            </Typography>
          </Grid>
        </Stack>
      </Container>

      {/* LANZAMIENTOS - CARRUSEL FULL WIDTH */}
      <Grid sx={{ py: 8, bgcolor: "#1a1a1a" }}>
        <Typography variant="h4" textAlign="center" fontWeight="bold" gutterBottom>
          Últimos Lanzamientos
        </Typography>
        <Box mt={4} px={{ xs: 2, md: 4 }}>
          <Slider {...sliderSettings}>
            {lanzamientos.map((item, i) => (
              <Grid key={i} px={3}>
                <Card
                  sx={{
                    bgcolor: "#222",
                    color: "white",
                    borderRadius: 3,
                    transition: "transform 0.3s",
                    "&:hover": { transform: "scale(1.05)", boxShadow: 10 },
                  }}
                >
                  <CardMedia component="img" height="300px" image={item.img} alt={item.title} />
                  <CardContent>
                    <Typography variant="h6" textAlign="center">
                      {item.title}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Slider>
        </Box>
      </Grid>

      {/* REDES */}
      <Grid sx={{ py: 6 }}>
        <Typography variant="h5" textAlign="center" gutterBottom>
          Seguime en redes
        </Typography>
        <Stack direction="row" spacing={3} justifyContent="center">
          <IconButton component="a" href="https://open.spotify.com/intl-es/artist/75OPQenVE2uY3M2HMLz9Cx?nd=1&dlsi=6a98c5a3ad664a96" target="_blank" sx={{ color: "#1DB954" }}>
            <MusicNoteIcon fontSize="large" />
          </IconButton>
          <IconButton component="a" href="https://www.instagram.com/tomastissera_/" target="_blank" sx={{ color: "#E1306C" }}>
            <InstagramIcon fontSize="large" />
          </IconButton>
          <IconButton component="a" href="https://www.youtube.com/@tomastissera_" target="_blank" sx={{ color: "#FF0000" }}>
            <YouTubeIcon fontSize="large" />
          </IconButton>
          <IconButton component="a" href="https://www.tiktok.com/@tomastissera_?lang=es" target="_blank" sx={{ color: "white" }}>
            <AudiotrackIcon fontSize="large" />
          </IconButton>
        </Stack>
      </Grid>

      {/* FOOTER */}
      <Divider sx={{ bgcolor: "#333" }} />
      <Grid sx={{ py: 3, textAlign: "center", fontSize: 14, color: "#aaa" }}>
        © {new Date().getFullYear()} Tomas Tissera. Sitio oficial.
      </Grid>
    </Grid>
  );
}
