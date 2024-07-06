module.exports = {
  '*.{js,ts}': [
    'prettier --check --write --ignore-unknown', // Controlla e formatta con Prettier
    'eslint --cache --color --fix', // Esegue ESLint con la cache abilitata e corregge automaticamente i problemi
    () => 'tsc --pretty --noEmit', // Esegue il TypeScript compiler senza produrre output
  ],
  '!*.{js,ts}': ['prettier --check --write --ignore-unknown'], // Controlla e formatta con Prettier tutti i file tranne JS/TS
  '*.scss': ['stylelint --cache --color --fix'], // Esegue Stylelint con la cache abilitata e corregge automaticamente i problemi sugli SCSS
  'src/assets/i18n/**/*.json': ['transloco-validator'], // Esegue un validatore personalizzato per i file JSON di traduzione
};
