import { RESTDataSource, RequestOptions } from "apollo-datasource-rest";
import { Album } from "../album";

export class AlbumsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.URL_ALBUMS;
  }

  async willSendRequest(request: RequestOptions) {
    request.headers.set("Authorization", `Bearer ${this.context.token}`);
  }

  getOne(albumId: string) {
    return this.get(`/${albumId}/`);
  }

  getAll(params: any) {
    let query = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (!Array.isArray(value)) {
        query.append(key, value as string);
      }
    });
    return this.get("/", query);
  }

  create(album: Album) {
    return this.post("/", album);
  }

  deleteOne(albumId: string) {
    return this.delete(`/${albumId}/`);
  }

  update(album: Album) {
    return this.put(`/${album.id}/`, album);
  }
}
