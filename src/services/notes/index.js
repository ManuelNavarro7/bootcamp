import axios from "axios";

const URL = "http://localhost:3001/api/notes";

export const getAll = () => {
  return axios.get(URL).then((response) => {
    const { data } = response;
    return data;
  });
};

export const create = ({ title, body, userId }) => {
  return axios.post(URL, { title, body, userId }).then((response) => {
    const { data } = response;
    return data;
    //setNote([...note, data]);
  });
};
