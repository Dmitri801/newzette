import React, { Component } from "react";
import { Spring } from "react-spring";
class NewsList extends Component {
  render() {
    const { news, error } = this.props;
    return (
      <div className="col-md-8 d-flex flex-column justify-content-center align-items-center">
        {error === "" ? (
          <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
            {styles => (
              <div style={styles}>
                {news.map(newsItem => (
                  <div className="list" key={newsItem.publishedAt}>
                    <a
                      className="newsImage"
                      href={newsItem.url}
                      target="_blank"
                    >
                      <img
                        className="img-fluid img-thumbnail mb-3 mt-2"
                        src={
                          newsItem.urlToImage !== null
                            ? newsItem.urlToImage
                            : "http://www.pbs.org/program/lunchbox_plugins/s/photogallery/img/no-image-available.jpg"
                        }
                      />
                    </a>
                    <p className="source">{newsItem.source.name}</p>
                    <p className="title">{newsItem.title}</p>
                    <p className="description">{newsItem.description}</p>
                  </div>
                ))}
              </div>
            )}
          </Spring>
        ) : (
          <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
            {styles => (
              <div style={styles} className="alert alert-danger" role="alert">
                {error}
              </div>
            )}
          </Spring>
        )}
      </div>
    );
  }
}

export default NewsList;
