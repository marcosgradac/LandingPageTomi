import {
  Box,
  Avatar,
  Typography,
  Stack,
  IconButton,
  Fade,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
} from "@mui/material";
import {
  GitHub,
  Instagram,
  LinkedIn,
  WhatsApp,
  Code,
  Web,
  RocketLaunch,
  Smartphone,
  AutoAwesome,
  Close,
} from "@mui/icons-material";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function ContactPanel({ open, onClose }: Props) {
  return (
    <Fade in={open}>
     <Box
    sx={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      backgroundColor: "rgba(0,0,0,0.3)", // más suave para glass
      backdropFilter: "blur(6px)",        // << efecto blur
      WebkitBackdropFilter: "blur(6px)",  // para Safari
      zIndex: 1300,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      p: 2,
    }}
    onClick={onClose}
  >
        <Paper
          onClick={(e) => e.stopPropagation()}
          elevation={6}
          sx={{
            width: "100%",
            maxWidth: 400,
            borderRadius: 4,
            p: 3,
            position: "relative",
            textAlign: "center",
          }}
        >
          {/* ✕ botón de cerrar */}
          <IconButton
            onClick={onClose}
            color="secondary"
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              "&:hover": { color: "#000" },
            }}
          >
            <Close />
          </IconButton>

          <Stack spacing={2} alignItems="center" mt={2}>
            <Avatar
              src="/images/avatar-marcos.jpeg"
              sx={{
                width: 100,
                height: 100,
                border: "3px solid #9c27b0",
              }}
            />
            <Typography color="secondary" variant="h5" fontWeight="bold">
              Marcos Gradac
            </Typography>

            <List dense sx={{ width: "100%", textAlign: "center" }}>
              <ListItem>
                <ListItemIcon>
                  <Web />
                </ListItemIcon>
                <ListItemText primary="Creación de landing pages" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Smartphone />
                </ListItemIcon>
                <ListItemText primary="Páginas web responsive" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <RocketLaunch />
                </ListItemIcon>
                <ListItemText primary="Deploy con Netlify o Vercel" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Code />
                </ListItemIcon>
                <ListItemText primary="Frontend con React + TypeScript" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AutoAwesome />
                </ListItemIcon>
                <ListItemText primary="Diseño moderno con Material UI" />
              </ListItem>
            </List>

            <Typography variant="body2" color="text.secondary">
              Contactame por redes:
            </Typography>

            <Stack direction="row" spacing={2}>
              <IconButton
                component="a"
                href="https://linkedin.com/in/tu-usuario"
                target="_blank"
                sx={{ color: "#0A66C2" }}
              >
                <LinkedIn />
              </IconButton>
              <IconButton
                component="a"
                href="https://www.instagram.com/marcosgradacc/"
                target="_blank"
                sx={{ color: "#E1306C" }}
              >
                <Instagram />
              </IconButton>
              <IconButton
                component="a"
                href="https://wa.me/3571351843"
                target="_blank"
                sx={{ color: "#25D366" }}
              >
                <WhatsApp />
              </IconButton>
            </Stack>
          </Stack>
        </Paper>
      </Box>
    </Fade>
  );
}
