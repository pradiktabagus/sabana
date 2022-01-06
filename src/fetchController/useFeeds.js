import { useEffect, useState } from "react";
import { Feeds } from "../api/controller/articleController";

export default function useFeeds({ offset, limit }) {
  const [loading, setLoading] = useState(false);
  const [ListData, setListData] = useState([]);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);

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
          setHasMore(article.length > 0);
        })
        .catch((err) => {
          const { data } = err;
          setError(data);
          setListData([]);
        })
        .finally(() => setLoading(false));
    }
    return () => {
      mount = false;
    };
  }, [offset, limit]);
  return { ListData, error, loading, hasMore };
}
