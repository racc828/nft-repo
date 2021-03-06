import { apis, routes } from "../global/js/routes";

const currentRoute = routes[apis.Collections];

export default class CollectionsAdapter {
  static getCollections() {
    const endpoint = currentRoute.endpoints.getCollections();
    return fetch(endpoint.url, {
      method: endpoint.method,
      headers: endpoint.headers,
    }).then((resp) => resp.json());
  }

  static createCollection(collection) {
    const endpoint = currentRoute.endpoints.createCollection();
    return fetch(endpoint.url, {
      method: endpoint.method,
      headers: endpoint.headers,
      body: JSON.stringify({
        artist_ids: collection.artist_ids,
        name: collection.name,
        start: collection.start,
        end: collection.end,
      }),
    }).then((resp) => resp.json());
  }
}
