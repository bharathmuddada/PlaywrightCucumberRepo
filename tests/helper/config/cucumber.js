module.exports = {
    default: {
        formatOptions: {
            snippetInterface: "async-await"
        },
        paths: [
            "tests/features/"
        ],
        publishQuiet: true,
        dryRun: false,
        require: [
            "tests/steps/*.ts",
            "tests/hooks/hooks.ts"
        ],
        requireModule: [
            "ts-node/register"
        ],
        format: [
            "progress-bar",
            "html:test-results/cucumber-report.html",
            "json:test-results/cucumber-report.json"
        ],
        parallel: 2
    }
}