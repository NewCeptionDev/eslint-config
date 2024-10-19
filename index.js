// This Ruleset is based on the Airbnb config and was refined and adjusted by NewCeptionDev
// You can find the Airbnb config here: https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base
// The additional typescript config here: https://github.com/iamturns/eslint-config-airbnb-typescript

import ts from "typescript-eslint";
import stylistic from "@stylistic/eslint-plugin-ts";

export default [
  {
    files: ["**/*.ts", "**/*.tsx"],
    plugins: {
      "@typescript-eslint": ts.plugin,
      "@stylistic/ts": stylistic,
    },
    languageOptions: {
      parser: ts.parser,
      ecmaVersion: "latest",
      parserOptions: {
        project: ["./tsconfig.json"],
      },
    },
    rules: {
      "accessor-pairs": "off",

      "array-callback-return": [
        "error",
        {
          allowImplicit: true,
          checkForEach: false,
        },
      ],

      "block-scoped-var": "error",

      complexity: "off",

      "class-methods-use-this": "off",

      "consistent-return": [
        "error",
        {
          treatUndefinedAsUnspecified: false,
        },
      ],

      curly: ["error", "all"],

      "default-case": [
        "error",
        {
          commentPattern: "^no default$",
        },
      ],

      "default-case-last": "error",

      "default-param-last": "off",

      "@typescript-eslint/default-param-last": "error",

      "dot-notation": "off",

      "@typescript-eslint/dot-notation": [
        "error",
        {
          allowKeywords: true,
        },
      ],

      "dot-location": ["error", "property"],

      eqeqeq: [
        "error",
        "always",
        {
          null: "ignore",
        },
      ],

      "grouped-accessor-pairs": ["error", "getBeforeSet"],

      "guard-for-in": "error",

      "max-classes-per-file": ["error", 1],

      "no-alert": "warn",

      "no-caller": "error",

      "no-case-declarations": "off",

      "no-constructor-return": "error",

      "no-div-regex": "off",

      "no-else-return": [
        "error",
        {
          allowElseIf: true,
        },
      ],

      "no-empty-function": "error",

      "@typescript-eslint/no-empty-function": [
        "error",
        {
          allow: ["arrowFunctions", "functions", "methods"],
        },
      ],

      "no-empty-pattern": "error",

      "no-eq-null": "off",

      "no-eval": [
        "error",
        {
          allowIndirect: false,
        },
      ],

      "no-extend-native": "error",

      "no-extra-bind": "error",

      "no-extra-label": "error",

      "no-fallthrough": "error",

      "no-floating-decimal": "error",

      "no-global-assign": "error",

      "no-native-reassign": "off",

      "no-implicit-coercion": "off",

      "no-implicit-globals": "off",

      "no-implied-eval": "off",

      "@typescript-eslint/no-implied-eval": "error",

      "no-invalid-this": "off",

      "no-iterator": "error",

      "no-labels": [
        "error",
        {
          allowLoop: false,
          allowSwitch: false,
        },
      ],

      "no-lone-blocks": "error",

      "no-loop-func": "off",

      "@typescript-eslint/no-loop-func": "error",

      "no-magic-numbers": "off",

      "@typescript-eslint/no-magic-numbers": "off",

      "no-multi-spaces": [
        "error",
        {
          ignoreEOLComments: false,
        },
      ],

      "no-multi-str": "error",

      "no-new": "error",

      "no-new-func": "error",

      "no-new-wrappers": "error",

      "no-nonoctal-decimal-escape": "error",

      "no-octal": "error",

      "no-octal-escape": "error",

      "no-param-reassign": [
        "error",
        {
          props: true,
          ignorePropertyModificationsFor: [
            "acc", // for reduce accumulators
            "accumulator", // for reduce accumulators
            "e", // for e.returnvalue
            "ctx", // for Koa routing
            "context", // for Koa routing
            "req", // for Express requests
            "request", // for Express requests
            "res", // for Express responses
            "response", // for Express responses
            "$scope", // for Angular 1 scopes
            "staticContext", // for ReactRouter context
          ],
        },
      ],

      "no-proto": "error",

      "no-redeclare": "off",

      "@typescript-eslint/no-redeclare": [
        "error",
        {
          builtinGlobals: true,
        },
      ],

      "no-restricted-properties": [
        "error",
        {
          object: "arguments",
          property: "callee",
          message: "arguments.callee is deprecated",
        },
        {
          object: "global",
          property: "isFinite",
          message: "Please use Number.isFinite instead",
        },
        {
          object: "self",
          property: "isFinite",
          message: "Please use Number.isFinite instead",
        },
        {
          object: "window",
          property: "isFinite",
          message: "Please use Number.isFinite instead",
        },
        {
          object: "global",
          property: "isNaN",
          message: "Please use Number.isNaN instead",
        },
        {
          object: "self",
          property: "isNaN",
          message: "Please use Number.isNaN instead",
        },
        {
          object: "window",
          property: "isNaN",
          message: "Please use Number.isNaN instead",
        },
        {
          property: "__defineGetter__",
          message: "Please use Object.defineProperty instead.",
        },
        {
          property: "__defineSetter__",
          message: "Please use Object.defineProperty instead.",
        },
      ],

      "no-return-assign": ["error", "always"],

      "no-return-await": "off",

      "@typescript-eslint/return-await": "error",

      "no-script-url": "error",

      "no-self-assign": [
        "error",
        {
          props: true,
        },
      ],

      "no-self-compare": "error",

      "no-sequences": [
        "error",
        {
          allowInParentheses: false,
        },
      ],

      "no-throw-literal": "off",

      "@typescript-eslint/only-throw-error": "error",

      "no-unmodified-loop-condition": "error",

      "no-unused-expressions": "off",

      "@typescript-eslint/no-unused-expressions": [
        "error",
        {
          allowShortCircuit: false,
          allowTernary: false,
          allowTaggedTemplates: false,
          enforceForJSX: false,
        },
      ],

      "no-unused-labels": "error",

      "no-useless-call": "warn",

      "no-useless-catch": "error",

      "no-useless-concat": "error",

      "no-useless-escape": "error",

      "no-useless-return": "error",

      "no-void": [
        "error",
        {
          allowAsStatement: false,
        },
      ],

      "no-warning-comments": "off",

      "no-with": "error",

      "prefer-promise-reject-errors": [
        "error",
        {
          allowEmptyReject: true,
        },
      ],

      "prefer-named-capture-group": "off",

      "prefer-object-has-own": "error",

      "prefer-regex-literals": [
        "error",
        {
          disallowRedundantWrapping: true,
        },
      ],

      radix: ["error", "always"],

      "require-await": "off",

      "@typescript-eslint/require-await": "warn",

      "require-unicode-regexp": "off",

      "vars-on-top": "error",

      "wrap-iife": [
        "error",
        "outside",
        {
          functionPrototypeMethods: false,
        },
      ],

      yoda: ["error", "never"],

      "for-direction": "error",

      "getter-return": "off",

      "no-async-promise-executor": "error",

      "no-await-in-loop": "error",

      "no-compare-neg-zero": "error",

      "no-cond-assign": ["error", "always"],

      "no-console": "warn",

      "no-constant-binary-expression": "warn",

      "no-constant-condition": [
        "error",
        {
          checkLoops: true,
        },
      ],

      "no-control-regex": "error",

      "no-debugger": "error",

      "no-dupe-args": "off",

      "no-dupe-else-if": "error",

      "no-dupe-keys": "off",

      "no-duplicate-case": "error",

      "no-empty": [
        "error",
        {
          allowEmptyCatch: false,
        },
      ],

      "no-empty-character-class": "error",

      "no-ex-assign": "error",

      "no-extra-boolean-cast": [
        "error",
        {
          enforceForLogicalOperands: true,
        },
      ],

      "no-extra-parens": "off",

      "@stylistic/ts/no-extra-parens": "off",

      "no-extra-semi": "off",

      "@stylistic/ts/no-extra-semi": "error",

      "no-func-assign": "error",

      "no-import-assign": "error",

      "no-inner-declarations": ["error", "functions"],

      "no-invalid-regexp": "error",

      "no-irregular-whitespace": [
        "error",
        {
          skipStrings: true,
          skipComments: true,
          skipRegExps: true,
          skipTemplates: true,
        },
      ],

      "no-loss-of-precision": "warn",

      "@typescript-eslint/no-loss-of-precision": "error",

      "no-misleading-character-class": "error",

      "no-obj-calls": "error",

      "no-promise-executor-return": "error",

      "no-prototype-builtins": "error",

      "no-regex-spaces": "error",

      "no-setter-return": "error",

      "no-sparse-arrays": "error",

      "no-template-curly-in-string": "error",

      "no-unexpected-multiline": "error",

      "no-unreachable": "error",

      "no-unreachable-loop": "error",

      "no-unsafe-finally": "error",

      "no-unsafe-negation": "error",

      "no-unsafe-optional-chaining": [
        "error",
        {
          disallowArithmeticOperators: true,
        },
      ],

      "no-unused-private-class-members": "off",

      "no-useless-backreference": "error",

      "no-negated-in-lhs": "off",

      "require-atomic-updates": [
        "warn",
        {
          allowProperties: false,
        },
      ],

      "use-isnan": [
        "error",
        {
          enforceForSwitchCase: true,
          enforceForIndexOf: true,
        },
      ],

      "valid-jsdoc": "off",

      "valid-typeof": [
        "error",
        {
          requireStringLiterals: true,
        },
      ],

      "arrow-body-style": [
        "error",
        "as-needed",
        {
          requireReturnForObjectLiteral: false,
        },
      ],

      "arrow-parens": ["error", "as-needed"],

      "arrow-spacing": [
        "error",
        {
          before: true,
          after: true,
        },
      ],

      "constructor-super": "off",

      "generator-star-spacing": [
        "error",
        {
          before: false,
          after: true,
        },
      ],

      "no-class-assign": "error",

      "no-confusing-arrow": [
        "error",
        {
          allowParens: true,
        },
      ],

      "no-const-assign": "off",

      "no-dupe-class-members": "off",

      "@typescript-eslint/no-dupe-class-members": "off",

      "no-duplicate-imports": "error",

      "no-new-symbol": "error",

      "no-restricted-exports": [
        "error",
        {
          restrictedNamedExports: [
            "default", // use `export default` to provide a default export
            "then", // this will cause tons of confusion when your module is dynamically `import()`ed, and will break in most node ESM versions
          ],
        },
      ],

      "no-restricted-imports": "off",

      "no-this-before-super": "error",

      "no-useless-computed-key": [
        "error",
        {
          enforceForClassMembers: true,
        },
      ],

      "no-useless-constructor": "off",

      "@typescript-eslint/no-useless-constructor": "error",

      "no-useless-rename": [
        "error",
        {
          ignoreDestructuring: false,
          ignoreImport: false,
          ignoreExport: false,
        },
      ],

      "no-var": "error",

      "object-shorthand": [
        "error",
        "always",
        {
          ignoreConstructors: false,
          avoidQuotes: true,
          avoidExplicitReturnArrows: false,
        },
      ],

      "prefer-arrow-callback": [
        "error",
        {
          allowNamedFunctions: false,
          allowUnboundThis: true,
        },
      ],

      "prefer-const": [
        "error",
        {
          destructuring: "any",
          ignoreReadBeforeAssign: true,
        },
      ],

      "prefer-destructuring": "off",

      "prefer-numeric-literals": "error",

      "prefer-reflect": "off",

      "prefer-rest-params": "error",

      "prefer-spread": "error",

      "prefer-template": "error",

      "require-yield": "error",

      "rest-spread-spacing": ["error", "never"],

      "sort-imports": [
        "error",
        {
          ignoreCase: false,
          ignoreDeclarationSort: false,
          ignoreMemberSort: false,
          memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
          allowSeparatedGroups: false,
        },
      ],

      "symbol-description": "error",

      "template-curly-spacing": ["error", "never"],

      "yield-star-spacing": ["error", "after"],

      "callback-return": "off",

      "global-require": "error",

      "handle-callback-err": "off",

      "no-buffer-constructor": "error",

      "no-mixed-requires": "off",

      "no-new-require": "error",

      "no-path-concat": "error",

      "no-process-env": "off",

      "no-process-exit": "off",

      "no-restricted-modules": "off",

      "no-sync": "off",

      strict: ["error", "never"],

      "array-bracket-newline": "off",

      "array-element-newline": "off",

      "array-bracket-spacing": ["error", "never"],

      "block-spacing": ["error", "always"],

      "brace-style": "off",

      "@stylistic/ts/brace-style": [
        "error",
        "1tbs",
        {
          allowSingleLine: false,
        },
      ],

      camelcase: "off",

      "@typescript-eslint/naming-convention": [
        "error",
        // Allow camelCase variables (23.2), PascalCase variables (23.8), and UPPER_CASE variables (23.10)
        {
          selector: "variable",
          format: ["camelCase", "PascalCase", "UPPER_CASE"],
        },
        // Allow camelCase functions (23.2), and PascalCase functions (23.8)
        {
          selector: "function",
          format: ["camelCase", "PascalCase"],
        },
        // Airbnb recommends PascalCase for classes (23.3), and although Airbnb does not make TypeScript recommendations, we are assuming this rule would similarly apply to anything "type like", including interfaces, type aliases, and enums
        {
          selector: "typeLike",
          format: ["PascalCase"],
        },
      ],

      "capitalized-comments": "off",

      "comma-dangle": "off",

      "@stylistic/ts/comma-dangle": [
        "error",
        {
          arrays: "always-multiline",
          objects: "always-multiline",
          imports: "always-multiline",
          exports: "always-multiline",
          functions: "always-multiline",
          enums: "always-multiline",
          generics: "always-multiline",
          tuples: "always-multiline",
        },
      ],

      "comma-spacing": "off",

      "@stylistic/ts/comma-spacing": [
        "error",
        {
          before: false,
          after: true,
        },
      ],

      "comma-style": [
        "error",
        "last",
        {
          exceptions: {
            ArrayExpression: false,
            ArrayPattern: false,
            ArrowFunctionExpression: false,
            CallExpression: false,
            FunctionDeclaration: false,
            FunctionExpression: false,
            ImportDeclaration: false,
            ObjectExpression: false,
            ObjectPattern: false,
            VariableDeclaration: false,
            NewExpression: false,
          },
        },
      ],

      "computed-property-spacing": ["error", "never"],

      "consistent-this": "off",

      "eol-last": ["error", "always"],

      "function-call-argument-newline": ["error", "consistent"],

      "func-call-spacing": "off",

      "@stylistic/ts/func-call-spacing": ["error", "never"],

      "func-name-matching": [
        "error",
        "always",
        {
          includeCommonJSModuleExports: false,
          considerPropertyDescriptor: true,
        },
      ],

      "func-names": [
        "error",
        "as-needed",
        {
          generators: "as-needed",
        },
      ],

      "func-style": "off",

      "function-paren-newline": ["error", "multiline-arguments"],

      "id-denylist": "off",

      "id-length": "off",

      "id-match": "off",

      "implicit-arrow-linebreak": ["error", "beside"],

      indent: "off",

      "@stylistic/ts/indent": [
        "error",
        2,
        {
          SwitchCase: 1,
          VariableDeclarator: 1,
          outerIIFEBody: 1,
          FunctionDeclaration: {
            parameters: 1,
            body: 1,
          },
          FunctionExpression: {
            parameters: 1,
            body: 1,
          },
          CallExpression: {
            arguments: 1,
          },
          ArrayExpression: 1,
          ObjectExpression: 1,
          ImportDeclaration: 1,
          flatTernaryExpressions: false,
          // list derived from https://github.com/benjamn/ast-types/blob/HEAD/def/jsx.js
          ignoredNodes: [
            "JSXElement",
            "JSXElement > *",
            "JSXAttribute",
            "JSXIdentifier",
            "JSXNamespacedName",
            "JSXMemberExpression",
            "JSXSpreadAttribute",
            "JSXExpressionContainer",
            "JSXOpeningElement",
            "JSXClosingElement",
            "JSXFragment",
            "JSXOpeningFragment",
            "JSXClosingFragment",
            "JSXText",
            "JSXEmptyExpression",
            "JSXSpreadChild",
          ],
          ignoreComments: false,
        },
      ],

      "jsx-quotes": ["error", "prefer-single"],

      "key-spacing": [
        "error",
        {
          beforeColon: false,
          afterColon: true,
          mode: "strict",
        },
      ],

      "keyword-spacing": "off",

      "@stylistic/ts/keyword-spacing": [
        "error",
        {
          before: true,
          after: true,
        },
      ],

      "line-comment-position": "off",

      "linebreak-style": ["error", "unix"],

      "lines-between-class-members": "off",

      "@stylistic/ts/lines-between-class-members": [
        "error",
        "always",
        {
          exceptAfterSingleLine: false,
        },
      ],

      "lines-around-comment": "off",

      "lines-around-directive": [
        "error",
        {
          before: "always",
          after: "always",
        },
      ],

      "logical-assignment-operators": "off",

      "max-depth": "off",

      "max-len": [
        "error",
        100,
        2,
        {
          ignoreUrls: true,
          ignoreComments: false,
          ignoreRegExpLiterals: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
        },
      ],

      "max-lines": "off",

      "max-lines-per-function": "off",

      "max-nested-callbacks": "off",

      "max-params": "off",

      "max-statements": "off",

      "max-statements-per-line": [
        "off",
        {
          max: 1,
        },
      ],

      "multiline-comment-style": ["error", "starred-block"],

      "multiline-ternary": "off",

      "new-cap": [
        "error",
        {
          newIsCap: true,
          newIsCapExceptions: [],
          capIsNew: true,
          capIsNewExceptions: [
            "Immutable.Map",
            "Immutable.Set",
            "Immutable.List",
          ],
          properties: true,
        },
      ],

      "new-parens": ["error", "always"],

      "newline-after-var": "off",

      "newline-before-return": "off",

      "newline-per-chained-call": [
        "error",
        {
          ignoreChainWithDepth: 4,
        },
      ],

      "no-array-constructor": "off",

      "@typescript-eslint/no-array-constructor": "error",

      "no-bitwise": "error",

      "no-continue": "error",

      "no-inline-comments": "off",

      "no-lonely-if": "error",

      "no-mixed-operators": [
        "error",
        {
          groups: [
            ["%", "**"],
            ["%", "+"],
            ["%", "-"],
            ["%", "*"],
            ["%", "/"],
            ["/", "*"],
            ["&", "|", "<<", ">>", ">>>"],
            ["==", "!=", "===", "!=="],
            ["&&", "||"],
          ],
          allowSamePrecedence: false,
        },
      ],

      "no-mixed-spaces-and-tabs": "error",

      "no-multi-assign": [
        "error",
        {
          ignoreNonDeclaration: false,
        },
      ],

      "no-multiple-empty-lines": [
        "error",
        {
          max: 2,
          maxBOF: 0,
          maxEOF: 1,
        },
      ],

      "no-negated-condition": "off",

      "no-nested-ternary": "warn",

      "no-new-object": "error",

      "no-plusplus": "off",

      "no-restricted-syntax": [
        "error",
        {
          selector: "ForInStatement",
          message:
            "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.",
        },
        {
          selector: "ForOfStatement",
          message:
            "iterators/generators require regenerator-runtime, which is too heavyweight for this guide to allow them. Separately, loops should be avoided in favor of array iterations.",
        },
        {
          selector: "LabeledStatement",
          message:
            "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.",
        },
        {
          selector: "WithStatement",
          message:
            "`with` is disallowed in strict mode because it makes code impossible to predict and optimize.",
        },
      ],

      "no-spaced-func": "off",

      "no-tabs": [
        "error",
        {
          allowIndentationTabs: false,
        },
      ],

      "no-ternary": "off",

      "no-trailing-spaces": [
        "error",
        {
          skipBlankLines: false,
          ignoreComments: false,
        },
      ],

      "no-underscore-dangle": [
        "error",
        {
          allow: [],
          allowAfterThis: false,
          allowAfterSuper: false,
          allowAfterThisConstructor: false,
          enforceInMethodNames: true,
          enforceInClassFields: true,
          allowFunctionParams: false,
        },
      ],

      "no-unneeded-ternary": [
        "error",
        {
          defaultAssignment: true,
        },
      ],

      "no-whitespace-before-property": "error",

      "nonblock-statement-body-position": ["error", "below"],

      "object-curly-spacing": "off",

      "@stylistic/ts/object-curly-spacing": ["error", "always"],

      "object-curly-newline": [
        "error",
        {
          ObjectExpression: {
            minProperties: 4,
            multiline: true,
            consistent: true,
          },
          ObjectPattern: {
            minProperties: 4,
            multiline: true,
            consistent: true,
          },
          ImportDeclaration: {
            minProperties: 4,
            multiline: true,
            consistent: true,
          },
          ExportDeclaration: {
            minProperties: 4,
            multiline: true,
            consistent: true,
          },
        },
      ],

      "object-property-newline": [
        "error",
        {
          allowAllPropertiesOnSameLine: true,
        },
      ],

      "one-var": ["error", "never"],

      "one-var-declaration-per-line": ["error", "always"],

      "operator-assignment": "off",

      "operator-linebreak": [
        "error",
        "before",
        {
          overrides: {
            "=": "none",
          },
        },
      ],

      "padded-blocks": [
        "error",
        {
          blocks: "never",
          classes: "never",
          switches: "never",
        },
      ],

      "padding-line-between-statements": "off",

      "prefer-exponentiation-operator": "off",

      "prefer-object-spread": "error",

      "quote-props": [
        "error",
        "as-needed",
        {
          keywords: false,
          unnecessary: true,
          numbers: false,
        },
      ],

      quotes: "off",

      "@stylistic/ts/quotes": [
        "error",
        "single",
        {
          avoidEscape: true,
          allowTemplateLiterals: false,
        },
      ],

      "require-jsdoc": "off",

      semi: "off",

      "@stylistic/ts/semi": ["error", "always"],

      "semi-spacing": [
        "error",
        {
          before: false,
          after: true,
        },
      ],

      "semi-style": ["error", "last"],

      "sort-keys": "off",

      "sort-vars": "off",

      "space-before-blocks": "off",

      "@stylistic/ts/space-before-blocks": ["error", "always"],

      "space-before-function-paren": "off",

      "@stylistic/ts/space-before-function-paren": [
        "error",
        {
          anonymous: "always",
          named: "never",
          asyncArrow: "always",
        },
      ],

      "space-in-parens": ["error", "never"],

      "space-infix-ops": "off",

      "@stylistic/ts/space-infix-ops": [
        "error",
        {
          int32Hint: false,
        },
      ],

      "space-unary-ops": [
        "error",
        {
          words: true,
          nonwords: false,
          overrides: {},
        },
      ],

      "spaced-comment": [
        "error",
        "always",
        {
          line: {
            exceptions: ["-", "+"],
            markers: ["=", "!", "/"], // space here to support sprockets directives, slash for TS /// comments
          },
          block: {
            exceptions: ["-", "+"],
            markers: ["=", "!", ":", "::"], // space here to support sprockets directives and flow comment types
            balanced: true,
          },
        },
      ],

      "switch-colon-spacing": [
        "error",
        {
          after: true,
          before: false,
        },
      ],

      "template-tag-spacing": ["error", "never"],

      "unicode-bom": ["error", "never"],

      "wrap-regex": "off",

      "init-declarations": "off",

      "no-catch-shadow": "off",

      "no-delete-var": "error",

      "no-label-var": "error",

      "no-restricted-globals": [
        "error",
        {
          name: "isFinite",
          message:
            "Use Number.isFinite instead https://github.com/airbnb/javascript#standard-library--isfinite",
        },
        {
          name: "isNaN",
          message:
            "Use Number.isNaN instead https://github.com/airbnb/javascript#standard-library--isnan",
        },
      ],

      "no-shadow": "off",

      "@typescript-eslint/no-shadow": [
        "error",
        {
          builtinGlobals: true,
          ignoreOnInitialization: false,
          allow: [],
          hoist: "functions",
        },
      ],

      "no-shadow-restricted-names": "error",

      "no-undef": "off",

      "no-undef-init": "error",

      "no-undefined": "off",

      "no-unused-vars": "off",

      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          vars: "all",
          args: "after-used",
          ignoreRestSiblings: true,
          caughtErrors: "all",
          caughtErrorsIgnorePattern: "^ignore$",
        },
      ],

      "no-use-before-define": "off",

      "@typescript-eslint/no-use-before-define": "off",

      "no-new-native-nonconstructor": "error",
    },
  },
];
