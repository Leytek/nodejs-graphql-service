import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';
import { Track } from '../track';

export class TracksAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.URL_TRACKS;
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

  create(item: Track) {
    return this.post('/', item);
  }

  deleteOne(id: string) {
    return this.delete(`/${id}/`);
  }

  update(item: Track) {
    return this.put(`/${item.id}/`, item);
  }
}
