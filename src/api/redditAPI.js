export const fetchComments = async (props) => {
  // const { subreddit, postId } = props;

  const URL = `https://www.reddit.com/r/home/comments/r52zch.json`;

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
