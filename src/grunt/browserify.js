module.exports = {
    options: {
        ignore: ['./scripts/_codeLibrary/**/*.js', './scripts/_deleteThese/**/*.js'],
        browserifyOptions: {
            debug: true,
            paths: ["./scripts"]
        }
    },
    dist: {
        files: {
            "../dist/bundle.js": ["scripts/**/*.js"]
        }
    }
}