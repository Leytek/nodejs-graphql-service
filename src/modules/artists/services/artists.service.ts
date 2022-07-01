import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { Artist } from '../artist';

export class ArtistsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.URL_ARTISTS;
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

  create(item: Artist) {
    return this.post('/', item);
  }

  deleteOne(id: string) {
    return this.delete(`/${id}/`);
  }

  update(item: Artist) {
    return this.put(`/${item.id}/`, item);
  }
}
