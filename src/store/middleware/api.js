import { apiCallBegan, apiCallFailed, apiCallSucceeded } from "../apiActions";

import apiClient from "../../../api/client";
import { setLoadingState } from "../globalSlice";

const api =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== apiCallBegan.type) return next(action);
    next(action);

    //start loading, set it to true
    dispatch(setLoadingState(true));
    const { url, method, data, onSuccess } = action.payload;

    // const result = await apiClient.request({ url, method, data });
    const result = await apiClient[method](url, data);

    // end loading, set it to false

    if (!result.ok) {
      // dispatch({ type: onError, payload: result.data.message });

      return console.warn("error in api request", result.data.message);
    }

    //general actions
    // dispatch(apiCallSucceeded(result.data));

    //specific action
    if (onSuccess) dispatch({ type: onSuccess, payload: result.data });
    dispatch(setLoadingState(false));
  };

export default api;
