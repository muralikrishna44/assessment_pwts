const report = require('multiple-cucumber-html-reporter');

report.generate({
  jsonDir: 'test-results',
  reportPath: './',
  reportName: 'Playwright Automation Report',
  pageTitle: 'Experian Form test report',
  displayDuration: false,
  metadata: {
    browser: {
      name: 'chrome',
    },
    platform: {
      name: 'Windows',
      version: '11',
    },
  },
  customData: {
    title: 'Test Info',
    data: [{ label: 'Project', value: 'Experian Form' }],
  },
});
