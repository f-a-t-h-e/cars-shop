import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

export const trackApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "http://example.com/api/v1/",
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  tagTypes: [],
  endpoints: (builder) => ({
    getTrackByName: builder.query<
      { species: { name: string }; sprites: { front_shiny: string } },
      string
    >({
      query: (name) => `Track/${name}`,
    }),
    getTrackList: builder.query<{ results: Array<{ name: string }> }, void>({
      query: () => `Track/`,
    }),
  }),
});

// Export hooks for usage in functional components
export const {
  useGetTrackByNameQuery,
  useGetTrackListQuery,
  util: { getRunningQueriesThunk },
} = trackApi;

// export endpoints for use in SSR
export const { getTrackByName, getTrackList } = trackApi.endpoints;
