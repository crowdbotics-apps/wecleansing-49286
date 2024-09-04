import axios from "axios"
const wecleansingAPI = axios.create({
  baseURL: "https://wecleansing-49286.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return wecleansingAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_login_create(payload) {
  return wecleansingAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return wecleansingAPI.post(`/api/v1/signup/`, payload)
}
function modules_disqus_comment_list(payload) {
  return wecleansingAPI.get(`/modules/disqus/comment/`, {
    params: { page: payload.page, page_size: payload.page_size }
  })
}
function modules_disqus_comment_create(payload) {
  return wecleansingAPI.post(`/modules/disqus/comment/`, payload)
}
function modules_disqus_comment_like_list(payload) {
  return wecleansingAPI.get(`/modules/disqus/comment-like/`, {
    params: { page: payload.page, page_size: payload.page_size }
  })
}
function modules_disqus_comment_like_create(payload) {
  return wecleansingAPI.post(`/modules/disqus/comment-like/`, payload)
}
function modules_disqus_comment_like_retrieve(payload) {
  return wecleansingAPI.get(`/modules/disqus/comment-like/${payload.id}/`)
}
function modules_disqus_comment_like_update(payload) {
  return wecleansingAPI.put(
    `/modules/disqus/comment-like/${payload.id}/`,
    payload
  )
}
function modules_disqus_comment_like_partial_update(payload) {
  return wecleansingAPI.patch(
    `/modules/disqus/comment-like/${payload.id}/`,
    payload
  )
}
function modules_disqus_comment_like_destroy(payload) {
  return wecleansingAPI.delete(`/modules/disqus/comment-like/${payload.id}/`)
}
function modules_disqus_comment_retrieve(payload) {
  return wecleansingAPI.get(`/modules/disqus/comment/${payload.id}/`)
}
function modules_disqus_comment_update(payload) {
  return wecleansingAPI.put(`/modules/disqus/comment/${payload.id}/`, payload)
}
function modules_disqus_comment_partial_update(payload) {
  return wecleansingAPI.patch(`/modules/disqus/comment/${payload.id}/`, payload)
}
function modules_disqus_comment_destroy(payload) {
  return wecleansingAPI.delete(`/modules/disqus/comment/${payload.id}/`)
}
function rest_auth_login_create(payload) {
  return wecleansingAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_create(payload) {
  return wecleansingAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return wecleansingAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return wecleansingAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return wecleansingAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return wecleansingAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_resend_email_create(payload) {
  return wecleansingAPI.post(`/rest-auth/registration/resend-email/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return wecleansingAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return wecleansingAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return wecleansingAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return wecleansingAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_login_create,
  api_v1_signup_create,
  modules_disqus_comment_list,
  modules_disqus_comment_create,
  modules_disqus_comment_like_list,
  modules_disqus_comment_like_create,
  modules_disqus_comment_like_retrieve,
  modules_disqus_comment_like_update,
  modules_disqus_comment_like_partial_update,
  modules_disqus_comment_like_destroy,
  modules_disqus_comment_retrieve,
  modules_disqus_comment_update,
  modules_disqus_comment_partial_update,
  modules_disqus_comment_destroy,
  rest_auth_login_create,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_resend_email_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
