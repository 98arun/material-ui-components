import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ImgCard(props) {
  const { name, image, description } = props;
  if (!name || !image || !description) {
    return null;
  }

  return (
    <Card sx={{ maxWidth: 345 }} style={{ margin: "10px", padding: "10x" }}>
      <CardMedia component="img" height="140" image={image} alt={name} />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions style={{justifyContent:"center"}}>
        <Button size="small"   >Click Me</Button>
      </CardActions>
    </Card>
  );
}
