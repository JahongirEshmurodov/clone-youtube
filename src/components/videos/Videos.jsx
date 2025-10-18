import { Box, Stack } from "@mui/material";
import React from "react";

import ChannelCard from "../channelCard/ChannelCard";
import Loader from "../loader/Loader";
import VideoCard from "../video-card/VideoCard";

function Videos({ videos }) {
  // ✅ Default prop qo‘shildi
  if (!videos.length) return <Loader />;
  return (
    <Stack
      width={"100%"}
      direction={"row"}
      flexWrap={"wrap"}
      ssss
      justifyContent={"center"}
      alignItems={"center"}
      gap={2}
    >
      {videos?.map((item, index) => (
        <Box key={item.id?.videoId || index}>
          {item.id?.videoId && <VideoCard video={item} />}
          {item.id?.channelId && <ChannelCard video={item} />}
        </Box>
      ))}
    </Stack>
  );
}

export default Videos;
