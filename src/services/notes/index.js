import axios from "axios";

const URL = "https://calm-retreat-87729.herokuapp.com/api/notes";

export const getAll = () => {
  return axios.get(URL).then((response) => {
    const { data } = response;
    console.log(data);
    return data;
  });
};

export const create = ({ title, body }) => {
  return axios.post(URL, { title, body }).then((response) => {
    const { data } = response;
    return data;
    //setNote([...note, data]);
  });
};
