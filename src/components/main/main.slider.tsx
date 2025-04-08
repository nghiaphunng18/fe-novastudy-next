'use client';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Settings } from "react-slick";
import { Box, Button } from "@mui/material";
import { ChevronLeftSharp, ChevronRightSharp } from "@mui/icons-material";

const MainSlider = () => {
    const NextArrow = (props: any) => {
        return (
            <Button variant="outlined"
                onClick={props.onClick}
                sx={{
                    position: "absolute",
                    // right: "-25px",
                    right: 0,
                    top: "50%",
                    transform: "translateY(-50%)",
                    zIndex: 2,
                    minWidth: 35,
                    width: 35,
                    "&:hover": {
                        color: "#ff5722",
                        borderColor: "#ff5722",
                    },
                }}
            ><ChevronRightSharp /></Button>
        )
    }

    const PrevArrow = (props: any) => {
        return (
            <Button variant="outlined"
                onClick={props.onClick}
                sx={{
                    position: "absolute",
                    // left: "-25px",
                    left: 0,
                    top: "50%",
                    transform: "translateY(-50%)",
                    zIndex: 2,
                    minWidth: 35,
                    width: 35,
                    "&:hover": {
                        color: "#ff5722",
                        borderColor: "#ff5722",
                    },
                }}
            ><ChevronLeftSharp /></Button>
        )
    }

    const settings: Settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            { breakpoint: 1280, settings: { slidesToShow: 5 } },
            { breakpoint: 1024, settings: { slidesToShow: 4 } },
            { breakpoint: 768, settings: { slidesToShow: 3 } },
            { breakpoint: 480, settings: { slidesToShow: 2 } },
        ]
    };
    return (
        <Box
            sx={{
                margin: "0 50px",
                position: "relative",
                ".slick-slider": {
                    padding: "0 40px",
                },
                ".slick-slide": {
                    display: "flex",
                    justifyContent: "center",
                },
                ".item-subject": {
                    flex: "1",
                    textAlign: "center",
                    padding: " 0 10px",
                },
                "h3": {
                    border: "1px solid #ccc",
                    padding: "20px",
                    height: "200px",
                    margin: 0,
                }
            }}>
            <h2>Toán đại cương</h2>
            <Slider {...settings}>
                <div className="item-subject">
                    <h3>1</h3>
                </div>
                <div className="item-subject">
                    <h3>2</h3>
                </div>
                <div className="item-subject">
                    <h3>3</h3>
                </div>
                <div className="item-subject">
                    <h3>4</h3>
                </div>
                <div className="item-subject">
                    <h3>5</h3>
                </div>
                <div className="item-subject">
                    <h3>6</h3>
                </div>
                <div className="item-subject">
                    <h3>7</h3>
                </div>
                <div className="item-subject">
                    <h3>8</h3>
                </div>
            </Slider>

            <h2>Chuyên ngành</h2>
            <Slider {...settings}>
                <div className="item-subject">
                    <h3>1</h3>
                </div>
                <div className="item-subject">
                    <h3>2</h3>
                </div>
                <div className="item-subject">
                    <h3>3</h3>
                </div>
                <div className="item-subject">
                    <h3>4</h3>
                </div>
                <div className="item-subject">
                    <h3>5</h3>
                </div>
                <div className="item-subject">
                    <h3>6</h3>
                </div>
                <div className="item-subject">
                    <h3>7</h3>
                </div>
                <div className="item-subject">
                    <h3>8</h3>
                </div>
            </Slider>
        </Box>
    );
}

export default MainSlider;