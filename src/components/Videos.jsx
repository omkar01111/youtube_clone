import React from "react";
import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard } from "./";

const Videos = ({ videos,direction }) => {


  // console.log(videos);
 if(!videos?.length) return'loading...';
  return (
    <Stack direction={direction|| "row"} flexWrap={"wrap"} justifyContent={"start"} gap={2}>
      {videos.map((item, idk) => (
        <Box key={idk}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
