import {
  ChatBubbleOutlineOutlined,
  FavoriteBorderOutlined,
  FavoriteOutlined,
  ShareOutlined,
  MoreVert,
} from "@mui/icons-material";
import {
  Box,
  Divider,
  IconButton,
  Typography,
  useTheme,
  Card,
  CardContent,
  CardActions,
  Collapse,
  Avatar,
} from "@mui/material";
import { serverUrl } from "Constants";
import FlexBetween from "components/FlexBetween";
import Friend from "components/Friend";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPost } from "state";
import { motion, AnimatePresence } from "framer-motion";
import { formatDistanceToNow } from "date-fns";

const PostWidget = ({
  postId,
  postUserId,
  name,
  description,
  location,
  picturePath,
  userPicturePath,
  likes,
  comments,
  createdAt,
}) => {
  const [isComments, setIsComments] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);
  const loggedInUserId = useSelector((state) => state.user._id);
  const likedByUser = Boolean(likes[loggedInUserId]);
  const likeCount = Object.keys(likes).length;

  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";
  const primary = theme.palette.primary.main;

  const patchLike = async () => {
    setIsLiked(true);
    setTimeout(() => setIsLiked(false), 600);

    const response = await fetch(`${serverUrl}/posts/${postId}/like`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId: loggedInUserId }),
    });
    const updatedPost = await response.json();
    dispatch(setPost({ post: updatedPost }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -4 }}
    >
      <Card
        sx={{
          mb: 3,
          borderRadius: "16px",
          boxShadow: isDarkMode
            ? "0 4px 20px rgba(0, 0, 0, 0.3)"
            : "0 4px 20px rgba(0, 0, 0, 0.08)",
          border: `1px solid ${isDarkMode ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)"}`,
          transition: "all 0.3s ease",
          overflow: "hidden",
          "&:hover": {
            boxShadow: isDarkMode
              ? "0 8px 30px rgba(0, 0, 0, 0.4)"
              : "0 8px 30px rgba(0, 0, 0, 0.12)",
          },
        }}
      >
        <CardContent sx={{ p: 2.5 }}>
          {/* Header */}
          <FlexBetween mb={1.5}>
            <Friend
              friendId={postUserId}
              name={name}
              subtitle={location}
              userPicturePath={userPicturePath}
            />
            <IconButton size="small">
              <MoreVert fontSize="small" />
            </IconButton>
          </FlexBetween>

          {/* Description */}
          <Typography
            variant="body1"
            sx={{
              mb: picturePath ? 2 : 0,
              lineHeight: 1.6,
              color: theme.palette.text.primary,
            }}
          >
            {description}
          </Typography>

          {/* Image */}
          {picturePath && (
            <Box
              sx={{
                borderRadius: "12px",
                overflow: "hidden",
                backgroundColor: isDarkMode ? "rgba(255, 255, 255, 0.02)" : "rgba(0, 0, 0, 0.02)",
              }}
            >
              <motion.img
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                width="100%"
                height="auto"
                alt="post"
                style={{
                  display: "block",
                  maxHeight: "500px",
                  objectFit: "cover",
                }}
                src={`${serverUrl}/assets/${picturePath}`}
              />
            </Box>
          )}
        </CardContent>

        <CardActions sx={{ px: 2.5, pb: 2, pt: 0 }}>
          <Box sx={{ width: "100%" }}>
            {/* Action Buttons */}
            <FlexBetween>
              <Box sx={{ display: "flex", gap: 0.5, alignItems: "center" }}>
                {/* Like Button */}
                <motion.div
                  whileTap={{ scale: 0.9 }}
                  animate={isLiked ? { scale: [1, 1.3, 1] } : {}}
                  transition={{ duration: 0.3 }}
                >
                  <IconButton
                    onClick={patchLike}
                    sx={{
                      "&:hover": {
                        backgroundColor: primary + "15",
                      },
                    }}
                  >
                    {likedByUser ? (
                      <FavoriteOutlined sx={{ color: "#EF4444", fontSize: "22px" }} />
                    ) : (
                      <FavoriteBorderOutlined sx={{ fontSize: "22px" }} />
                    )}
                  </IconButton>
                </motion.div>
                <Typography
                  variant="body2"
                  fontWeight={500}
                  sx={{ minWidth: "30px" }}
                >
                  {likeCount}
                </Typography>

                {/* Comment Button */}
                <IconButton
                  onClick={() => setIsComments(!isComments)}
                  sx={{
                    ml: 1,
                    "&:hover": {
                      backgroundColor: primary + "15",
                    },
                  }}
                >
                  <ChatBubbleOutlineOutlined sx={{ fontSize: "22px" }} />
                </IconButton>
                <Typography variant="body2" fontWeight={500}>
                  {comments.length}
                </Typography>
              </Box>

              {/* Share Button */}
              <IconButton
                sx={{
                  "&:hover": {
                    backgroundColor: primary + "15",
                  },
                }}
              >
                <ShareOutlined sx={{ fontSize: "22px" }} />
              </IconButton>
            </FlexBetween>

            {/* Comments Section */}
            <Collapse in={isComments} timeout="auto" unmountOnExit>
              <Box mt={2}>
                <Divider sx={{ mb: 2 }} />
                <AnimatePresence>
                  {comments.length > 0 ? (
                    comments.map((comment, i) => (
                      <motion.div
                        key={`${name}-${i}`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <Box
                          sx={{
                            mb: 1.5,
                            p: 1.5,
                            borderRadius: "12px",
                            backgroundColor: isDarkMode
                              ? "rgba(255, 255, 255, 0.03)"
                              : "rgba(0, 0, 0, 0.02)",
                          }}
                        >
                          <Typography
                            variant="body2"
                            sx={{
                              color: theme.palette.text.primary,
                              lineHeight: 1.5,
                            }}
                          >
                            {comment}
                          </Typography>
                        </Box>
                      </motion.div>
                    ))
                  ) : (
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      textAlign="center"
                      py={2}
                    >
                      No comments yet. Be the first to comment!
                    </Typography>
                  )}
                </AnimatePresence>
              </Box>
            </Collapse>
          </Box>
        </CardActions>
      </Card>
    </motion.div>
  );
};

export default PostWidget;
