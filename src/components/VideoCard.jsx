import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import {
  // demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/constants";
import { grey } from "@mui/material/colors";
const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  // console.log(videoId,snippet);
  return (
    <Card sx={{ width: {xs:'100%',sm:'358px', md: "320px" },boxShadow: 'none' ,borderRadius:0 }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        {/* accesing in snippet in api to get img url down is a path */}
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ width: {xs:'100%' ,sm:'358px',md:'320px'}, height: 180 }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#1e1e1e", height: "160px" }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight={"bold"} color={"#fff"}>
            {snippet?.title.slice(0, 60) || demoVideoTitle?.slice(0.6)}
          </Typography>
        </Link>

        <Link
          to={
            snippet?.channelId ? `/video/${snippet?.channelId}` : demoChannelUrl
          }
        >
          <Typography variant="subtitle2" fontWeight={"bold"} color={"grey"}>
            {snippet?.channelTitle.slice(0, 60) || demoChannelTitle?.slice(0.6)}
            <CheckCircle
              sx={{
                fontSize: 12,
                color: grey,
                ml: "5px",
              }}
            />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
