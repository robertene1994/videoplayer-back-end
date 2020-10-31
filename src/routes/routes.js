const videos = "./../public/videos.json";

module.exports = (app) => {
    const express = app.get("express"),
        path = app.get("path");

    app.get("/playlist", (_req, res) => {
        res.status(200).json(require(videos, "utf8"));
    });

    app.use("/video", express.static(path.join(__dirname, "./../public/video")));
    app.use("/subtitle", express.static(path.join(__dirname, "./../public/subtitle")));
    app.use("/dash", express.static(path.join(__dirname, "./../public/dash")));
};
