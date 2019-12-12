const helpers = require('yeoman-test')
const path = require('path')

describe('generate projects', function() {
  it('generate a project', function(done) {
    // The object returned acts like a promise, so return it to wait until the process is done
    helpers
      .run(path.join(__dirname, '../../app'))
      .withOptions({ type: 'plugin', name: 'webpack-plugin-test' }) // Mock options passed in
      .withPrompts({ author: 'Test Author', pkgManager: 'yarn', gitInit: false }) // Mock the prompt answers
      .toPromise()
      .then(function() {
        console.log('Your project: webpack-plugin-test is created.')
        done()
      }, done)
  })
})
