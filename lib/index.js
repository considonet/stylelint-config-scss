module.exports = {
  "plugins": [
    "stylelint-scss",
  ],
  "extends": [
    "stylelint-config-standard",
    "stylelint-config-recommended-scss",
  ],
  "rules": {
    "max-empty-lines": 2,
    "no-eol-whitespace": true,
    "no-missing-end-of-source-newline": true,
    "declaration-colon-newline-after": "always-multi-line",
    "declaration-empty-line-before": null,
    "value-list-max-empty-lines": 0,

    "selector-pseudo-element-colon-notation": "double",
    "selector-list-comma-newline-after": null,
    "color-named": "never",

    "declaration-no-important": true,
    "declaration-block-no-duplicate-properties": true,
    "no-duplicate-selectors": null,

    "property-case": "lower",
    "value-keyword-case": "lower",
    "unit-case": "lower",
    "color-hex-case": "lower",
    "selector-pseudo-element-case": "lower",

    "selector-no-vendor-prefix": true,
    "property-no-vendor-prefix": true,
    "value-no-vendor-prefix": true,
    "media-feature-name-no-vendor-prefix": true,
    "at-rule-no-vendor-prefix": true,

    "number-leading-zero": "never",
    "number-no-trailing-zeros": true,
    "function-calc-no-unspaced-operator": true,
    "scss/operator-no-newline-before": true,
    "scss/operator-no-newline-after": true,
    "scss/operator-no-unspaced": true,

    "rule-empty-line-before": ["always-multi-line", {
      "except": [
        "after-single-line-comment"
      ],
      "ignore": [
        "first-nested"
      ]
    }],
    "at-rule-empty-line-before": ["always", {
      "except": [
        "first-nested",
        "blockless-after-same-name-blockless",
      ],
      "ignore": [
        "after-comment",

      ],
      "ignoreAtRules": [
        "import",
        "include",
        "else",
        "extend",
      ],
    }],
    "block-closing-brace-empty-line-before": null,
    "block-closing-brace-newline-before": null,
    "block-closing-brace-newline-after": [
      "always", {
        "ignoreAtRules": ["if", "else"]
      }
    ],
    "scss/at-else-closing-brace-newline-after": "always-last-in-chain",
    "scss/at-else-closing-brace-space-after": "always-intermediate",
    "scss/at-else-empty-line-before": "never",
    "scss/at-if-closing-brace-newline-after": "always-last-in-chain",
    "scss/at-if-closing-brace-space-after": "always-intermediate",
  }
};
