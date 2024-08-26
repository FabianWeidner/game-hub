import { useQuery } from "@tanstack/react-query";
import apiClient, { FetchResponse } from "../services/api-client";
import genres from "../data/genres";

export type Genre = {
  id: number;
  name: string;
  image_background: string;
};

const useGenres = () => {
  const fetchGenres = () =>
    apiClient
      .get<FetchResponse<Genre>>("/genres")
      .then((res) => res.data);

  return useQuery({
    queryKey: ["genres"],
    queryFn: fetchGenres,
    staleTime: 24 * 60 * 60 * 1000, //24,
    initialData: { count: genres.length, results: genres },
  });
};

export default useGenres;
