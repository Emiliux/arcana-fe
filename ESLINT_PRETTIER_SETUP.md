# ESLint and Prettier Setup for Angular

This project has been configured with ESLint and Prettier to maintain clean and consistent code.

## 📦 Installed Dependencies

- **ESLint**: Main linter for JavaScript/TypeScript
- **@angular-eslint/eslint-plugin**: ESLint plugin for Angular
- **@angular-eslint/template-parser**: Parser for Angular HTML templates
- **@typescript-eslint/eslint-plugin**: ESLint plugin for TypeScript
- **@typescript-eslint/parser**: TypeScript parser for ESLint
- **eslint-plugin-import**: Plugin for import rules
- **Prettier**: Code formatter
- **eslint-config-prettier**: ESLint configuration compatible with Prettier
- **eslint-plugin-prettier**: Prettier plugin for ESLint

## 🚀 Available Scripts

### Linting
```bash
# Check and automatically fix linting issues
npm run lint

# Only check linting issues (without fixing)
npm run lint:check
```

### Formatting
```bash
# Format all code automatically
npm run format

# Check if code is properly formatted
npm run format:check
```

## ⚙️ Configuration

### ESLint (`.eslintrc.json`)
- **Base rules**: `eslint:recommended`
- **Integration**: Compatible with Prettier
- **Parser**: TypeScript for `.ts` files
- **Templates**: Specialized parser for Angular `.html` files

### Prettier (`.prettierrc`)
- **Semicolons**: Enabled
- **Quotes**: Single
- **Max width**: 100 characters
- **Indentation**: 2 spaces
- **Trailing commas**: ES5

### Ignore Files
- `.eslintignore`: Files that should not be linted
- `.prettierignore`: Files that should not be formatted

## 🔧 VS Code Integration

### Recommended Extensions
- **ESLint**: `dbaeumer.vscode-eslint`
- **Prettier**: `esbenp.prettier-vscode`
- **Angular**: `angular.ng-template`

### VS Code Configuration
The `.vscode/settings.json` file is configured to:
- Automatically format on save
- Use Prettier as default formatter
- Run ESLint automatically on save
- Validate TypeScript, JavaScript and HTML files

## 📋 Linting Rules

### Main Rules
- **no-unused-vars**: Error for unused variables
- **no-empty-function**: Allow empty functions
- **no-undef**: Disabled (handled by TypeScript)
- **no-console**: Allow console.log (for development)

### Import Rules
- **import/order**: Order imports by groups
- **import/no-duplicates**: Don't allow duplicate imports
- **import/no-cycle**: Don't allow circular imports

## 🎯 Daily Usage

### 1. Development
```bash
# When working on code, use:
npm run lint:check    # Check for issues
npm run format:check  # Check formatting
```

### 2. Before Commit
```bash
# Automatically fix:
npm run lint          # Fix linting issues
npm run format        # Format code
```

### 3. CI/CD
```bash
# Check without fixing:
npm run lint:check    # Should pass without errors
npm run format:check  # Should pass without warnings
```

## 🐛 Troubleshooting

### Error: "Definition for rule 'X' was not found"
- Verify that the rule is available in the installed version
- Review ESLint configuration

### Error: "Parsing error: The keyword 'import' is reserved"
- Verify that the TypeScript parser is configured correctly
- Ensure `@typescript-eslint/parser` is installed

### Prettier not formatting files
- Verify that the file is not in `.prettierignore`
- Ensure VS Code extension is installed
- Check `.prettierrc` configuration

## 📚 Additional Resources

- [ESLint Documentation](https://eslint.org/)
- [Prettier Documentation](https://prettier.io/)
- [Angular ESLint](https://github.com/angular-eslint/angular-eslint)
- [TypeScript ESLint](https://typescript-eslint.io/)

## 🔄 Migration from TSLint

This project has been migrated from TSLint (deprecated) to ESLint:
- ✅ TSLint removed
- ✅ Codelyzer removed
- ✅ ESLint configuration implemented
- ✅ Prettier integration configured
- ✅ npm scripts updated

## 📝 Version Notes

- **Angular**: 14.2.7
- **TypeScript**: 4.7.4
- **ESLint**: 8.57.0
- **Prettier**: 2.8.8
