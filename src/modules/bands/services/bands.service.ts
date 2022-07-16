import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { Band } from '../band';

export class BandsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.URL_BANDS;
  }

  async willSendRequest(request: RequestOptions) {
    request.headers.set('Authorization', `Bearer ${this.context.token}`);
  }

  getOne(id: string) {
    return this.get(`/${id}/`);
  }

  getAll(params = {}) {
    let query = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (!Array.isArray(value)) {
        query.append(key, value as string);
      }
    });
    return this.get('/', query);
  }

  create(item: Band) {
    return this.post('/', item);
  }

  deleteOne(id: string) {
    return this.delete(`/${id}/`);
  }

  update(item: Band) {
    return this.put(`/${item.id}/`, item);
  }
}
