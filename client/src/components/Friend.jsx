import { PersonAddOutlined, PersonRemoveOutlined } from "@mui/icons-material";
<<<<<<< HEAD
import { Box, IconButton, Typography, useTheme, Avatar } from "@mui/material";
=======
import { Box, IconButton, Typography, useTheme } from "@mui/material";
>>>>>>> 7b8c6a1d2ac3344ae4d89c14395ee93afd4e6b31
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setFriends } from "state";
import FlexBetween from "./FlexBetween";
import UserImage from "./UserImage";
import { serverUrl } from "Constants";

const Friend = ({ friendId, name, subtitle, userPicturePath }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { _id } = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  const friends = useSelector((state) => state.user.friends);

<<<<<<< HEAD
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";
=======
  const { palette } = useTheme();
  const primaryLight = palette.primary.light;
  const primaryDark = palette.primary.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;
>>>>>>> 7b8c6a1d2ac3344ae4d89c14395ee93afd4e6b31

  const isFriend = friends.find((friend) => friend._id === friendId);

  const patchFriend = async () => {
    const response = await fetch(`${serverUrl}/users/${_id}/${friendId}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    dispatch(setFriends({ friends: data }));
  };

  return (
    <FlexBetween>
      <FlexBetween gap="1rem">
<<<<<<< HEAD
        <UserImage image={userPicturePath} size="48px" />
        <Box>
          <Typography
            onClick={() => {
              navigate(`/profile/${friendId}`);
              navigate(0);
            }}
            color="text.primary"
            variant="body1"
            fontWeight={600}
            fontSize="1rem"
            sx={{
              "&:hover": {
                color: theme.palette.primary.main,
                cursor: "pointer",
                textDecoration: "underline",
              },
              transition: "all 0.2s ease",
=======
        <UserImage image={userPicturePath} size="55px" />
        <Box
          onClick={() => {
            navigate(`/profile/${friendId}`);
            navigate(0);
          }}
        >
          <Typography
            color={main}
            variant="h5"
            fontWeight="500"
            sx={{
              "&:hover": {
                color: palette.primary.light,
                cursor: "pointer",
              },
>>>>>>> 7b8c6a1d2ac3344ae4d89c14395ee93afd4e6b31
            }}
          >
            {name}
          </Typography>
<<<<<<< HEAD
          <Typography
            color="text.secondary"
            fontSize="0.875rem"
            sx={{ mt: 0.5 }}
          >
=======
          <Typography color={medium} fontSize="0.75rem">
>>>>>>> 7b8c6a1d2ac3344ae4d89c14395ee93afd4e6b31
            {subtitle}
          </Typography>
        </Box>
      </FlexBetween>
<<<<<<< HEAD
      {_id !== friendId && (
        <IconButton
          onClick={() => patchFriend()}
          sx={{
            backgroundColor: theme.palette.primary.light + "20",
            padding: "0.5rem",
            "&:hover": {
              backgroundColor: theme.palette.primary.light + "30",
            },
          }}
        >
          {isFriend ? (
            <PersonRemoveOutlined
              sx={{
                color: theme.palette.primary.main,
                fontSize: "1.25rem"
              }}
            />
          ) : (
            <PersonAddOutlined
              sx={{
                color: theme.palette.primary.main,
                fontSize: "1.25rem"
              }}
            />
          )}
        </IconButton>
      )}
=======
      <IconButton
        onClick={() => patchFriend()}
        sx={{ backgroundColor: primaryLight, p: "0.6rem" }}
      >
        {isFriend ? (
          <PersonRemoveOutlined sx={{ color: primaryDark }} />
        ) : (
          <PersonAddOutlined sx={{ color: primaryDark }} />
        )}
      </IconButton>
>>>>>>> 7b8c6a1d2ac3344ae4d89c14395ee93afd4e6b31
    </FlexBetween>
  );
};

export default Friend;
