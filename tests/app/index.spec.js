const helpers = require('yeoman-test')
const path = require('path')

describe('generate projects', function() {
  it('generate a project', function() {
    // The object returned acts like a promise, so return it to wait until the process is done
    return helpers
      .run(path.join(__dirname, '../../app'))
      .withOptions({ type: 'plugin', name: 'webpack-plugin-test' }) // Mock options passed in
      .withPrompts({ author: 'Test Author', pkgManager: 'yarn', gitInit: false }) // Mock the prompt answers
      .then(function() {
        console.log('Your project: webpack-plugin-test is created.')
      })
  })
})
