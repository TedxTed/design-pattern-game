mkdir ts-project
cd ts-project

echo "v20.10.0" > .nvmrc
nvm install
nvm use

npm init -y
npm install --save-dev typescript @types/node @tsconfig/node20 @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint prettier eslint-plugin-prettier eslint-config-prettier ts-node

echo '{
  "extends": "@tsconfig/node20/tsconfig.json",
  "compilerOptions": { "outDir": "dist" }
}' > tsconfig.json

echo "/* eslint-env node */
module.exports = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  root: true,
};" > .eslintrc.cjs

echo "dist" > .eslintignore

echo '{
  "printWidth": 120,
  "singleQuote": true
}' > .prettierrc
