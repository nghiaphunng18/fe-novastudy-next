
import SubjectLayout from "@/components/subject/subject.layout";
import { Box, Typography, Button } from "@mui/material";

// Giả lập fetch API cho bình luận (sẽ thay bằng API thật sau)
async function fetchComments(subject: string) {
    // Ví dụ API: const res = await fetch(`/api/subjects/${subject}/comments`);
    // return res.json();
    return [
        { id: 1, author: "Nguyen A", text: "Đây là bình luận đầu tiên, rất hay!" },
        { id: 2, author: "Tran B", text: "Nội dung môn này thú vị, nhưng cần thêm ví dụ." },
        { id: 3, author: "Le C", text: "Cảm ơn đã chia sẻ tài liệu, rất hữu ích!" },
        { id: 1, author: "Nguyen A", text: "Đây là bình luận đầu tiên, rất hay!" },
        { id: 2, author: "Tran B", text: "Nội dung môn này thú vị, nhưng cần thêm ví dụ." },
        { id: 3, author: "Le C", text: "Cảm ơn đã chia sẻ tài liệu, rất hữu ích!" },
        { id: 1, author: "Nguyen A", text: "Đây là bình luận đầu tiên, rất hay!" },
        { id: 2, author: "Tran B", text: "Nội dung môn này thú vị, nhưng cần thêm ví dụ." },
        { id: 3, author: "Le C", text: "Cảm ơn đã chia sẻ tài liệu, rất hữu ích!" },
        { id: 1, author: "Nguyen A", text: "Đây là bình luận đầu tiên, rất hay!" },
        { id: 2, author: "Tran B", text: "Nội dung môn này thú vị, nhưng cần thêm ví dụ." },
        { id: 3, author: "Le C", text: "Cảm ơn đã chia sẻ tài liệu, rất hữu ích!" },
        { id: 1, author: "Nguyen A", text: "Đây là bình luận đầu tiên, rất hay!" },
        { id: 2, author: "Tran B", text: "Nội dung môn này thú vị, nhưng cần thêm ví dụ." },
        { id: 3, author: "Le C", text: "Cảm ơn đã chia sẻ tài liệu, rất hữu ích!" },
        { id: 1, author: "Nguyen A", text: "Đây là bình luận đầu tiên, rất hay!" },
        { id: 2, author: "Tran B", text: "Nội dung môn này thú vị, nhưng cần thêm ví dụ." },
        { id: 3, author: "Le C", text: "Cảm ơn đã chia sẻ tài liệu, rất hữu ích!" },
        { id: 1, author: "Nguyen A", text: "Đây là bình luận đầu tiên, rất hay!" },
        { id: 2, author: "Tran B", text: "Nội dung môn này thú vị, nhưng cần thêm ví dụ." },
        { id: 3, author: "Le C", text: "Cảm ơn đã chia sẻ tài liệu, rất hữu ích!" },
        { id: 1, author: "Nguyen A", text: "Đây là bình luận đầu tiên, rất hay!" },
        { id: 2, author: "Tran B", text: "Nội dung môn này thú vị, nhưng cần thêm ví dụ." },
        { id: 3, author: "Le C", text: "Cảm ơn đã chia sẻ tài liệu, rất hữu ích!" },
        { id: 1, author: "Nguyen A", text: "Đây là bình luận đầu tiên, rất hay!" },
        { id: 2, author: "Tran B", text: "Nội dung môn này thú vị, nhưng cần thêm ví dụ." },
        { id: 3, author: "Le C", text: "Cảm ơn đã chia sẻ tài liệu, rất hữu ích!" },
        { id: 1, author: "Nguyen A", text: "Đây là bình luận đầu tiên, rất hay!" },
        { id: 2, author: "Tran B", text: "Nội dung môn này thú vị, nhưng cần thêm ví dụ." },
        { id: 3, author: "Le C", text: "Cảm ơn đã chia sẻ tài liệu, rất hữu ích!" },
        { id: 1, author: "Nguyen A", text: "Đây là bình luận đầu tiên, rất hay!" },
        { id: 2, author: "Tran B", text: "Nội dung môn này thú vị, nhưng cần thêm ví dụ." },
        { id: 3, author: "Le C", text: "Cảm ơn đã chia sẻ tài liệu, rất hữu ích!" },
        { id: 1, author: "Nguyen A", text: "Đây là bình luận đầu tiên, rất hay!" },
        { id: 2, author: "Tran B", text: "Nội dung môn này thú vị, nhưng cần thêm ví dụ." },
        { id: 3, author: "Le C", text: "Cảm ơn đã chia sẻ tài liệu, rất hữu ích!" },
        { id: 1, author: "Nguyen A", text: "Đây là bình luận đầu tiên, rất hay!" },
        { id: 2, author: "Tran B", text: "Nội dung môn này thú vị, nhưng cần thêm ví dụ." },
        { id: 3, author: "Le C", text: "Cảm ơn đã chia sẻ tài liệu, rất hữu ích!" },
        { id: 1, author: "Nguyen A", text: "Đây là bình luận đầu tiên, rất hay!" },
        { id: 2, author: "Tran B", text: "Nội dung môn này thú vị, nhưng cần thêm ví dụ." },
        { id: 3, author: "Le C", text: "Cảm ơn đã chia sẻ tài liệu, rất hữu ích!" },
        { id: 1, author: "Nguyen A", text: "Đây là bình luận đầu tiên, rất hay!" },
        { id: 2, author: "Tran B", text: "Nội dung môn này thú vị, nhưng cần thêm ví dụ." },
        { id: 3, author: "Le C", text: "Cảm ơn đã chia sẻ tài liệu, rất hữu ích!" },
        { id: 1, author: "Nguyen A", text: "Đây là bình luận đầu tiên, rất hay!" },
        { id: 2, author: "Tran B", text: "Nội dung môn này thú vị, nhưng cần thêm ví dụ." },
        { id: 3, author: "Le C", text: "Cảm ơn đã chia sẻ tài liệu, rất hữu ích!" },
        { id: 1, author: "Nguyen A", text: "Đây là bình luận đầu tiên, rất hay!" },
        { id: 2, author: "Tran B", text: "Nội dung môn này thú vị, nhưng cần thêm ví dụ." },
        { id: 3, author: "Le C", text: "Cảm ơn đã chia sẻ tài liệu, rất hữu ích!" },

    ];
}

