import React from "react";
import { Box } from '@mui/material'
import Navbar from "./components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Channel from "./components/channel/Channel";
import VideoDetail from "./components/video-detail/VideoDetail";
import { Search } from "@mui/icons-material";
import Main from "./components/main/Main";


function App() {
  return (
    <Box>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/channel/:id" element={<Channel />} />
        <Route path="/video/:id" element={<VideoDetail />}/>
        <Route path="/search/:id" element={<Search />} />
      </Routes>
    </Box>
  );
}

export default App;
