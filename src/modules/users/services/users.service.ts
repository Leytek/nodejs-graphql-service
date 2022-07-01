import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { User } from '../user';

export class UsersAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.URL_USERS;
  }

  async willSendRequest(request: RequestOptions) {
    request.headers.set('Authorization', `Bearer ${this.context.token}`);
  }

  getOne(id: string) {
    return this.get(`/${id}/`);
  }

  getJwt(email: string, password: string) {
    return this.post('/login/', { email, password });
  }

  create(item: User) {
    return this.post('/register/', item);
  }

  verify() {
    return this.post(`/verify/`);
  }
}
