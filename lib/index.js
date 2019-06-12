var fs = require("fs");

var Validator = require('jsonschema').Validator;
var v = new Validator();
 
var initial_geojson = fs.readFileSync("test/test_data/local_schema/item_v061/json-schema/geojson.json");
var initial_contents = fs.readFileSync("test/test_data/good_item_v061.json");
var initial_schema = fs.readFileSync("test/test_data/local_schema/item_v061/json-schema/item.json");   

var contents = JSON.parse(initial_contents);
var schema = JSON.parse(initial_schema);
var geojson = JSON.parse(initial_geojson);
  // Address, to be embedded on Person
//   var addressSchema = {
//     "id": "/SimpleAddress",
//     "type": "object",
//     "properties": {
//       "lines": {
//         "type": "array",
//         "items": {"type": "string"}
//       },
//       "zip": {"type": "string"},
//       "city": {"type": "string"},
//       "country": {"type": "string"}
//     },
//     "required": ["country"]
//   };
 
//   // Person
//   var schema = {
//     "id": "/SimplePerson",
//     "type": "object",
//     "properties": {
//       "name": {"type": "string"},
//       "address": {"$ref": "/SimpleAddress"},
//       "votes": {"type": "integer", "minimum": 1}
//     }
//   };
 
//   var p = {
//     "name": "Barack Obama",
//     "address": {
//       "lines": [ "1600 Pennsylvania Avenue Northwest" ],
//       "zip": "DC 20500",
//       "city": "Washington",
//       "country": "USA"
//     },
//     "votes": 1
//   };
 
  v.addSchema(geojson, 'geojson.json#');
  console.log(v.validate(contents, schema));