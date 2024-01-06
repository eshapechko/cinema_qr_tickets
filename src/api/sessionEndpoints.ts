import {Session} from '../types/session';
import {rtkApi} from './rtkApi';

export const sessionsApi = rtkApi.injectEndpoints({
  endpoints: (builder) => ({
    getSessionById: builder.query<Session, string>({
      query: (id) => `sessions/${id}?_expand=seat`,
    }),
  }),
  overrideExisting: false,
});

export const {useGetSessionByIdQuery} = sessionsApi;
