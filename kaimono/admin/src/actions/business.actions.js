import agent from "../api/agent";
import {
  ArbellaOfficeBusinessId,
  ArbellaOfficeBusinessName,
  ArbellaOfficeUserId,
  ErrorOccurredPleaseContactAdmin,
  GET_BUSINESS_USER,
  GetBusinessUser,
} from "../constants/constants";

import toast from "react-hot-toast";

export const getByUser = (businessId, userId) => async (dispatch) => {
  const response = await agent.get(GetBusinessUser(businessId, userId));
  if (response.status === 200) {
    localStorage.setItem(ArbellaOfficeBusinessId, response.data.Id);
    localStorage.setItem(ArbellaOfficeUserId, response.data.UserId);
    localStorage.setItem(ArbellaOfficeBusinessName, response.data.Name);
    dispatch({
      type: GET_BUSINESS_USER,
      payload: response.data,
    });
  } else {
    console.error(response.data.errors);
    toast.error(ErrorOccurredPleaseContactAdmin);
  }
};
