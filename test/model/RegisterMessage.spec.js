/**
 * ARTIK Cloud API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 2.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ArtikCloud);
  }
}(this, function(expect, ArtikCloud) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new ArtikCloud.RegisterMessage();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('RegisterMessage', function() {
    it('should create an instance of RegisterMessage', function() {
      // uncomment below and update the code to test RegisterMessage
      //var instane = new ArtikCloud.RegisterMessage();
      //expect(instance).to.be.a(ArtikCloud.RegisterMessage);
    });

    it('should have the property cid (base name: "cid")', function() {
      // uncomment below and update the code to test the property cid
      //var instane = new ArtikCloud.RegisterMessage();
      //expect(instance).to.be();
    });

    it('should have the property authorization (base name: "authorization")', function() {
      // uncomment below and update the code to test the property authorization
      //var instane = new ArtikCloud.RegisterMessage();
      //expect(instance).to.be();
    });

    it('should have the property sdid (base name: "sdid")', function() {
      // uncomment below and update the code to test the property sdid
      //var instane = new ArtikCloud.RegisterMessage();
      //expect(instance).to.be();
    });

    it('should have the property ts (base name: "ts")', function() {
      // uncomment below and update the code to test the property ts
      //var instane = new ArtikCloud.RegisterMessage();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new ArtikCloud.RegisterMessage();
      //expect(instance).to.be();
    });

  });

}));