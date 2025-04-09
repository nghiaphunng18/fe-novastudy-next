import HomeSlider from "@/components/home/home.slider";
import { Container } from "@mui/material";

export default function Home() {
  return (
    <Container
      maxWidth={false}
      sx={{
        padding: { xs: "0 8px", sm: "0 16px", md: "0 24px" },
      }}
    >
      <HomeSlider />
    </Container>
  );
}
