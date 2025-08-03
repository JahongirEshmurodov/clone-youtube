import { Box, Container, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { colors } from "../../constants/colors";

function Search() {
  const [videos, setVideos] = useState([]);
  const id = useParams();
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await ApiService.fetching(`search?part=snippet&q=${id}`);
        setVideos(data.item);
      } catch (error) {
        console.log(error);
      }
    };
  }, [id]);
  return (
    <Box p={2} sx={{ height: "90vh" }}>
      <Container maxWidth={"90%"}>
        <Typography variant={"h4"} fontWeight={"bold"} mb={2}>
          Search results for{" "}
          <span style={{ color: colors.secondary }}>{id}</span>
        </Typography>
      </Container>
    </Box>
  );
}

export default Search;
