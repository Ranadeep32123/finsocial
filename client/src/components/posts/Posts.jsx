import { axiosInstance } from "../../fetchdata";
import Post from "../post/Post";
import "./posts.scss";
import { useQuery } from "@tanstack/react-query";

const Posts = ({ userId }) => {
  const route = userId ? `/posts?userId=${userId}` : "/posts";
  const { isLoading, error, data } = useQuery(["posts"], () =>
    axiosInstance.get(route).then((res) => {
      return res.data;
    })
  );

  return (
    <div className="posts">
      {error
        ? "Something went wrong"
        : isLoading
        ? "Loading..."
        : data.map((post) => <Post post={post} key={post.id} />)}
    </div>
  );
};

export default Posts;
