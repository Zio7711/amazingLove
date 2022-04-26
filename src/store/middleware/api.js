import { apiCallBegan, apiCallFailed, apiCallSucceeded } from "../apiActions";

import apiClient from "../../../api/client";
import { setLoadingState } from "../globalSlice";

const api =
  ({ dispatch, getState }) =>
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
      dispatch(setLoadingState(false));

      return console.warn("error in api request", result.data.message);
    }

    //general actions
    // dispatch(apiCallSucceeded(result.data));

    //specific action
    //pass socket into next action
    const socket = getState().global.socket;
    if (onSuccess)
      dispatch({ type: onSuccess, payload: { ...result.data, socket } });
    dispatch(setLoadingState(false));
  };

export default api;
