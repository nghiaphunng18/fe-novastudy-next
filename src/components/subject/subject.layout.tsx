"use client";

import React, { useState } from "react";
import {
    Box,
    Typography,
    List,
    ListItem,
    ListItemText,
    TextField,
    Avatar,
    Button,
    useMediaQuery,
    Alert,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

interface SubjectContent {
    title: string;
    content: React.ReactNode;
}

interface Comment {
    id: number;
    author: string;
    text: string;
}

interface SubjectLayoutProps {
    subjectName: string;
    contents: SubjectContent[];
    comments: Comment[]; // Nhận dữ liệu bình luận từ Server Component
    isLoggedIn?: boolean;
}

export default function SubjectLayout({
    subjectName,
    contents,
    comments,
    isLoggedIn = false,
}: SubjectLayoutProps) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

    const [selectedContent, setSelectedContent] = useState(contents[0]?.title || "");
    const [commentWidth, setCommentWidth] = useState(300);
    const [isResizing, setIsResizing] = useState(false);
    const [showLoginAlert, setShowLoginAlert] = useState(false);

    const userInitial = isLoggedIn ? "N" : "O";

    const handleMouseDown = () => setIsResizing(true);
    const handleMouseUp = () => setIsResizing(false);
    const handleMouseMove = (e: React.MouseEvent) => {
        if (isResizing) {
            const newWidth = window.innerWidth - e.clientX;
            if (newWidth >= 200 && newWidth <= 500) setCommentWidth(newWidth);
        }
    };

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                height: "calc(100vh - 64px)",
                overflow: "hidden",
            }}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
        >
            {/* Phần trái: Mục lục */}
            <Box
                sx={{
                    width: isMobile ? "100%" : isTablet ? "200px" : "250px",
                    bgcolor: "#f5f5f5",
                    p: 2,
                    overflowY: "auto",
                    borderRight: "1px solid #e0e0e0",
                }}
            >
                <Typography variant="h6" gutterBottom>
                    Mục lục
                </Typography>
                <List dense>
                    {contents.map((item) => (
                        <ListItem
                            key={item.title}
                            component="button" // Giữ nguyên để dùng <button> thay vì <li>
                            // Bỏ prop 'selected' vì không cần với component="button"
                            onClick={() => {
                                setSelectedContent(item.title);
                                document
                                    .getElementById(item.title.replace(/\s+/g, "-").toLowerCase())
                                    ?.scrollIntoView({ behavior: "smooth" });
                            }}
                            sx={{
                                backgroundColor: selectedContent === item.title ? theme.palette.primary.light : "transparent", // Thay 'selected' bằng điều kiện trong sx
                                color: selectedContent === item.title ? theme.palette.primary.contrastText : "inherit",
                                "&:hover": {
                                    bgcolor: theme.palette.action.hover,
                                },
                            }}
                        >
                            <ListItemText primary={item.title} />
                        </ListItem>
                    ))}
                </List>
            </Box>

            {/* Phần giữa: Nội dung */}
            <Box
                sx={{
                    flexGrow: 1,
                    p: 2,
                    overflowY: "auto",
                    bgcolor: "#fff",
                }}
            >
                <Typography variant="h4" gutterBottom>
                    {subjectName}
                </Typography>
                {contents.map((item) => (
                    <Box key={item.title} id={item.title.replace(/\s+/g, "-").toLowerCase()}>
                        <Typography variant="h6" gutterBottom>
                            {item.title}
                        </Typography>
                        {item.content}
                    </Box>
                ))}
            </Box>

            {/* Phần phải: Bình luận */}
            <Box
                sx={{
                    width: isMobile ? "100%" : `${commentWidth}px`,
                    bgcolor: "#fafafa",
                    p: 2,
                    borderLeft: "1px solid #e0e0e0",
                    overflowY: "auto",
                    position: "relative",
                    transition: "width 0.2s",
                }}
            >
                {!isMobile && (
                    <Box
                        sx={{
                            position: "absolute",
                            left: 0,
                            top: 0,
                            bottom: 0,
                            width: "5px",
                            bgcolor: "#ccc",
                            cursor: "ew-resize",
                            "&:hover": { bgcolor: "#999" },
                        }}
                        onMouseDown={handleMouseDown}
                    />
                )}
                <Typography variant="h6" gutterBottom>
                    Bình luận
                </Typography>
                {showLoginAlert && (
                    <Alert severity="info" onClose={() => setShowLoginAlert(false)} sx={{ mb: 2 }}>
                        Vui lòng đăng nhập để bình luận!
                    </Alert>
                )}
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                    <Avatar sx={{ bgcolor: isLoggedIn ? theme.palette.primary.main : "#757575", mr: 1 }}>
                        {userInitial}
                    </Avatar>
                    <TextField
                        fullWidth
                        placeholder={isLoggedIn ? "Viết bình luận..." : "Đăng nhập để bình luận"}
                        disabled={!isLoggedIn}
                        onClick={!isLoggedIn ? () => setShowLoginAlert(true) : undefined}
                        variant="outlined"
                        size="small"
                    />
                </Box>
                <Box>
                    {comments.length > 0 ? (
                        comments.map((comment) => (
                            <Typography key={comment.id} variant="body2" gutterBottom>
                                <strong>{comment.author}:</strong> {comment.text}
                            </Typography>
                        ))
                    ) : (
                        <Typography variant="body2" color="textSecondary">
                            (Chưa có bình luận nào)
                        </Typography>
                    )}
                </Box>
            </Box>
        </Box>
    );
}