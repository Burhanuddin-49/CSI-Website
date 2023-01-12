import React from "react";
import { useParams } from "react-router-dom";

import profile1 from "../../assets/profile1.jpg";
import Ai_image from "../../assets/AI_img.jpg";
import ShareIcon from "@mui/icons-material/Share";
import Save from "@mui/icons-material/Save";

import logo from "../../assets/CSI.png";

import "./Blog.css";

const data = {
  Editor: "Harris Sockel",
  Editor_profile_pic: profile1,
  Headline: "What do you think about AI-generated writing?",
  Date: "Dec 21 2022",
  img: Ai_image,
  Article_P1:
    "If you’ve been following along, it’s been a big moment for this topic. Last week, OpenAI released ChatGPT (GPT stands for “Generative Pre-trained Transformer”), a natural.... ",
  Article_P2:
    "The programs using these language models are getting really, really good at quickly generating a lot of very readable text from prompts and example writing, and that’s where the issue arises for us: As an open platform, what’s the right policy or approach to this new kind of content?",
  Article_P3: "Medium is home to some of the best coding tutorials and resources on the web. Many of us at Medium are developers, so we know how useful these can be when learning new skills or working through a tough engineering problem.It’s our job to help writers share their expertise in the best way possible. For technical writers, that’s partly about making it easy to embed great-looking code blocks in stories. Medium has supported code blocks for a while, but they’ve been rendered in plain text which isn’t ideal for readability.",
};

const ArticleDetails = () => {
  const { article } = useParams();

  console.log(article.Editor);
  return (
    <div className="Details">
      <div className="Details_article">

        <div className="article_header">
          <div className="publisher_img">
            <img style={{height: '3.5rem', width: '3.5rem', borderRadius: '50%'}} src={profile1} />
            
          </div>
          <div className="publisher__nameDate">
            <h6 style={{ fontWeight: 500, color: "white" }}>{data.Editor}</h6>
            <p style={{ color: "white", fontSize: "0.8rem" }}>{data.Date}</p>
          </div>
          <div style={{}}>
            <ShareIcon style={{ color: "white", marginLeft: '25rem'}} />
          </div>
        </div>

        <div className="article__text">
          <h3>{data.Headline}</h3>
          <p>{data.Article_P1}</p>
          <img style={{height: '15.5rem', width: '15.5rem', borderRadius: '1%'}} src={Ai_image} />
          <p>{data.Article_P2}</p>
          <p>{data.Article_P3}</p>
        </div>
      </div>
      <div className="Details_Publisher">
          <div>
            <img className="logo_csi" src={logo} alt="" />
          </div>
          <p
            style={{
              width: "100px",
              color: "white",
             fontSize: "0.8rem",
              marginTop: '2rem'
            }}
          >
            The official CSI DIT blog
          </p>
      </div>
    </div>
  );
};

export default ArticleDetails;
