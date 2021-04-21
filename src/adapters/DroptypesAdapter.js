import { apis, routes } from "../global/js/routes";

const currentRoute = routes[apis.Droptypes];

export default class DroptypesAdapter {
  // static getDroptypes() {
  //   const endpoint = currentRoute.endpoints.getCollections();
  //   return fetch(endpoint.url, {
  //     method: endpoint.method,
  //     headers: endpoint.headers,
  //   }).then((resp) => resp.json());
  // }

  static createDroptype(droptype) {
    const endpoint = currentRoute.endpoints.createDroptype();
    return fetch(endpoint.url, {
      method: endpoint.method,
      headers: endpoint.headers,
      body: JSON.stringify({
        dtype: droptype.dtype,
        link: droptype.link,
        collection_id: droptype.collection_id,
      }),
    }).then((resp) => resp.json());
  }
}
