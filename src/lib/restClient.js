import axios from 'axios';
import config from '../config';

import { getSession } from './sessionStorage';

let api = null;

const getHeaders = async () => {
  let headers = {
    'Content-Type': 'application/json',
    accept: 'application/json',
  };
  const token = getSession();
  if (token) {
    headers = {
      ...headers,
      authorization: `Bearer ${token}`,
    };
  }
  return headers;
};

const getInitializedApi = () => {
  if (api) {
    return api;
  }
  api = axios.create({
    baseURL: config.ENDPOINT,
    responseType: 'json',
  });
  return api;
};

export const get = async (url) => {
  const headers = await getHeaders();
  return getInitializedApi().get(url, { headers });
};

export const post = async (url, data) => {
  const headers = await getHeaders();
  return getInitializedApi().post(url, data, { headers });
};

export const del = async (url) => {
  const headers = await getHeaders();
  return getInitializedApi().delete(url, { headers });
};
