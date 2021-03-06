import multer from "multer";
import routes from "../routes";

const multerVideo = multer({
    dest: "uploads/videos/"
})

export const uploadVideoMiddleware = multerVideo.single("videoFile");

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "WeTube";
    res.locals.routes = routes;
    res.locals.loggedUser = req.user || null;
    res.setHeader("Content-Security-Policy", "script-src 'self' https://archive.org");
    next();
}

export const onlyPublic = (req, res, next) => {
    if(req.user) {
        res.redirect(routes.home);
    } else {
        next();
    }
}

export const onlyPrivate = (req, res, next) => {
    if(req.user) {
        next();
    } else {
        res.redirect(routes.home);
    }
}