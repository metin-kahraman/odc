import React, { useState, useRef } from "react";
import { Box } from "@mui/material";
import Paper from '@mui/material/Paper';
import Sitemark from './SitemarkIcon';

const CustomBeforeAfterSlider = ({ beforeImage, afterImage, handleImage }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef(null);

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

  const handleTouchMove = (e) => {
    const rect = sliderRef.current.getBoundingClientRect();
    const position = ((e.touches[0].clientX - rect.left) / rect.width) * 100;
    if (position >= 0 && position <= 100) {
      setSliderPosition(position);
    }
  };

  return (
    <Paper elevation={3} sx={{padding:5, backgroundColor:"orange"}}>

(
    <Box
      ref={sliderRef}
      sx={{
        position: "relative",
        width: "100%",
        //maxWidth: "600px",
        height: "400px",
        cursor: isDragging ? "grabbing" : "grab",
        userSelect: "none",
        overflow: "hidden",
      }}
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
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
      <Box
        component="img"
        src={afterImage}
        alt="After"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0% 100%)`,
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
        component="img"
        src={handleImage}
        alt="Handle"
        sx={{
          position: "absolute",
          top: "50%",
          left: `${sliderPosition}%`,
          transform: "translate(-50%, -50%)",
          width: "60px", // Handle image width
          height: "60px", // Handle image height
          cursor: "pointer",
          borderRadius:3
        }}
        draggable={false} // Dragging the image won't cause issues
      />
    </Box>
    </Paper>
  );
};

export default CustomBeforeAfterSlider;
