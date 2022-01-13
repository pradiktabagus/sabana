import { useEffect, useState } from "react";
import { Feeds } from "../api/controller/articleController";

export default function useFeeds(props) {
  const { offset, limit } = props;
  const [loading, setLoading] = useState(false);
  const [ListData, setListData] = useState([]);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setListData([]);
  }, []);
  useEffect(() => {
    let mount = true;
    if (mount) {
      setLoading(true);
      setError(null);
      Feeds({ limit: limit, offset: offset })
        .then((res) => {
          const { article } = res.data;
          setListData((prevState) => {
            return [...new Set([...prevState, ...article])];
          });
          setHasMore(article.Search.length > 0);
        })
        .catch((err) => {
          const { data } = err;
          setError(data);
        });
    }
    return () => {
      mount = false;
    };
  }, []);
  return { ListData, error, loading, hasMore };
}
