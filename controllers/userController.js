import passport from "passport";
import routes from "../routes";
import User from "../models/User";


export const getJoin = (req, res) => {
    res.render("join", {pageTitle: "Join"});
}

export const postJoin = async (req, res) => {
    const { body: { name, email, password, password2 }} = req;

    if(password !== password2) {
        res.status(400);
        res.render("join", {pageTitle: "Join"});
    } else {
        try {
            // To Do: Register user
            const user = await User({
                name,
                email
            });

            await User.register(user, password);
            next();
        } catch (e) {
            console.log(e);
            res.redirect(routes.home);
        }

        // To Do: Log user in

    }
};

export const getLogin = (req, res) => {
    res.render("login", { pageTitle: "LogIn"});
}

export const githubLoginCallback = (accessToken, refreshToken, profile, cb) => {
    console.log(accessToken, refreshToken, profile, cb);
}

export const postLogin = passport.authenticate("local", {
    failureRedirect: routes.login,
    successRedirect: routes.home
});

export const logout = (req, res) => {
    // To Do: Process Log Out
    req.logout();
    res.reditect(routes.home);
}

export const userDetail = (req, res) => res.render("userDetail");

export const editProfile = (req, res) => res.render("editProfile");

export const changePassword = (req, res) => res.render("changePassword");