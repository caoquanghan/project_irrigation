import AsyncStorage from "@react-native-async-storage/async-storage";
import { API } from "../base";

export interface User {
  id: number;
  email: string;
  name: string;
}

const token = AsyncStorage.getItem('token');
const userApi = API.injectEndpoints({
  endpoints: (build) => ({
    getUser: build.query({
      query: (id) => ({
        url: `users/${id}`,
        method: 'GET',
      }),
    }),
    updateUser: build.mutation({
      query: ({id,name, email}) => ({
        url: `users/${id}`,
        method: 'POST',
        body: { name, email},
      }),
    })
  }),
  overrideExisting: true,
});


export const { useLazyGetUserQuery, useUpdateUserMutation } = userApi;