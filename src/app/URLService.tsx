import { URLViewModel } from "src/features/Models/Models";
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const URLApi = createApi({
    reducerPath: 'URLApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://localhost:7096' }),
    tagTypes: ['App'],
    endpoints: (build) => ({
        createURL: build.mutation<URLViewModel, URLViewModel>({
            query: (post) => ({ url: `/create`, method: 'POST', body: post }),
        }),
        getAllURLS: build.query<URLViewModel[], void>({
            query: () => ({ url: `/get` }),
        }),
        getURLById: build.query<URLViewModel, number>({
            query: (id: number) => ({ url: `/create/${id}` }),
        }),
        deleteURL: build.mutation<void, number>({
            query: (id: number) => ({ url: `/delete/${id}`, method: 'DELETE' }),
        }),
        deleteALLURL: build.mutation<void, number>({
            query: (id: number) => ({ url: `/delete/all`, method: 'DELETE' }),
        }),
    }),
});

export const { useCreateURLMutation, useGetAllURLSQuery, useGetURLByIdQuery, useDeleteURLMutation, useDeleteALLURLMutation } = URLApi;

export default URLApi;
