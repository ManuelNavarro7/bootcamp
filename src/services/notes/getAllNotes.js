import axios from "axios";

const URL = "https://jsonplaceholder.typicode.com/posts";

export const getAllNotes = () => {
  return axios.get(URL).then((response) => {
    const { data } = response;
    return data;
  });
};
