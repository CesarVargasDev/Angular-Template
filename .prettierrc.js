module.exports = {
  endOfLine: 'lf',
  arrowParens: 'avoid',
  printWidth: 120,
  quoteProps: 'as-needed',
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  overrides: [
    {
      files: '*.ts',
      options: { parser: 'typescript' },
    },
  ],
};
