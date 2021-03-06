export const fetchPosts = async (subreddit = 'popular') => {
  const URI = `https://www.reddit.com/r/${subreddit}.json`;

  return await fetch(URI)
    .then((response) => response.json())
    .then((response) => response.data.children.map((item) => item.data))
    .then((response) => {
      const redditPosts = response.map(
        ({
          id,
          subreddit,
          author,
          title,
          score,
          num_comments,
          created_utc,
          thumbnail,
        }) => {
          const redditPost = {
            id,
            subreddit,
            author,
            title,
            score,
            num_comments,
            created_utc,
            thumbnail,
            comments: [],
          };
          return redditPost;
        }
      );
      return redditPosts.reduce(
        (currentPosts, v) => ({ ...currentPosts, [v.id]: v }),
        {}
      );
    });
};

export const fetchComments = async (postId) => {
  const URL = `https://www.reddit.com/r/popular/comments/${postId}.json`;

  return await fetch(URL)
    .then((res) => res.json())
    .then((res) => res[1].data.children.map((comment) => comment.data))
    .then((data) => {
      const postComments = data.map((comment) => {
        const { id, author, body, created } = comment;

        const postComment = {
          id,
          author,
          body,
          created,
        };

        return postComment;
      });

      return { ...postComments };
    });
};
