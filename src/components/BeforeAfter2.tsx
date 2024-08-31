import React, { useState, useRef } from "react";
import { Box, Typography } from "@mui/material";
import Paper from '@mui/material/Paper';


const CustomBeforeAfterSlider = ({ beforeImage, afterImage }) => {
  const [sliderPosition, setSliderPosition] = useState(50); // Slider başlangıç konumu
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  /*const handleMouseMove = (e) => {
    const rect = sliderRef.current.getBoundingClientRect();
    const position = ((e.clientX - rect.left) / rect.width) * 100;
    if (position >= 0 && position <= 100) {
      setSliderPosition(position);
    }
  };
  */

  const handleTouchMove = (e) => {
    const rect = sliderRef.current.getBoundingClientRect();
    const position = ((e.touches[0].clientX - rect.left) / rect.width) * 100;
    if (position >= 0 && position <= 100) {
      setSliderPosition(position);
    }
  };

  const handleClick = (e) => {
    const rect = sliderRef.current.getBoundingClientRect();
    const position = ((e.clientX - rect.left) / rect.width) * 100;
    setSliderPosition(position);
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const rect = sliderRef.current.getBoundingClientRect();
    const position = ((e.clientX - rect.left) / rect.width) * 100;
    if (position >= 0 && position <= 100) {
      setSliderPosition(position);
    }
  };
 
  return (
    <Paper elevation={3} sx={{padding:5, backgroundColor:"orange"}}>
    <Box
      ref={sliderRef}
      sx={{
        position: "relative",
        width: "100%",
        //maxWidth: "600px",
        height: "400px",
        overflow: "hidden",
        cursor: "ew-resize",
        userSelect: "none",
       
      }}
      //onMouseMove={handleMouseMove}
      //onTouchMove={handleTouchMove}
      //onClick={handleClick}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseUp}
    >
      <Box
        component="img"
        src={beforeImage}
        alt="Before"
        sx={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          objectFit: "cover",
        }}
      />
      <Box
        component="img"
        src={afterImage}
        alt="After"
        sx={{
          width: `${sliderPosition}%`,
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          overflow: "hidden",
          objectFit: "cover",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: `${sliderPosition}%`,
          width: "2px",
          height: "100%",
          backgroundColor: "white",
          transform: "translateX(-50%)",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: `${sliderPosition}%`,
          transform: "translate(-50%, -50%)",
          backgroundColor: "white",
          borderRadius: "50%",
          width: "20px",
          height: "20px",
          border: "2px solid black",
        }}
      />
    </Box>
    </Paper>
  );
};

export default CustomBeforeAfterSlider;
