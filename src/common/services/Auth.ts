let token: string | null = "";

var client_id = "17b46ce07a754eb8817d724190233e51";
var redirect_uri = "http://localhost:5173/";
var scope = "user-read-private user-read-email";

export const login = () => {
  var url = "https://accounts.spotify.com/authorize";
  url += "?response_type=token";
  url += "&client_id=" + encodeURIComponent(client_id);
  url += "&scope=" + encodeURIComponent(scope);
  url += "&redirect_uri=" + encodeURIComponent(redirect_uri);
  url += "&show_dialog=true";

  window.location.href = url;
};

export const logout = () => {
  token = null;
};

export const getToken = () => token;

export const checkLogin = () => {
  let access_token = new URLSearchParams(location.hash).get("#access_token");

  if (access_token) {
    sessionStorage.setItem("token", JSON.stringify(access_token));
    location.href = "";
  } else {
    try {
      access_token = JSON.parse(sessionStorage.getItem("token") || "");
    } catch (e) {
      sessionStorage.removeItem("token");
    }
  }
  token = access_token;
};
