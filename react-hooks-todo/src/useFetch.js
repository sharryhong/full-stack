import { useState, useEffect } from "react";

// 이름을 use를 사용해서 커스텀훅을 만들면 useEffect사용시 react에서 라이프사이클훅 사용되게 해준다.
const useFetch = (callback, url) => {
  const [loading, setLoading] = useState(false);

  const fetchInitialData = async () => {
    setLoading(true);
    const response = await fetch(url);
    const initialData = await response.json();
    // test용 setTimeout
    setTimeout(() => {
      callback(initialData);
      setLoading(false);
    }, 500);
  };

  useEffect(() => {
    // 비동기처리시 함수호출
    fetchInitialData();
  }, []); // 한번만 실행. update시 실행안됨

  return loading;
};

export default useFetch;