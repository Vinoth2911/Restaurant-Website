import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate instead of useHistory
import { MenuList } from "../data/data";
import Layout from "./../components/layout/Layout";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";

const Menu = () => {
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleBuyNowClick = () => {
    navigate('./Buy.js'); // Use navigate to change routes
  };

  return (
    <Layout>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {MenuList.map((menu) => (
          <Card sx={{ maxWidth: "390px", display: "flex", m: 2 }} key={menu.id}>
            <CardActionArea>
              <div style={{ position: "relative" }}>
                <CardMedia
                  sx={{ minHeight: "400px" }}
                  component={"img"}
                  src={menu.image}
                  alt={menu.name}
                />
                <Button
                  onClick={handleBuyNowClick} 
                  variant="contained"
                  color="primary"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  BUY NOW
                </Button>
              </div>
              <CardContent>
                <Typography variant="h5" gutterBottom component={"div"}>
                  {menu.name}
                </Typography>
                <Typography variant="body2">{menu.description}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Layout>
  );
};

export default Menu;