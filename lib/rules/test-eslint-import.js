/**
 * @fileoverview test eslint import
 * @author animesh
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type: "suggestion",
        docs: {
            description: "Use proper way to import modules, so that unused modules can be tree-shaked.",
            category: "Use proper ways to import",
            recommended: false
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },
    
    create(context) {
        
        // variables should be defined here
        
        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------
        
        // any helper functions should go here or else delete this section
        
        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------
        return {
            ImportNamespaceSpecifier(node) {
                context.report({ message: "Please dont use import * as _", node });
            }
        };
    }
};
