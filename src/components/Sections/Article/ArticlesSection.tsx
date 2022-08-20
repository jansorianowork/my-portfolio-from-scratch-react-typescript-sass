import React from "react";
import { articlesDetails } from "./../../../assets/constants";
const ArticlesSection = () => {
  return (
    <div className="articles">
      <h1>Latest Articles</h1>
      <div className="row">
        {articlesDetails.map((articleData) => (
          <div className="col-lg-3 col-md-6">
            <div className="card">
              <img
                src={articleData.imgSrc}
                className="card-img-top"
                alt="article img"
              />
              <div className="card-body">
                <h6 className="card-subtitle mb-2 text-muted">{articleData.title}</h6>
                <p className="card-text">{articleData.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticlesSection;
