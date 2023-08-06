import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { ILaunche, IRocket } from "../interface";

export const spaceXApi = createApi({
  reducerPath: "spaceXApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.spacexdata.com/v4/",
  }),
  endpoints: (build) => ({
    getLastLaunches: build.query<ILaunche, string>({
      query: () => `launches/latest`,
    }),
    getAllLaunches: build.query<ILaunche[], string>({
      query: () => "launches/",
    }),
    getRocketById: build.query<IRocket, string>({
      query: (id) => `rockets/${id}`,
    }),
    getAllRockets: build.query<IRocket[], string>({
      query: () => `rockets`,
    }),
  }),
});

export const {
  useGetAllLaunchesQuery,
  useGetLastLaunchesQuery,
  useGetAllRocketsQuery,
  useGetRocketByIdQuery,
} = spaceXApi;
