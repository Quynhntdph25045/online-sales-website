import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const CartsApi = createApi({
    reducerPath: 'cart',
    tagTypes: ['cart'],
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000"
    }),
    endpoints: (builder) => ({
        getCarts: builder.query<any, void>({
            query: () => ("/cart"),
            providesTags: ['cart']
          
        }),
        getCartById: builder.query<any, number | string>({
            query: (id) => `/cart/${id}`,
            providesTags: ['cart']
        }),
        removeCart: builder.mutation<void, number>({
            query: (id) => ({
                url: `/cart/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ['cart']
        }),
        addCart: builder.mutation<any, any>({
            query: (product) => ({
                url: `/cart`,
                method: "POST",
                body: product
            }),
            invalidatesTags: ['cart']
        }),
        // updateCart: builder.mutation<any, any>({
        //     query: (product) => ({
        //         url: `/cart/${product.id}`,
        //         method: "PATCH",
        //         body: product
        //     }),
        //     invalidatesTags: ['cart']
        // })
    })
})

export const {
     useGetCartsQuery,
     useGetCartByIdQuery,
    useRemoveCartMutation,
    useAddCartMutation } = CartsApi
export const CartReducer = CartsApi.reducer
export default CartsApi