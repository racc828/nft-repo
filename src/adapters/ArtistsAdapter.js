import { apis, routes } from "../global/js/routes";

const currentRoute = routes[apis.Artists];

export default class ArtistsAdapter {
  static getArtists() {
    const endpoint = currentRoute.endpoints.getArtists();
    return fetch(endpoint.url, {
      method: endpoint.method,
      headers: endpoint.headers,
    }).then((resp) => resp.json());
  }

  static createArtist(artist) {
    const endpoint = currentRoute.endpoints.createArtist();
    return fetch(endpoint.url, {
      method: endpoint.method,
      headers: endpoint.headers,
      body: JSON.stringify({
        name: artist.name,
        user_id: artist.user_id,
        occupation: artist.occupation,
        insta_followers: artist.insta_followers,
        insta_link: artist.insta_link,
        twitter_followers: artist.twitter_followers,
        twitter_link: artist.twitter_link,
      }),
    }).then((resp) => resp.json());
  }
}
