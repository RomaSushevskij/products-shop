import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Skeleton from "@mui/material/Skeleton";

export const ProductCardSkeleton = () => {
  return (
    <Card sx={{ width: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <Skeleton sx={{ width: "70%" }} />
        </Typography>
        <Typography gutterBottom variant="body1" component="div">
          <Skeleton sx={{ width: "50%" }} />
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          <Skeleton />
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          <Skeleton />
        </Typography>
        <Stack flexDirection={"row"} alignItems={"center"} justifyContent={"space-between"}>
          <Typography variant="h6" fontWeight={700} sx={{ my: 4 }}>
            <Skeleton sx={{ width: "6.25rem" }} />
          </Typography>
        </Stack>

        <Stack flexDirection={"row"} justifyContent={"center"}>
          <Skeleton sx={{ width: "50%", height: "3.5rem" }} />
        </Stack>
      </CardContent>
    </Card>
  );
};
