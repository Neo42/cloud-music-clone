import { useEffect } from 'react';

export default (field, axiosMethod, params, setData) => {
  useEffect(() => {
    (async () => {
      const { data } = await axiosMethod(params);
      setData(data[field]);
    })();
  }, []);
};
