import "./profile.scss";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../components/posts/Posts";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../fetchdata";
import { useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Update from "../../components/update/update";
const Profile = () => {
  const { currentUser } = useContext(AuthContext);

  const [update, setUpdate] = useState(false);

  const location = useLocation();
  const userId = parseInt(location.pathname.split("/")[2]);

  const { isLoading, error, data } = useQuery(["user", userId], () =>
    axiosInstance.get("/users/find/" + userId).then((res) => {
      return res.data;
    })
  );

  const { isLoading: relationIsLoading, data: relationshipData } = useQuery(
    ["relationships"],
    () =>
      axiosInstance
        .get("/relationships?followedUserId=" + userId)
        .then((res) => {
          return res.data;
        })
  );

  const queryClient = useQueryClient();
  const mutation = useMutation(
    (following) => {
      if (following) {
        return axiosInstance.delete("/relationships?userId=" + userId);
      } else {
        return axiosInstance.post("/relationships", { userId });
      }
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["relationships"]);
        queryClient.invalidateQueries(["user"]);
      },
    }
  );

  const handleFollow = () => {
    mutation.mutate(relationshipData.includes(currentUser.id));
  };

  return (
    <div className="profile">
      {isLoading ? (
        "loading"
      ) : (
        <>
          <div className="images">
            <img src={data.cover_pic} alt="" className="cover" />
            <img
              src={`/upload/` + data.profile_pic}
              alt=""
              className="profilePic"
            />
          </div>
          <div className="profileContainer">
            <div className="uInfo">
              <div className="left">
                <a href="http://facebook.com">
                  <FacebookTwoToneIcon fontSize="large" />
                </a>
                <a href="http://facebook.com">
                  <InstagramIcon fontSize="large" />
                </a>
                <a href="http://facebook.com">
                  <TwitterIcon fontSize="large" />
                </a>
                <a href="http://facebook.com">
                  <LinkedInIcon fontSize="large" />
                </a>
                <a href="http://facebook.com">
                  <PinterestIcon fontSize="large" />
                </a>
              </div>
              <div className="center">
                <span>{data.username}</span>
                <div className="info">
                  <div className="item">
                    <PlaceIcon />
                    <span>USA</span>
                  </div>
                  <div className="item">
                    <LanguageIcon />
                    <span>lama.dev</span>
                  </div>
                </div>
                {relationIsLoading ? (
                  "loading"
                ) : userId === currentUser.id ? (
                  <button
                    onClick={() => {
                      setUpdate(true);
                    }}
                  >
                    Edit Profile
                  </button>
                ) : relationshipData &&
                  relationshipData.includes(currentUser.id) ? (
                  <button onClick={handleFollow}>Following</button>
                ) : (
                  <button onClick={handleFollow}>Follow</button>
                )}
              </div>
              <div className="right">
                <EmailOutlinedIcon />
                <MoreVertIcon />
              </div>
            </div>
            <Posts userId={userId} />
          </div>
        </>
      )}
      {update && <Update setUpdate={setUpdate} user={currentUser} />}
    </div>
  );
};

export default Profile;
