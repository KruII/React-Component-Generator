# React Component Generator - Quickstart Guide

This guide helps you set up and test the extension during development.

## Development Setup

1. Clone this repository to your local machine.
2. Run `npm install` to install all dependencies.
3. Open the folder in VS Code.

## Running the Extension Locally

1. Press `F5` or go to **Run > Start Debugging** in VS Code. 
2. A new VS Code instance will open with the extension loaded.
3. Test the extension by right-clicking a folder in the Explorer pane and selecting **"Create a New React Component"**.

## File Structure

- `src/extension.ts`: Main source code for the extension.
- `dist/`: Compiled JavaScript files.
- `node_modules/`: Dependencies (not included in the repository).
- `package.json`: Extension configuration and scripts.
- `.vscode/`: Debugging and settings for development.

## Scripts

- `npm run compile`: Compile TypeScript to JavaScript.
- `npm run watch`: Compile TypeScript in watch mode.
- `npm run lint`: Lint the codebase using ESLint.

## Testing the Extension

Currently, the extension does not include automated tests for its functionality. Use manual testing to ensure proper behavior.

## Publishing the Extension

1. Ensure the extension works as expected locally.
2. Run `vsce package` to create a `.vsix` file for the extension.
3. Publish it to the VS Code marketplace.

For more information, visit the [VS Code Extension API documentation](https://code.visualstudio.com/api).
