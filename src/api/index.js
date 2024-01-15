import axios from 'axios';

export const getAuthenticationHeaders = (headers = {}) => ({
  Accept: 'application/json',
  ...headers,
});

export const getConfig = (params, options = {}, _headers = {}) => {
  const headers = getAuthenticationHeaders(_headers);

  if (headers) {
    return {
      params,
      headers,
      ...options,
    };
  }

  return {
    params,
    ...options,
  };
};

export const getResponse = (request) =>
  request.then((response) => response.data);

export const callGet = (path, params, options) =>
  getResponse(axios.get(path, getConfig(params, options)));

export const callPut = (path, data, params, options) =>
  getResponse(axios.put(path, data, getConfig(params, options)));

export const callPost = (path, data, options) =>
  getResponse(axios.post(path, data, getConfig(options)));

export const callPostFormData = (path, data, options) =>
  getResponse(
    axios.post(
      path,
      data,
      getConfig(data, options, { 'content-type': 'multipart/form-data' })
    )
  );

export const callDelete = (path, options) =>
  getResponse(axios.delete(path, getConfig(options)));