export default async function SubjectPage() {
    const subjectName = "Triết học Mac-Lenin"

    const comments = await fetchComments("example");

    const contents = [
        {
            title: "Giáo trình, tài liệu",
            content: (
                <Box>
                    <Typography variant="h5" gutterBottom>
                        Chương 1: Giới thiệu
                    </Typography>
                    <Typography paragraph>
                        Đây là nội dung giáo trình môn {subjectName}. Nội dung dài để kiểm tra responsive...
                    </Typography>
                    <Button variant="contained" href="https://example.com/pdf" target="_blank" sx={{ display: "block", mx: "auto", mb: 2 }}>
                        Tải PDF
                    </Button>
                    <Typography variant="h5" gutterBottom>
                        Chương 2: Cơ bản
                    </Typography>
                    <Typography paragraph>
                        Nội dung chương 2 với rất nhiều chữ để kiểm tra cuộn và responsive...
                    </Typography>
                    <img
                        src="https://via.placeholder.com/400"
                        alt="Hình minh họa"
                        style={{ display: "block", margin: "0 auto", maxWidth: "100%" }}
                    />
                    <Box sx={{ textAlign: "center", my: 2 }}>
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                            title="Video"
                            frameBorder="0"
                            allowFullScreen
                            style={{ maxWidth: "100%" }}
                        />
                    </Box>
                </Box>
            ),
        },
        {
            title: "Đề thi tham khảo",
            content: (
                <Box>
                    <Typography paragraph>Các đề thi tham khảo cho {subjectName}.</Typography>
                    <Button variant="outlined" href="https://example.com/exam" target="_blank" sx={{ display: "block", mx: "auto" }}>
                        Xem đề thi
                    </Button>
                </Box>
            ),
        },
        {
            title: "Tài liệu khác",
            content: (
                <Box>
                    <Typography paragraph>Tài liệu bổ sung với nội dung dài để kiểm tra...</Typography>
                    <img
                        src="https://via.placeholder.com/600"
                        alt="Tài liệu khác"
                        style={{ display: "block", margin: "0 auto", maxWidth: "100%" }}
                    />
                </Box>
            ),
        },
    ];

    return (
        <SubjectLayout
            subjectName={subjectName}
            contents={contents}
            comments={comments} // Truyền dữ liệu bình luận
            isLoggedIn={false} // Giả lập, thay bằng auth sau
        />
    );
}