import axios from "axios";
import { axiosWithAuth } from '../helpers/auth';

const BASE_URL = 'http://localhost:5000/'

export function login(loginInfo) {
  return axios.post(BASE_URL + 'api/login', loginInfo);
}

export function getColors() {
  return axiosWithAuth().get(BASE_URL + 'api/colors');
}

export function createColor(colorInfo) {
  return axiosWithAuth().post(BASE_URL + 'api/colors');
}

export function updateColor(id, colorInfo) {
  return axiosWithAuth().put(BASE_URL + 'api/colors/' + id, colorInfo);
}

export function deleteColor(id) {
  return axiosWithAuth().delete(BASE_URL + 'api/colors/' + id);
}