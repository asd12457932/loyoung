module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    extends: [
        'plugin:nuxt/recommended',
        '@nuxtjs/eslint-config-typescript',
        'airbnb-base',
    ],
    plugins: [
    ],
    globals: {
        $nuxt: true,
        $fetch: true,
    },
    rules: {
        'semi': ['error', 'always'],
        'comma-dangle': ['error', 'always-multiline'],
        'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
        'camelcase': 'off',
        'func-names': 'off',
        'func-call-spacing': 'off',
        'linebreak-style': 'off',
        'no-nested-ternary': 'warn',
        'import/no-dynamic-require': 'off',
        'global-require': 'off',
        'no-console': ['warn', { allow: ['warn', 'error'] }],
        'no-debugger': 'warn',
        'no-bitwise': 'off',
        'no-shadow': 'off',
        'no-spaced-func': 'off',
        'spaced-comment': ['error', 'always', {
            line: {
                markers: ['/'],
                exceptions: ['/', '#'],
            },
            block: {
                markers: ['!'],
                exceptions: ['*'],
                balanced: true,
            },
        }],
        'no-useless-constructor': 'off',
        'class-methods-use-this': 'off',
        'quote-props': ['error', 'consistent-as-needed'],
        'radix': ['error', 'as-needed'],
        'no-plusplus': 'off',
        'prefer-destructuring': 'off',
        'import/prefer-default-export': 'off',
        'import/no-extraneous-dependencies': ['error', {
            devDependencies: true,
            optionalDependencies: false,
            peerDependencies: true,
        }],
        'import/extensions': ['error', 'always', {
            js: 'never',
            ts: 'never',
            vue: 'always',
        }],
        'import/order': ['error', { alphabetize: { order: 'asc' } }],
        'no-use-before-define': 'off',
        'indent': ['error', 4, { SwitchCase: 1 }],
        'curly': ['error', 'multi-line'],
        'brace-style': ['error', '1tbs'],
        'eqeqeq': ['error', 'always'],
        'max-len': 'off',
        'no-param-reassign': 'off',
        'no-unused-expressions': 'off',
        'lines-between-class-members': ['error', 'always', {
            exceptAfterSingleLine: true,
        }],
        'sort-imports': [
            'error',
            {
                ignoreCase: false,
                ignoreDeclarationSort: true,
                ignoreMemberSort: false,
                memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
                allowSeparatedGroups: false,
            },
        ],
        'padding-line-between-statements': [
            'error',
            { blankLine: 'always', prev: ['function', 'export'], next: ['function', 'export'] },
            { blankLine: 'always', prev: '*', next: 'export' },
        ],
        'object-curly-newline': ['error', { multiline: true, minProperties: 10, consistent: true }],
        'vue/no-use-v-if-with-v-for': 'off',
        'vue/v-bind-style': ['error', 'longform'],
        'vue/v-on-style': ['error', 'longform'],
        'vue/max-attributes-per-line': ['error', {
            singleline: 2,
            multiline: {
                max: 1,
            },
        }],
        'vue/multi-word-component-names': 'off',
        'vue/padding-line-between-blocks': ['error', 'always'],
        'vue/html-indent': ['error', 4],
        'vue/script-indent': ['error', 4, {
            baseIndent: 1,
            switchCase: 1,
        }],
        'vue/html-closing-bracket-newline': ['error', {
            singleline: 'never',
            multiline: 'always',
        }],
        'vue/html-closing-bracket-spacing': ['error', {
            startTag: 'never',
            endTag: 'never',
            selfClosingTag: 'always',
        }],
        'vue/attribute-hyphenation': ['error', 'never', {
            ignore: [],
        }],
        'vue/require-default-prop': 'error',
        'vue/no-multi-spaces': ['error', { ignoreProperties: false }],
        'vue/mustache-interpolation-spacing': ['error', 'always'],
        'vue/component-name-in-template-casing': ['error', 'PascalCase', {
            registeredComponentsOnly: false,
            ignores: ['i18n', 'component'],
        }],
        'vue/singleline-html-element-content-newline': ['error', {
            ignoreWhenNoAttributes: true,
            ignoreWhenEmpty: true,
        }],
        'vue/order-in-components': ['error', {
            order: [
                'el',
                'name',
                'parent',
                'functional',
                ['delimiters', 'comments'],
                ['components', 'directives', 'filters'],
                'extends',
                'mixins',
                'inheritAttrs',
                'model',
                'emits',
                ['props', 'propsData'],
                'fetch',
                'asyncData',
                'data',
                'computed',
                'apollo',
                'watch',
                'LIFECYCLE_HOOKS',
                'methods',
                'head',
                ['template', 'render'],
                'renderError',
            ],
        }],
        'vue/v-on-event-hyphenation': 'off',
        '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
        '@typescript-eslint/no-namespace': 'off',
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/no-misused-new': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/member-delimiter-style': ['error', {
            singleline: { delimiter: 'comma' },
            multiline: { delimiter: 'semi' },
        }],
        '@typescript-eslint/ban-ts-comment': ['error', { 'ts-ignore': 'allow-with-description' }],
        '@typescript-eslint/prefer-ts-expect-error': 'error',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/type-annotation-spacing': ['error', {}],
        '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports', disallowTypeAnnotations: false }],
        '@typescript-eslint/no-use-before-define': ['error', {
            functions: false,
            classes: false,
            enums: false,
            typedefs: false,
        }],
        'no-undef': 'off', // 因為 Nuxt3 具有自動導入，但是在 Vue SFC 中沒有 import 導致提示錯誤，先把他關掉
    },
    overrides: [
        {
            files: [
                '**/__tests__/*.{j,t}s?(x)',
                '**/tests/unit/**/*.spec.{j,t}s?(x)',
            ],
        },
        {
            files: ['*.vue'],
            rules: {
                indent: 'off',
            },
        },
        {
            files: ['*.ts'],
            rules: {
                'indent': 'off',
                '@typescript-eslint/indent': ['error'],
            },
        },
    ],
};
