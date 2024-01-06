import {OrderData} from '../types/order';
import {rtkApi} from './rtkApi';

export const orderApi = rtkApi.injectEndpoints({
  endpoints: (builder) => ({
    updateSeatById: builder.mutation<OrderData, OrderData>({
      query: ({id, bought_seats}) => ({
        method: 'PATCH',
        url: `seats/${id}`,
        body: {
          bought_seats,
        },
      }),
    }),
  }),
  overrideExisting: false,
});

export const {useUpdateSeatByIdMutation} = orderApi;
