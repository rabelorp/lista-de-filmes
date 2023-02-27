import useSWR from "swr";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

export function SearchByTitle<Data = any, Error = any>(title: string) {
  const url = `movies/searchByTitle?title=`;
  const { data, error } = useSWR<Data, Error>(url, async (url) => {
    const response = await api.get(url);
    alert("response.data");
    return response.data;
  });

  return { data, error };
}
// import useSWR from "swr";
// import API from "../../api/Api";

// export const SearchByTitle = (title: string) => {
// console.log(`useSearch title ${title}`);
// const fetcher = (url: string) => API.get(url).then((res) => res.data);
// console.log(fetcher);
// const { data, error, isLoading } = useSWR(
//   `movies/searchByTitle/?title=${title}`,
//   fetcher
// );
// if (error) return "An error has occurred.";
// if (isLoading) return "Loading...";
// console.log(`useSearch data ${fetcher}`);
//   let data: any;
//   return data;
// };
// export function SearchByTitle<Data = any, Error = any>(title: string) {
//   const url = `movies/searchByTitle?title=${title}`;
//   const { data, error } = useSWR<Data, Error>(url, async (url) => {
//     const response = await API.get(url);

//     console.log("response.data", API);
//     return response.data;
//   });
//   console.log("response.data FORA", data);
//   return { data, error };
// }

// export const SearchById = (id: any) => {};
