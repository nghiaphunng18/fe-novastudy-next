'use client';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Settings } from "react-slick";
import { Box, Button, CircularProgress, useMediaQuery } from "@mui/material";
import { ChevronLeftSharp, ChevronRightSharp } from "@mui/icons-material";
import Link from "next/link";
import { useEffect, useState } from "react";

// Định nghĩa interface cho Subject và SubjectsGroup
interface Subject {
    name: string;
    endpoint: string;
}

interface Group {
    name: string;
    subjects: Subject[];
    color: string;
}

interface SubjectsGroup {
    politicalTheory: Group;
    mathematicsAndBasicSciences: Group;
    majorFundamentalsAndCore: Group;
    supplementaryKnowledge: Group;
    moduleSubjectType: Group;
}

// Dữ liệu môn học
const subjects: SubjectsGroup = {
    politicalTheory: {
        name: "Lý luận chính trị",
        subjects: [
            { name: "Triết học Mác - Lênin", endpoint: "triet-hoc-mac-lenin" },
            { name: "Kinh tế chính trị Mác - Lênin", endpoint: "kinh-te-chinh-tri-mac-lenin" },
            { name: "Chủ nghĩa xã hội khoa học", endpoint: "chu-nghia-xa-hoi-khoa-hoc" },
            { name: "Lịch sử Đảng cộng sản Việt Nam", endpoint: "lich-su-dang-cong-san-viet-nam" },
            { name: "Tư tưởng Hồ Chí Minh", endpoint: "tu-tuong-ho-chi-minh" },
        ],
        color: "#d32f2f",
    },
    mathematicsAndBasicSciences: {
        name: "Khối kiến thức toán và khoa học cơ bản",
        subjects: [
            { name: "Nhập môn CNTT và TT", endpoint: "nhap-mon-cntt-va-tt" },
            { name: "Kiến thức máy tính", endpoint: "kien-thuc-may-tinh" },
            { name: "Điện tử cho CNTT lab", endpoint: "dien-tu-cho-cntt-lab" },
            { name: "Toán rời rạc", endpoint: "toan-roi-rac" },
            { name: "Điện tử cho CNTT", endpoint: "dien-tu-cho-cntt" },
            { name: "Tính toán khoa học", endpoint: "tinh-toan-khoa-hoc" },
            { name: "Xử lý tín hiệu", endpoint: "xu-ly-tin-hieu" },
            { name: "Giải tích I", endpoint: "giai-tich-1" },
            { name: "Giải tích II", endpoint: "giai-tich-2" },
            { name: "Phương trình vi phân và Chuỗi", endpoint: "phuong-trinh-vi-phan-va-chuoi" },
            { name: "Đại số tuyến tính", endpoint: "dai-so-tuyen-tinh" },
            { name: "Xác suất thống kê", endpoint: "xac-suat-thong-ke" },
            { name: "Vật lý đại cương I", endpoint: "vat-ly-dai-cuong-1" },
        ],
        color: "#1976d2",
    },
    majorFundamentalsAndCore: {
        name: "Khối kiến thức cơ sở và cốt lõi ngành",
        subjects: [
            { name: "Technical Writing and Presentation", endpoint: "technical-writing-and-presentation" },
            { name: "Cấu trúc dữ liệu và thuật toán", endpoint: "cau-truc-du-lieu-va-thuat-toan" },
            { name: "Nguyên lý hệ điều hành", endpoint: "nguyen-ly-he-dieu-hanh" },
            { name: "Mạng máy tính", endpoint: "mang-may-tinh" },
            { name: "Lập trình hướng đối tượng", endpoint: "lap-trinh-huong-doi-tuong" },
            { name: "Nhập môn Trí tuệ nhân tạo", endpoint: "nhap-mon-tri-tue-nhan-tao" },
            { name: "Thuật toán ứng dụng", endpoint: "thuat-toan-ung-dung" },
            { name: "C Programming Language", endpoint: "c-programming-language" },
            { name: "C Programming (Introduction", endpoint: "c-programming-introduction" },
            { name: "Lập trình C cơ bản", endpoint: "lap-trinh-c-co-ban" },
            { name: "Thực hành kiến trúc máy tính", endpoint: "thuc-hanh-kien-truc-may-tinh" },
            { name: "Kiến trúc máy tính", endpoint: "kien-truc-may-tinh" },
            { name: "Thực hành cơ sở dữ liệu", endpoint: "thuc-hanh-co-so-du-lieu" },
            { name: "Cơ sở dữ liệu", endpoint: "co-so-du-lieu" },
            { name: "Xây dựng chương trình dịch", endpoint: "xay-dung-chuong-trinh-dich" },
            { name: "Kỹ năng ITSS học bằng tiếng Nhật 1", endpoint: "itss-nhat-1" },
            { name: "Kỹ năng ITSS học bằng tiếng Nhật 2", endpoint: "itss-nhat-2" },
            { name: "Nhập môn an toàn thông tin", endpoint: "nhap-mon-an-toan-thong-tin" },
            { name: "Thực hành Lập trình mạng", endpoint: "thuc-hanh-lap-trinh-mang" },
            { name: "Kỹ thuật phần mềm", endpoint: "ky-thuat-phan-mem" },
            { name: "Phát triển phần mềm theo chuẩn kỹ năng ITSS", endpoint: "itss-soft-dev" },
            { name: "Nhập môn kỹ thuật truyền thông", endpoint: "nhap-mon-ky-thuat-truyen-thong" },
        ],
        color: "#ff5722",
    },
    supplementaryKnowledge: {
        name: "Khối kiến thức bổ trợ",
        subjects: [
            { name: "Đổi mới sáng tạo và khởi nghiệp", endpoint: "doi-moi-sang-tao-va-khoi-nghiep" },
            { name: "Kỹ năng mềm", endpoint: "ky-nang-mem" },
            { name: "Tâm lý học ứng dụng", endpoint: "tam-ly-hoc-ung-dung" },
        ],
        color: "#388e3c",
    },
    moduleSubjectType: {
        name: "Module",
        subjects: [
            { name: "Nhập môn Học máy và khai phá dữ liệu", endpoint: "nhap-mon-hoc-may-va-khai-pha-du-lieu" },
            { name: "Công nghệ Web và dịch vụ trực tuyến", endpoint: "cong-nghe-web-va-dich-vu-truc-tuyen" },
            { name: "Giao diện và trải nghiệm người dùng", endpoint: "giao-dien-va-trai-nghiem-nguoi-dung" },
            { name: "Quản trị phát triển phần mềm", endpoint: "quan-tri-phat-trien-phan-mem" },
            { name: "Phát triển ứng dụng cho thiết bị di động", endpoint: "phat-trien-ung-dung-di-dong" },
            { name: "Nhập môn Khoa học dữ liệu", endpoint: "nhap-mon-khoa-hoc-du-lieu" },
        ],
        color: "#ab47bc",
    },
};

