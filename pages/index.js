import React, { Component } from "react";
import NewsList from "../components/News/NewsList";
import Navbar from "../components/Layout/Navbar";
import Input from "../components/Form/Input";
import CatagoriesBtns from "../components/Form/CatagoriesBtns";
import HeadlineSelect from "../components/Form/HeadlineSelect";
import BackBtn from "../components/Layout/BackBtn";
import SubmitBtn from "../components/Form/SubmitBtn";
import LoadingWheel from "../components/News/LoadingWheel";
import fetch from "isomorphic-unfetch";
import $ from "jquery";

import "../scss/style.scss";
class Index extends Component {
  state = {
    mode: "catagories",
    query: "",
    headlineTopic: "",
    newsLoading: false,
    news: [],
    error: ""
  };

  componentDidMount() {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .catch(err => console.error("Service worker registration failed", err));
    } else {
      console.log("Service worker not supported");
    }
  }

  handleTextInputChange = e => {
    this.setState({
      query: e.target.value
    });
  };

  handleTopicSelectChange = e => {
    this.setState({
      headlineTopic: e.target.value
    });
  };

  onTopicSubmit = topic => {
    const { mode } = this.state;
    if (mode === "topHeadlines") {
      this.setState({
        newsLoading: true
      });
      fetch(
        `https://newsapi.org/v2/top-headlines?country=us&category=${topic}&apiKey=5026a89ef4104655943e8a0c6697f480`
      )
        .then(res => res.json())
        .then(data =>
          this.setState({
            news: data.articles
          })
        );
      setTimeout(() => {
        this.setState({
          newsLoading: false
        });
      }, 1500);
    } else {
      if (topic !== "") {
        this.setState({
          newsLoading: true,
          query: ""
        });
        fetch(
          `https://newsapi.org/v2/everything?q=${topic}&apiKey=5026a89ef4104655943e8a0c6697f480`
        )
          .then(res => res.json())
          .then(data => {
            if (data.articles.length > 0) {
              return this.setState({
                error: "",
                news: data.articles
              });
            } else {
              this.setState({
                error: "We wheren't able to find any news with that search..."
              });
            }
          });
        setTimeout(() => {
          this.setState({
            newsLoading: false
          });
        }, 1500);
      } else {
        this.setState({
          error: "Please enter a topic to search for"
        });
      }
    }
  };

  onChooseNewsClick = () => {
    this.setState({
      mode: "chooseNews"
    });
  };

  onHeadlinesClick = () => {
    this.setState({
      mode: "topHeadlines"
    });
  };

  onBackToCatagoriesClick = () => {
    this.setState({
      mode: "catagories",
      query: "",
      headlineTopic: "",
      newsLoading: false,
      news: [],
      error: ""
    });
  };

  render() {
    const { query, mode, headlineTopic, news, newsLoading, error } = this.state;
    let modeDisplay;
    let newsRender;
    if (mode === "catagories") {
      modeDisplay = (
        <CatagoriesBtns
          onHeadlinesClick={this.onHeadlinesClick}
          onChooseNewsClick={this.onChooseNewsClick}
        />
      );
    } else if (mode === "chooseNews") {
      modeDisplay = (
        <Input
          onChange={this.handleTextInputChange}
          query={query}
          onTopicSubmit={this.onTopicSubmit}
        />
      );
    } else if (mode === "topHeadlines") {
      modeDisplay = (
        <HeadlineSelect onTopicSelect={this.handleTopicSelectChange} />
      );
    }

    if (mode === "chooseNews" || mode === "topHeadlines") {
      if (newsLoading) {
        newsRender = <LoadingWheel />;
      } else {
        newsRender = <NewsList news={news} error={error} />;
      }
    }
    return (
      <div>
        <Navbar onBrandClick={this.onBackToCatagoriesClick} />
        <div style={{ height: "150px", marginTop: "100px" }} className="row">
          <div className="col-md-2">
            {mode === "chooseNews" || mode === "topHeadlines" ? (
              <BackBtn onBackClick={this.onBackToCatagoriesClick} />
            ) : (
              ""
            )}
          </div>
          {modeDisplay}
        </div>
        <div className="row">
          <div className="col-md-2" />
          {mode === "chooseNews" || mode === "topHeadlines" ? (
            <SubmitBtn
              query={mode === "chooseNews" ? query : headlineTopic}
              onTopicSubmit={this.onTopicSubmit}
            />
          ) : (
            ""
          )}
          <div className="col-md-2" />
        </div>
        <div className="row">
          <div className="col-md-2" />
          {newsRender}
          <div className="col-md-2" />
        </div>
      </div>
    );
  }
}

export default Index;
