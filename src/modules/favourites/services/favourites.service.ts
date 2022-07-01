import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';

export class FavouritesAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.URL_FAVOURITES;
  }

  async willSendRequest(request: RequestOptions) {
    request.headers.set('Authorization', `Bearer ${this.context.token}`);
  }

  getAll() {
    return this.get('');
  }

  addToFavourites(type: string, id: string) {
    return this.put('/add', { type, id });
  }
}
