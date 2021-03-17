import express from "express";
import routes from "../routes";
import {
    deleteVideo,
    getEditVideo,
    getUpload,
    postEditVideo,
    postUpload,
    videoDetail
} from "../controllers/videoController";
import {uploadVideoMiddleware} from "../middlewares/localsMiddleware";

const videoRouter = express.Router();

videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideoMiddleware, postUpload);

videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);

videoRouter.get(routes.videoDetail(), videoDetail);
videoRouter.get(routes.deleteVideo(), deleteVideo);

export default videoRouter;