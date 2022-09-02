module.exports = {
    verbose: true,
    testEnvironment: "node",
    transform: {"^.+\\.[t|j]sx?$": "babel-jest"},
    testEnvironmentOptions: {
        url: "http://localhost/"
    }
};