import Button from "react-bootstrap/Button";
import playIcon from "../../assets/play-video.svg";
import editIcon from "../../assets/draw.svg";
import deleteIcon from "../../assets/delete.png";
import { useContext } from "react";
import { PostContext } from "../../contexts/postContext";

const ActionButtons = ({ url, _id }) => {
  const { deletePost, findPost, setShowUpdatePostModal } =
    useContext(PostContext);
  const choosePost = (postId) => {
    findPost(postId);
    setShowUpdatePostModal(true);
  };
  return (
    <div className="action__buttons">
      <a className="post-button" href={url} target="_blank">
        <img src={playIcon} alt="play" width="24" />
      </a>
      <div className="post-button" onClick={choosePost.bind(this, _id)}>
        <img src={editIcon} alt="edit" width="24" />
      </div>
      <div className="post-button" onClick={deletePost.bind(this, _id)}>
        <img src={deleteIcon} alt="delete" width="24" />
      </div>
    </div>
  );
};

export default ActionButtons;
