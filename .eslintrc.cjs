/** ESLint config for Next.js 14 */
module.exports = {
  root: true,
  extends: ['next', 'next/core-web-vitals'],
  settings: { react: { version: 'detect' } },
  rules: {
    // Next.js with React 17+ doesn’t need React in scope for JSX
    'react/react-in-jsx-scope': 'off',

    // We’re not using PropTypes; use TS or skip
    'react/prop-types': 'off',

    // Don’t break builds on small nits
    'no-unused-vars': 'warn',

    // (Optional) keep these as 'warn' if you want to see them without failing builds
    'react/no-unknown-property': 'warn',
    'react/jsx-no-duplicate-props': 'warn',
  },
};