const HomeSlider = () => {
    const isMobile = useMediaQuery('(max-width: 480px)');

    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        // Giả lập thời gian chờ để slider ổn định
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 500); // 500ms

        return () => clearTimeout(timer); // Cleanup timer khi component unmount
    }, []);

    const NextArrow = (props: any) => {
        return (
            <Button
                variant="outlined"
                onClick={props.onClick}
                sx={{
                    position: "absolute",
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
            >
                <ChevronRightSharp />
            </Button>
        );
    };

    const PrevArrow = (props: any) => {
        return (
            <Button
                variant="outlined"
                onClick={props.onClick}
                sx={{
                    position: "absolute",
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
            >
                <ChevronLeftSharp />
            </Button>
        );
    };

    const settings: Settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 4,
        swipeToSlide: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            { breakpoint: 1280, settings: { slidesToShow: 7, slidesToScroll: 3 } },
            { breakpoint: 1024, settings: { slidesToShow: 6, slidesToScroll: 2 } },
            { breakpoint: 768, settings: { slidesToShow: 4, slidesToScroll: 2 } },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    nextArrow: undefined,
                    prevArrow: undefined,
                    dots: false,
                    swipeToSlide: true,
                },
            },
        ],
    };

    const subjectGroups: Group[] = Object.values(subjects);

    if (isLoading) {
        return (
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    minHeight: "50vh",
                }}
            >
                <CircularProgress />
            </Box>
        );
    }

    return (
        <Box
            sx={{
                margin: { xs: "0 8px", sm: "0 16px", md: "0 24px" },
                position: "relative",
                ".slick-slider": {
                    padding: "0 0px",
                },
                ".item-subject": {
                    padding: isMobile ? "0 4px" : "0 8px",
                    margin: 0,
                },
            }}
        >
            {subjectGroups.map((group: Group, groupIndex: number) => (
                <Box key={groupIndex} sx={{ mb: 4, mt: groupIndex === 0 ? (isMobile ? 2 : 4) : 0 }}>
                    <Box sx={{ mb: 2, fontWeight: "bold", fontSize: "1.5rem" }}>{group.name}</Box>
                    <Slider {...settings}>
                        {group.subjects.map((subject: Subject, index: number) => (
                            <Box key={index} className="item-subject">
                                <Link href={`/subjects/${subject.endpoint}`} style={{ textDecoration: "none" }}>
                                    <Box
                                        sx={{
                                            border: "2px solid #ccc",
                                            padding: isMobile ? "8px" : "16px",
                                            height: isMobile ? "100px" : "120px",
                                            margin: 0,
                                            fontSize: isMobile ? "13px" : "14px",
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            textAlign: "center",
                                            borderRadius: "8px",
                                            color: group.color,
                                            backgroundColor: `${group.color}10`,
                                            transition: "transform 0.3s",
                                            "&:hover": {
                                                transform: "scale(1.05)",
                                            },
                                            "& > span": {
                                                display: "-webkit-box",
                                                WebkitBoxOrient: "vertical",
                                                WebkitLineClamp: 4,
                                                overflow: "hidden",
                                                textOverflow: "ellipsis",
                                                whiteSpace: "normal",
                                            },
                                        }}
                                    >
                                        <span>{subject.name}</span>
                                    </Box>
                                </Link>
                            </Box>
                        ))}
                    </Slider>
                </Box>
            ))}
        </Box>
    );
};

export default HomeSlider;