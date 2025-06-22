//ApiEndpoints

export const GetBusinessUser = (businessId, userId) =>
  `merchant/business/${businessId}/${userId}`;
export const PostLoginUser = (email, password) =>
  `merchant/business/${email}/${password}`;

//Action Constants
export const GET_BUSINESS_USER = "GET_BUSINESS_USER";
export const POST_LOGIN_USER = "POST_LOGIN_USER";

//ErrorMessages

export const ErrorOccurredPleaseContactAdmin =
  "Error occurred. Please contact admin";

//Storage Constants
export const OfficeBusinessId = "OfficeBusinessId";
export const OfficeBranchId = "OfficeBranchId";
export const OfficeUserPhoneNumber = "OfficeUserPhoneNumber";
export const OfficeUserFirstName = "OfficeUserFirstName";
export const OfficeUserLastName = "OfficeUserLastName";
export const OfficeUserId = "OfficeUserId";
export const OfficeUserToken = "OfficeUserToken";
export const OfficeBusinessName = "OfficeBusinessName";
