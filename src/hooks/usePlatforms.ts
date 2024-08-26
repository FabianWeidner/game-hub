import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import apiClient from "../services/api-client";
import { FetchResponse } from "./useData";

export type Platform = {
  id: number;
  name: string;
  slug: string;
};

const usePlatforms = () => {
  const fetchPlatforms = () =>
    apiClient
      .get<FetchResponse<Platform>>("/platforms")
      .then((res) => res.data);

  return useQuery({
    queryKey: ["platforms"],
    queryFn: fetchPlatforms,
    staleTime: 24 * 60 * 60 * 1000, //24,
    initialData: { count: platforms.length, results: platforms },
  });
};

export default usePlatforms;
