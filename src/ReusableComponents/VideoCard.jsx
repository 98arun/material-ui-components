import * as React from "react";
import Typography from "@mui/material/Typography";
import CardHeader from "@mui/material/CardHeader";

export default function VideoCard(props) {
        const { name, video, description } = props;
        if (!name || !video || !description ) {
      return null;
    }

  return (
    <>
      <div style={{ margin: "10px", padding: "10x", maxWidth: 345, backgroundColor:"white" }}>
        <CardHeader style={{color:"black" }}title={name} />
        <video
        width= "100%"
          src={video}
           loop={true} autoPlay={true} controls
        ></video>
        <Typography variant="body2" color="textSecondary" component="p">{description}
        </Typography>
      </div>
    </>
  );
}
