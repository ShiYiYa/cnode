import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Comment from '../../components/comment/Comment';
import axios from 'axios';
import './topic.css';
import { Spin, message } from 'antd';

class Topic extends Component {
  constructor() {
    super();
    this.state = {
      data: '',
      status: false
    };
  }
  componentDidMount() {
    const id = this.props.location.pathname;
    axios.get(id).then(res => {
      const data = res.data.data;
      this.setState({ data: data, status: true });
      document.title = data.title;
    });
  }
  replyTopic = () => {
    const topicId = this.props.location.pathname.slice(7);
    axios
      .post(`/topic/${topicId}/replies`, {
        accesstoken: localStorage.token,
        content: this.textArea.value
      })
      .then(res => {
        if (res.data.success) {
          message.warning('回复成功');
          window.location.reload();
        } else {
          message.warning('error');
        }
      });
  };
  render() {
    const topicId = this.props.location.pathname.slice(7);
    return (
      <div>
        <header className="topic_nav">
          <div onClick={() => this.props.history.goBack()}>返回</div>
          <div>
            <Link to={`${this.props.location.pathname}/edit`}>编辑</Link>
          </div>
        </header>
        {this.state.status ? (
          <section className="topic">
            <div className="section_header">
              <h2>{this.state.data.title}</h2>
              <div className="topic-meta">
                <Link to={`/user/${this.state.data.author.loginname}`}>
                  <img
                    alt="author"
                    className="author"
                    src={this.state.data.author.avatar_url}
                  />
                </Link>
                <div
                  style={{ display: 'inline-block' }}
                  className="topic-description"
                >
                  <p>
                    <b>{this.state.data.author.loginname}</b>
                  </p>
                  <span>
                    {this.state.data.visit_count}次观看 · 发表于{moment(
                      `${this.state.data.create_at}`
                    ).fromNow()}
                  </span>
                </div>
              </div>
            </div>
            <div
              className="topic_contents"
              dangerouslySetInnerHTML={{
                __html: this.state.data.content
              }}
            />
            <Comment comment={this.state.data.replies} topicId={topicId} />
            <div id="respond">
              <div className="respond-header">
                <p>添加回复</p>
              </div>
              <div className="text">
                <textarea
                  ref={textArea => {
                    this.textArea = textArea;
                  }}
                />
              </div>
              <input onClick={this.replyTopic} type="submit" value="回复" />
            </div>
          </section>
        ) : (
          <div className="center">
            <Spin size="large" />
          </div>
        )};
      </div>
    );
  }
}
export default Topic;
