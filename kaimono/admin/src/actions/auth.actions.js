import agent from "../api/agent";
import {
  OfficeBranchId,
  OfficeBusinessId,
  OfficeUserId,
  OfficeUserPhoneNumber,
  OfficeUserToken,
  POST_LOGIN_USER,
  PostLoginUser,
} from "../constants/constants";

export const loginUser = (email, password) => (dispatch) => {
  const response = agent.post(PostLoginUser(email, password));
  if (response.status === 200) {
    localStorage.setItem(OfficeUserId, response.data.data.auth.User);
    localStorage.setItem(OfficeUserToken, response.data.Token);
    localStorage.setItem(OfficeBranchId, response.data.BranchId);
    localStorage.setItem(OfficeBusinessId, response.data.BusinessId);
    localStorage.setItem(OfficeUserPhoneNumber, response.data.PhoneNumber);

    dispatch({
      type: POST_LOGIN_USER,
      payload: response.data,
    });
  }
};
