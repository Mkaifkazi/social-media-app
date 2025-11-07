import {
  EditOutlined,
  DeleteOutlined,
  ImageOutlined,
  CloseOutlined,
  EmojiEmotionsOutlined,
} from "@mui/icons-material";
import {
  Box,
  Divider,
  Typography,
  InputBase,
  useTheme,
  Button,
  IconButton,
  useMediaQuery,
  CircularProgress,
  Avatar,

const MyPostWidget = ({ picturePath }) => {
  const dispatch = useDispatch();
  const [isImage, setIsImage] = useState(false);
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [post, setPost] = useState("");
  const [isPosting, setIsPosting] = useState(false);
  const theme = useTheme();
  const { _id, firstName, lastName } = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const isDarkMode = theme.palette.mode === "dark";

  const handleImageSelect = (acceptedFiles) => {
    const file = acceptedFiles[0];
    setImage(file);

    // Create preview URL
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveImage = () => {
    setImage(null);
    setImagePreview(null);
    setIsImage(false);
  };

  const handlePost = async () => {
    if (!post.trim() && !image) {
      toast.error("Please write something or add an image!");
      return;
    }

    setIsPosting(true);
    try {
      const formData = new FormData();
      formData.append("userId", _id);
      formData.append("description", post);
      if (image) {
        formData.append("picture", image);
        formData.append("picturePath", image.name);
      }

      const response = await fetch(`${serverUrl}/posts`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });

      if (response.ok) {
        const posts = await response.json();
        dispatch(setPosts({ posts }));
        setImage(null);
        setImagePreview(null);
        setPost("");
        setIsImage(false);
        toast.success("Post created successfully! 🎉");
      } else {
        toast.error("Failed to create post. Please try again.");
      }
    } catch (error) {
      console.error("Error creating post:", error);
      toast.error("Network error. Please check your connection.");
    } finally {
      setIsPosting(false);
    }
  };

  return (
    <WidgetWrapper sx={{ mb: 3 }}>
      {/* User Input Section */}
      <FlexBetween gap="1rem" mb={2}>
        <UserImage image={picturePath} size="48px" />
        <InputBase
          placeholder={`What's on your mind, ${firstName}?`}
          onChange={(e) => setPost(e.target.value)}
          value={post}
          multiline
          disabled={isPosting}
          sx={{
            width: "100%",
            backgroundColor: isDarkMode
              ? "rgba(255, 255, 255, 0.05)"
              : "rgba(0, 0, 0, 0.03)",
            borderRadius: "24px",
            padding: "0.875rem 1.5rem",
            fontSize: "0.95rem",
            border: `1px solid ${isDarkMode ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)"}`,
            transition: "all 0.2s ease",
            "&:hover": {
              backgroundColor: isDarkMode
                ? "rgba(255, 255, 255, 0.07)"
                : "rgba(0, 0, 0, 0.05)",
            },
            "&:focus-within": {
              backgroundColor: isDarkMode
                ? "rgba(255, 255, 255, 0.08)"
                : "rgba(0, 0, 0, 0.06)",
              borderColor: theme.palette.primary.main,
            },
          }}
        />
      </FlexBetween>

      {/* Image Preview */}
      <AnimatePresence>
        {imagePreview && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Box
              sx={{
                position: "relative",
                borderRadius: "16px",
                overflow: "hidden",
                mb: 2,
                border: `1px solid ${isDarkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"}`,
              }}
            >
              <img
                src={imagePreview}
                alt="Preview"
                style={{
                  width: "100%",
                  maxHeight: "400px",
                  objectFit: "cover",
                  display: "block",
                }}
              />
              <IconButton
                onClick={handleRemoveImage}
                disabled={isPosting}
                sx={{
                  position: "absolute",
                  top: 12,
                  right: 12,
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                  backdropFilter: "blur(10px)",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                  },
                }}
              >
                <CloseOutlined />
              </IconButton>
              <Box
                sx={{
                  position: "absolute",
                  bottom: 12,
                  left: 12,
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                  backdropFilter: "blur(10px)",
                  color: "white",
                  padding: "0.5rem 1rem",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <Typography variant="caption" fontWeight={500}>
                  {image?.name}
                </Typography>
              </Box>
            </Box>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Dropzone (when image button clicked but no image yet) */}
      <AnimatePresence>
        {isImage && !image && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Box mb={2}>
              <Dropzone
                acceptedFiles=".jpg,.jpeg,.png,.gif"
                multiple={false}
                onDrop={handleImageSelect}
                disabled={isPosting}
              >
                {({ getRootProps, getInputProps, isDragActive }) => (
                  <Box
                    {...getRootProps()}
                    sx={{
                      border: `2px dashed ${isDragActive ? theme.palette.primary.main : isDarkMode ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.2)"}`,
                      borderRadius: "16px",
                      padding: "2rem",
                      textAlign: "center",
                      cursor: "pointer",
                      backgroundColor: isDragActive
                        ? theme.palette.primary.light + "10"
                        : isDarkMode
                        ? "rgba(255, 255, 255, 0.02)"
                        : "rgba(0, 0, 0, 0.01)",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        backgroundColor: isDarkMode
                          ? "rgba(255, 255, 255, 0.04)"
                          : "rgba(0, 0, 0, 0.02)",
                        borderColor: theme.palette.primary.main,
                      },
                    }}
                  >
                    <input {...getInputProps()} />
                    <ImageOutlined
                      sx={{
                        fontSize: "3rem",
                        color: theme.palette.primary.main,
                        mb: 1,
                      }}
                    />
                    <Typography variant="body1" fontWeight={500} mb={0.5}>
                      {isDragActive ? "Drop your image here" : "Click or drag to upload"}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Supports: JPG, JPEG, PNG, GIF
                    </Typography>
                  </Box>
                )}
              </Dropzone>
            </Box>
          </motion.div>
        )}
      </AnimatePresence>

      <Divider sx={{ mb: 2 }} />

      {/* Action Buttons */}
      <FlexBetween>
        <Box display="flex" gap={isNonMobileScreens ? 2 : 1}>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={() => setIsImage(!isImage)}
              disabled={isPosting}
              startIcon={<ImageOutlined />}
              sx={{
                color: theme.palette.primary.main,
                textTransform: "none",
                fontWeight: 500,
                fontSize: "0.9rem",
                padding: isNonMobileScreens ? "0.5rem 1rem" : "0.5rem",
                borderRadius: "12px",
                "&:hover": {
                  backgroundColor: theme.palette.primary.light + "15",
                },
              }}
            >
              {isNonMobileScreens && "Photo"}
            </Button>
          </motion.div>

          {isNonMobileScreens && (
            <Button
              disabled
              startIcon={<EmojiEmotionsOutlined />}
              sx={{
                color: theme.palette.text.secondary,
                textTransform: "none",
                fontWeight: 500,
                fontSize: "0.9rem",
                padding: "0.5rem 1rem",
                borderRadius: "12px",
                opacity: 0.5,
              }}
            >
              Feeling
            </Button>
          )}
        </Box>

        <motion.div
          whileHover={{ scale: isPosting || (!post.trim() && !image) ? 1 : 1.03 }}
          whileTap={{ scale: isPosting || (!post.trim() && !image) ? 1 : 0.98 }}
        >
          <Button
            disabled={isPosting || (!post.trim() && !image)}
            onClick={handlePost}
            sx={{
              background: (!post.trim() && !image) || isPosting
                ? theme.palette.neutral.medium
                : `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.accent?.main || theme.palette.primary.dark} 100%)`,
              color: (!post.trim() && !image) || isPosting
                ? theme.palette.neutral.light
                : "#FFFFFF",
              borderRadius: "24px",
              padding: "0.6rem 2rem",
              fontWeight: 600,
              fontSize: "0.95rem",
              textTransform: "none",
              minWidth: "100px",
              boxShadow: (!post.trim() && !image) || isPosting
                ? "none"
                : "0px 4px 12px rgba(59, 130, 246, 0.25)",
              "&:hover": {
                boxShadow: (!post.trim() && !image) || isPosting
                  ? "none"
                  : "0px 6px 16px rgba(59, 130, 246, 0.35)",
              },
              "&:disabled": {
                opacity: 1,
              },
            }}
          >
            {isPosting ? (
              <CircularProgress size={20} sx={{ color: "#FFFFFF" }} />
            ) : (
              "Post"
            )}
          </Button>
        </motion.div>
      </FlexBetween>

      {/* Character Count (optional) */}
      {post.length > 0 && (
        <Box mt={1} textAlign="right">
          <Typography
            variant="caption"
            color={post.length > 500 ? "error" : "text.secondary"}
          >
            {post.length} / 500
          </Typography>
        </Box>
      )}
    </WidgetWrapper>
  );
};

export default MyPostWidget;
