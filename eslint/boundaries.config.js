import boundaries from 'eslint-plugin-boundaries'

const architecturalBoundariesConfig = {
  files: ['src/**/*.{ts,tsx}'],
  plugins: {
    boundaries,
  },
  settings: {
    'boundaries/elements': [
      {
        type: 'layout',
        pattern: 'src/app/layouts/*',
        capture: ['elementName'],
        partialMatch: false,
      },
      {
        type: 'page',
        pattern: 'src/pages/*',
        capture: ['elementName'],
        partialMatch: false,
      },
      {
        type: 'section',
        pattern: 'src/sections/*/*',
        capture: ['pageName', 'elementName'],
        partialMatch: false,
      },
      {
        type: 'ui',
        pattern: 'src/components/ui/*',
        capture: ['elementName'],
        partialMatch: false,
      },
      {
        type: 'component',
        pattern: 'src/components/*',
        capture: ['elementName'],
        partialMatch: false,
      },
      {
        type: 'lib',
        pattern: 'src/lib',
        partialMatch: false,
      },
      {
        type: 'app',
        pattern: 'src/app',
        partialMatch: false,
      },
    ],
    'boundaries/files': [
      {
        pattern: 'src/main.tsx',
        category: 'entry',
      },
    ],
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: './tsconfig.json',
      },
    },
  },
  rules: {
    ...boundaries.configs.recommended.rules,
    'boundaries/no-unknown-files': 'error',
    'boundaries/dependencies': [
      'error',
      {
        default: 'disallow',
        policies: [
          {
            from: { file: { categories: 'entry' } },
            allow: {
              to: {
                element: {
                  type: 'app',
                  fileInternalPath: ['router.tsx', 'global.css', 'index.ts'],
                },
              },
            },
          },
          {
            from: { element: { type: 'app' } },
            allow: {
              to: [
                {
                  element: {
                    type: 'layout',
                    fileInternalPath: ['index.ts', 'index.tsx'],
                  },
                },
                {
                  element: {
                    type: ['page', 'section', 'component', 'ui', 'lib'],
                    fileInternalPath: ['index.ts', 'index.tsx'],
                  },
                },
              ],
            },
          },
          {
            from: { element: { type: 'layout' } },
            allow: {
              to: {
                element: {
                  type: ['layout', 'component', 'ui', 'lib'],
                  fileInternalPath: ['index.ts', 'index.tsx'],
                },
              },
            },
          },
          {
            from: { element: { type: 'page' } },
            allow: {
              to: {
                element: {
                  type: ['section', 'component', 'ui', 'lib'],
                  fileInternalPath: ['index.ts', 'index.tsx'],
                },
              },
            },
          },
          {
            from: { element: { type: 'section' } },
            allow: {
              to: {
                element: {
                  type: ['component', 'ui', 'lib'],
                  fileInternalPath: ['index.ts', 'index.tsx'],
                },
              },
            },
          },
          {
            from: { element: { type: 'component' } },
            allow: {
              to: {
                element: {
                  type: ['component', 'ui', 'lib'],
                  fileInternalPath: ['index.ts', 'index.tsx'],
                },
              },
            },
          },
          {
            from: { element: { type: 'ui' } },
            allow: {
              to: {
                element: {
                  type: ['ui', 'lib'],
                  fileInternalPath: ['index.ts', 'index.tsx'],
                },
              },
            },
          },
        ],
      },
    ],
  },
}

const layoutImportsConfig = {
  files: ['src/app/layouts/**/*.{ts,tsx}'],
  rules: {
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          {
            group: ['@/app/layouts', '@/app/layouts/**'],
            message:
              'Внутри layouts используйте относительный импорт через ../',
          },
          {
            group: ['../../*'],
            message: 'Для импорта из другой области используйте алиас @/',
          },
        ],
      },
    ],
  },
}

export const boundariesConfig = [
  architecturalBoundariesConfig,
  layoutImportsConfig,
]
