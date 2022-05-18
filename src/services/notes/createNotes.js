import axios from "axios";

const URL = "https://jsonplaceholder.typicode.com/posts";

export const createNotes = ({ title, body, userId }) => {
  return axios.post(URL, { title, body, userId }).then((response) => {
    const { data } = response;
    return data;
    //setNote([...note, data]);
  });
};
