import API from "../../api/Api";
export async function useFetch(url: string) {
  try {
    const { data } = await API.get(url);
    return data;
  } catch (error) {
    console.error(error);
  }
}
