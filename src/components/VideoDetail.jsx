import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from 'react-player'
import { Typography, Box, Stack } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const VideoDetail = () => {
  const { id } = useParams();
  const [videodetail, setVideoDetail] = useState();
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statastic&id=${id}`).then((data) =>
    setVideoDetail(data.items[0])
    );
    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}`).then((data) =>
    setVideos(data.items)
    );
  }, [id]);

  if (!videodetail?.snippet) {

    return `loading...`;
  }

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videodetail;
  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player"
              controls
            />
            <Typography color="#fff" varient="h5" fontWeight="bold" p={2}>
              {title}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{
                color: "#fff",
              }}
              py={1}
              px={2}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography varient={{ sm: "subtitle", md: "h6" }} color="#fff">
                  {channelTitle}
                  <CheckCircle
                    sx={{ fontSize: "12px", color: "grey", ml: "5px" }}
                  />
                </Typography>
              </Link>
              <Stack>
                <Typography varient="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()}views
                </Typography>
                <Typography varient="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()}views
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent="center"
          alignItems="center"
        >
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
