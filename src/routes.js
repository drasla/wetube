// Global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

// Users
const USERS = "/users";
const USER_DETAIL = "/:id";
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";
const DELETE_USER = "/delete";
const ME = "/me";

// Users - github
const GITHUB = "/auth/github";
const GITHUB_CALLBACK = "/auth/github/callback";

// User - facebook
const FACEBOOK = "/auth/facebook";
const FACEBOOK_CALLBACK = "/auth/facebook/callback";

// Videos
const VIDEOS = "/videos";
const UPLOAD = "/upload";
const VIDEO_DETAIL = "/:id";
const EDIT_VIDEO = "/:id/edit";
const DELETE_VIDEO = "/:id/delete";

const routes = {
    home: HOME,
    join: JOIN,
    login: LOGIN,
    logout: LOGOUT,
    search: SEARCH,
    users: USERS,
    userDetail: (id) => {
        if(id) {
            return `/users/${id}`;
        } else {
            return USER_DETAIL;
        }
    },
    me: ME,
    editProfile: EDIT_PROFILE,
    changePassword: CHANGE_PASSWORD,
    deleteUser: DELETE_USER,
    videos: VIDEOS,
    upload: UPLOAD,
    videoDetail: (id) => {
        if(id) {
            return `/videos/${id}`;
        } else {
            return VIDEO_DETAIL;
        }
    },
    editVideo: (id) => {
        if(id) {
            return `/videos/${id}/edit`
        } else {
            return EDIT_VIDEO;
        }
    },
    deleteVideo: (id) => {
        if(id) {
            return `/videos/${id}/delete`;
        } else {
            return DELETE_VIDEO;
        }
    },
    github: GITHUB,
    githubCallback: GITHUB_CALLBACK,
    facebook: FACEBOOK,
    facebookCallback: FACEBOOK_CALLBACK
};

export default routes;