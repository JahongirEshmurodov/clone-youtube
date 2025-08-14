import { Box, Container, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { colors } from "../../constants/colors";
import Category from "../category/Category";
import Videos from "../videos/Videos";
import { ApiService } from "../../service/api.service";

function Main() {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  const selectedCategoryHandler = (category) => setSelectedCategory(category);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await ApiService.fetching(
          `search?part=snippet&q=${selectedCategory}`
        );
        setVideos(data.items);
      } catch (error) {
        console.error("API xatosi:", error);
      }
    };
    getData();
  }, [selectedCategory]); // ✅ `selectedCategory` o'zgarganda qaytadan API chaqiriladi

  return (
    <Stack>
      <Category
        selectedCategory={selectedCategory}
        selectedCategoryHandler={selectedCategoryHandler}
      />
      <Box p={2} sx={{ height: "90vh" }}>
        <Container maxWidth={"90%"}>
          <Typography variant={"h4"} fontWeight={"bold"} mb={2}>
            {selectedCategory}
            <span style={{ color: colors.secondary }}>Videos</span>
          </Typography>
          <Videos videos={videos} /> {/* ✅ To‘g‘ri `videos` uzatilgan */}
        </Container>
      </Box>
    </Stack>
  );
}

export default Main;
