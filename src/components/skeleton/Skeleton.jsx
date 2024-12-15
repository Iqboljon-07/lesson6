import React from "react";
import "./Skeleton.css";
function Skeleton({ props }) {
  return (
    <div className="skeleton">
      {Array(props)
        .fill()
        .map((_, ind) => (
          <div key={ind} className="skeleton_item">
            <div className="skeleton_circle">
              <span className="loader"></span>
            </div>

            <div className="skeleton_circle  skeleton_animation"></div>

            <div className="skeleton_circle  skeleton_animation"></div>
            <div className="skeleton_circle  skeleton_animation"></div>
          </div>
        ))}
    </div>
  );
}

export default Skeleton;
