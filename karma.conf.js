module.exports = function(config) {
    config.set({
        frameworks: ['jasmine', 'jasmine-matchers'],
        preprocessors: {
            '*.js': ['coverage'] // ALL THE FILES YOU WANT TO CHECK COVERAGE FOR GO HERE, MAKE SURE TO SPECIFY BY FOLDER
        },
        files: [
            './custom-matchers.js',
            '*.js',
            '*.specs.js'
        ],
        plugins: [
            'karma-jasmine',
            'karma-jasmine-matchers', 
            'karma-chrome-launcher',
            'karma-coverage'
        ],
        reporters: ['dots', 'coverage'],
        browsers: ['ChromeHeadless'],
        color: true,
        coverageReporter: {
            dir: 'coverage/',
            reporters: [
                {
                    type: 'html',
                    subdir: 'html'
                }
            ]
        },
        singleRun: true // runs the tests once and stops the runner     
    });
}