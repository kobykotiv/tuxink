module.exports = {
    proxy: "localhost:8000",
    files: ["app/**/*.css", "app/**/*.pug", "app/**/*.js"],
    ignore: ["node_modules"],
    reloadDelay: 10,
    ui: true,
    notify: true,
    port: 3000,
};