export const fetchPosts = async (name = 'popular') => {
  const URI = `https://www.reddit.com/r/${name}.json`;

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
