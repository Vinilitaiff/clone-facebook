import React, { Component } from "react";

import PostItem from "./PostItem";

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Avatar 1",
          avatar:
            "https://conteudo.imguol.com.br/c/entretenimento/38/2017/12/21/cena-de-avatar-2009-1513852401735_v2_450x600.jpg"
        },
        date: "25 Jul 2019",
        content: "Iae avatar",
        comments: [
          {
            id: 2,
            author: {
              name: "Avatar 2",
              avatar:
                "https://www.tribunapr.com.br/wp-content/uploads/sites/1/2009/12/17-12-09_alm1171209.png?a86372"
            },
            date: "04 Jul 2019",
            content: "Como vai avatar 1?"
          }
        ]
      }
    ]
  };

  render() {
    const { posts } = this.state;

    return (
      <div className="postlist">
        {posts.map(post => (
          <PostItem key={post.id} {...post} />
        ))}
      </div>
    );
  }
}

export default PostList;
