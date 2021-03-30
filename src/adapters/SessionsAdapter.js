import { apis, routes } from "../global/js/routes";

const currentRoute = routes[apis.Sessions];

export default class SessionsAdapter {
  static getUser(user) {
    const endpoint = currentRoute.endpoints.signIn();
    return fetch(endpoint.url, {
      method: endpoint.method,
      headers: endpoint.headers,
      body: JSON.stringify(user),
    }).then((resp) => resp.json());
  }

  //   static currentUser() {
  //     return fetch(`${path}/current_user`, {
  //       method: "GET",
  //       headers: headers(),
  //     }).then((res) => {
  //       return res.json();
  //     });
  //   }
}
