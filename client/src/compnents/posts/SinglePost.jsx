import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Badge from "react-bootstrap/Badge";
import ActionButtons from "./ActionButtons";
import userThumb from "../../assets/user.png";

const SinglePost = ({ post: { _id, status, title, description, url } }) => {
  return (
    // <Card
    //   className="shadow"
    //   border={
    //     status === "LEARNED"
    //       ? "success"
    //       : status === "LEARNING"
    //       ? "warning"
    //       : "danger"
    //   }
    // >
    //   <Card.Body>
    //     <Card.Title>
    //       <Row>
    //         <Col>
    //           <p className="post-title">{title}</p>
    //           <Badge
    //             pill
    //             bg={
    //               status === "LEARNED"
    //                 ? "success"
    //                 : status === "LEARNING"
    //                 ? "warning"
    //                 : "danger"
    //             }
    //           >
    //             {status}
    //           </Badge>
    //         </Col>
    //         <Col className="text-right">
    //           <ActionButtons url={url} _id={_id} />
    //         </Col>
    //       </Row>
    //     </Card.Title>
    //     <Card.Text>{description}</Card.Text>
    //   </Card.Body>
    // </Card>
    <div className="card">
      <div className="card__preview">
        <img
          src={
            "https://global-uploads.webflow.com/5f59f5829ccb43e646633b1d/61dff6b94a2f755042155cf7_How-Reacte-Native-can-save-you-business-cover.png"
          }
          alt=""
          className="card__pic"
        />
      </div>
      <div className="card__body">
        <div className="card__title h6" style={{ height: "24px" }}>
          {title}
        </div>
        <div className="card__game" style={{ margin: "8px 0" }}>
          {description}
        </div>
        <div className="card__user">
          <div className="card__ava">
            <img src={userThumb} alt="" className="card__pic" />
          </div>
          <div className="card__desc">
            <div className="card__man confirm">Jason Aa</div>
            {/* <div className="card__game">{title}</div> */}
          </div>
        </div>
      </div>
      <div className="card__foot">
        <div
          className="live"
          style={{
            backgroundColor:
              status === "LEARNED"
                ? "#48e431"
                : status === "LEARNING"
                ? ""
                : "#31c0e4",
          }}
        >
          {status}
        </div>
        <div className="status blue">4.2K Watching</div>{" "}
      </div>{" "}
      <div className="card__foot actions">
        <ActionButtons url={url} _id={_id} />
      </div>
    </div>
  );
};

export default SinglePost;
