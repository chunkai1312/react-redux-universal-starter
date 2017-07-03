module.exports = {
  'testRegex': '(/test/.*\\.spec.js)$',
  'coverageReporters': ['text', 'text-summary'],
  'moduleNameMapper': {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/test/__mocks__/fileMock.js',
    '\\.(css|less)$': 'identity-obj-proxy'
  },
  coveragePathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/src/services/', '<rootDir>/src/config.js', '<rootDir>/src/sagas/api.js']
}
