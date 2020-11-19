export default (field, axiosMethod, params, state, reducer, dispatch) => {
  (async () => {
    const { data } = await axiosMethod(params);
    dispatch({
      type: `home/${reducer}`,
      data: { [state]: data[field] },
    });
  })();
};
