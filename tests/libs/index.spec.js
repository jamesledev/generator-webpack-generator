const { isPluginId, isRequired } = require('../../libs/validators')
const assert = require('assert')

describe('#isPluginId()', function() {
  it('should return true when the value is not present', function() {
    assert.equal(isPluginId('webpack-plugin-demo'), true)
  })

  it('should return false when the value is not present', function() {
    assert.equal(isPluginId('webpackPluginDemo'), false)
  })
})

describe('#isRequired()', function() {
  it('should return true when the value is present', function() {
    assert.equal(isRequired('webpack'), true)
  })

  it('should return false when the value is empty', function() {
    assert.equal(isRequired(''), false)
  })

  it('should return false when the value is null', function() {
    assert.equal(isRequired(), false)
  })
})
