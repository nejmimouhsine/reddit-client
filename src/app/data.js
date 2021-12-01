/*
response.data.children.data: {
  id,
  subreddit: subreddit.toLowerCase(),
  author,
  title,
  score,
  num_comments,
  created_utc -> format to time ago,
}

URL: "https://www.reddit.com/r/python === `${subreddit}`/comments/r4zxhp === `${id}` .json";
response[1].data.children -> .data = {
  author,
  body,
  created -> format to time ago,
};
*/

/*
useEffect(() => {
    fetch('https://www.reddit.com/r/popular.json')
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        const myData = response.data.children.map((item) => item.data);
        return myData;
      })
      .then((response) => {
        const myReddit = response.map(
          ({
            id,
            subreddit,
            author,
            title,
            score,
            num_comments,
            created_utc,
          }) => {
            const reddit = {
              id,
              subreddit,
              author,
              title,
              score,
              num_comments,
              created_utc,
            };
            return reddit;
          }
        );
        console.log(myReddit);
      });
  }, []);
  */
