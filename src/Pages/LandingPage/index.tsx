import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./LandingPage.scss";
import {
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
  Box,
} from "@mui/material";

import Slider from "react-slick";

export default function LandingPage() {
  const lanzamientos = [
    {  img: "./images/donde-fuimos-felices.jfif" },
    {  img: "./images/cardiometro.jpeg" },
    {  img: "./images/torontoooo.jfif" },
    {  img: "./images/torontoooo.jfif" },
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
    <Grid className="landing">
      {/* HERO */}
      <Grid container className="hero">
       <Fade in timeout={1000}>
  <Grid container className="hero-content">
    <Grid>
      <Typography variant="h2" className="hero-title" gutterBottom>
        Tomas Tissera
      </Typography>
    </Grid>
  </Grid>
</Fade>
      </Grid>

      {/* SOBRE EL ARTISTA */}
      <Container className="about-section">
        <Stack direction={{ xs: "column", md: "row" }} spacing={5} alignItems="center">
          <Avatar
            src="/images/avatar-tomi.jpeg"
            className="about-avatar"
          />
          <Grid container>
            <Typography variant="h4" className="about-title" gutterBottom>
              Sobre mí
            </Typography>
            <Typography className="about-text">
              Soy Tomas Tissera, artista, cantante y compositor. Empecé a escribir y componer a los 12 años, y desde entonces no paré de buscar mi voz, mi estilo y mi propósito. Hoy, con 23 años, canalizo en mis canciones todo lo que vivo y he vivido.
              <br /><br />
              Me gusta explorar sonidos, romper etiquetas y conectar desde lo auténtico. Cada tema que saco es un pedazo de mí, con el objetivo de inspirar, motivar y acompañar a quien lo escuche. Porque para mí, la música es una manera de expresar lo que, por timido a veces no puedo decir
            </Typography>
          </Grid>
        </Stack>
      </Container>

      {/* LANZAMIENTOS - CARRUSEL FULL WIDTH */}
      <Grid className="releases">
        <Typography variant="h4" className="releases-title" gutterBottom>
          Últimos Lanzamientos
        </Typography>
        <Box className="slider-container">
          <Slider {...sliderSettings}>
            {lanzamientos.map((item, i) => (
              <Grid key={i} className="slider-item">
                <Card className="release-card">
                  <CardMedia component="img" height="300px" image={item.img} />
                </Card>
              </Grid>
            ))}
          </Slider>
        </Box>
      </Grid>

      {/* REDES */}
      <Grid className="social">
        <Typography variant="h5"  gutterBottom>
          Seguime en redes
        </Typography>
        <Stack direction="row" spacing={3} justifyContent="center">
        <Stack direction="row" spacing={3} justifyContent="center">
  <IconButton
    component="a"
    href="https://open.spotify.com/intl-es/artist/75OPQenVE2uY3M2HMLz9Cx?nd=1&dlsi=6a98c5a3ad664a96"
    target="_blank"
    className="social-icon"
  >
    <img src="/svg/icons8-spotify.svg" alt="Spotify" />
  </IconButton>

  <IconButton
    component="a"
    href="https://www.instagram.com/tomastissera_/"
    target="_blank"
    className="social-icon"
  >
    <img src="/svg/instagram-icon.svg" alt="Instagram" />
  </IconButton>

  <IconButton
    component="a"
    href="https://www.youtube.com/@tomastissera_"
    target="_blank"
    className="social-icon icon-youtube"
  >
    <img src="/svg/youtube-icon.svg" alt="YouTube" />
  </IconButton>

  <IconButton
    component="a"
    href="https://www.tiktok.com/@tomastissera_?lang=ess"
    target="_blank"
    className="social-icon icon-tiktok"
  >
    <img src="/svg/tiktok-icon.svg" alt="TikTok" color="" width="45px" />
  </IconButton>
</Stack>

</Stack>
      </Grid>

      {/* FOOTER */}
      <Divider className="footer-divider" />
      <Grid className="footer">
        © {new Date().getFullYear()} Tomas Tissera. Sitio oficial.
      </Grid>
    </Grid>
  );
}