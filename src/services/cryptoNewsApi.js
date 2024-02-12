import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoNewsHeaders =  {
    'X-RapidAPI-Key': '6b62e67376mshd1e24628930cb60p1ac736jsnbb0f45746e6f',
    'X-RapidAPI-Host': 'cryptocurrency-news2.p.rapidapi.com'
}

const baseUrl = 'https://cryptocurrency-news2.p.rapidapi.com/v1'

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders })

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ( count ) => createRequest(`/coindesk?limit=${count}`)
        })
    }),
    
})

export const { useGetCryptoNewsQuery } = cryptoNewsApi;