import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import ChannelCard from "./ChannelCard";
import Videos from "./Videos";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setvideos] = useState([]);

  const { id } = useParams();
  console.log(channelDetail, videos);
  useEffect(() => {
    fetchFromAPI(`channel?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date  `).then(
      (data) => setvideos(data?.items)
    );
  }, [id]);
  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg,rgba(0,238247,1 )0% rgba(206,3,184,1)100%,rgba(0,212,255,1)100%)",
            zIndex: 10,
            height: "300px",
          }}
        >
          <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
        </div>
      </Box>

      <Box display="flex" p="2">
        <Box sx={{mr: {sm:'100px' }}} />
          <Videos videoa={videos}/>
        

      </Box>
    </Box>
  );
};

export default ChannelDetail;
