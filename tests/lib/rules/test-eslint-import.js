/**
 * @fileoverview test eslint import
 * @author animesh
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/test-eslint-import"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------
const ruleTester = new RuleTester({ parserOptions: { ecmaVersion: 6, sourceType: "module" } });

ruleTester.run("test-eslint-import", rule, {
    
    valid: [
        
        // give me some code that won't trigger a warning
    ],
    
    invalid: [
        {
            code: "import * as _ from 'lodash';",
            errors: [{
                message: "Please dont use import * as _",
                type: "ImportNamespaceSpecifier"
            }]
        }
    ]
});
