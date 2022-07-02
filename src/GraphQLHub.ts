import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge';
import { loadFilesSync } from '@graphql-tools/load-files';

import tracksResolver from './modules/tracks/resolvers/tracks.resolver';
import bandsResolver from './modules/bands/resolvers/bands.resolver';
import favouritesResolver from './modules/favourites/resolvers/favourites.resolver';
import genresResolver from './modules/genres/resolvers/genres.resolver';
import artistsResolver from './modules/artists/resolvers/artists.resolver';
import albumsResolver from './modules/albums/resolvers/albums.resolver';
import usersResolver from './modules/users/resolvers/users.resolver';

import { AlbumsAPI } from './modules/albums/services/albums.service';
import { ArtistsAPI } from './modules/artists/services/artists.service';
import { BandsAPI } from './modules/bands/services/bands.service';
import { FavouritesAPI } from './modules/favourites/services/favourites.service';
import { GenresAPI } from './modules/genres/services/genres.service';
import { TracksAPI } from './modules/tracks/services/tracks.service';
import { UsersAPI } from './modules/users/services/users.service';

export default class GraphQLHub {
  public typeDefs;
  public resolvers;

  constructor() {
    const typesArray = loadFilesSync('./**/*.graphql');
    const resolversArray = [
        albumsResolver,
        artistsResolver,
        bandsResolver,
        favouritesResolver,
        genresResolver,
        tracksResolver,
        usersResolver,
    ];
    this.typeDefs = mergeTypeDefs(typesArray);
    this.resolvers = mergeResolvers(resolversArray);
  }

  public sources() {
    return {
      albumsAPI: new AlbumsAPI(),
      artistsAPI: new ArtistsAPI(),
      bandsAPI: new BandsAPI(),
      favouritesAPI: new FavouritesAPI(),
      genresAPI: new GenresAPI(),
      tracksAPI: new TracksAPI(),
      usersAPI: new UsersAPI(),
    }
  }
}