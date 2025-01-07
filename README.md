# React Component Generator by KruII

A VS Code extension that allows you to generate React components with just one click.

## Features

- Automatically creates a React component folder.
- Generates `.tsx`, `.module.css`, and `.test.tsx` files.
- Integrates with the VS Code context menu for easy use.

## Installation

1. Open the Extensions view in VS Code (`Ctrl+Shift+X` or `Cmd+Shift+X`).
2. Search for **React Component Generator By KruII**.
3. Click **Install**.

OR click [here](https://marketplace.visualstudio.com/items?itemName=KruII.react-component-generator-KruII) to install from the Marketplace.

## Usage

1. Right-click on a folder in the Explorer pane.
2. Select **"Create a New React Component"**.
3. Enter the name of the component when prompted.
4. The extension will create the component folder and the following files:
   - `<ComponentName>.tsx`
   - `<ComponentName>.module.css`
   - `<ComponentName>.test.tsx`

## Requirements

- VS Code version `1.96.0` or higher.
- Node.js and npm installed on your system.
- TypeScript should be configured in your React project to handle `.tsx` files.

## Known Issues

- The extension does not overwrite existing folders with the same name.
- Ensure you select a valid folder before running the command.
- No other known issues at this time. Please report any bugs or issues via the [GitHub Issues page](https://github.com/KruII/React-Component-Generator/issues).

## Contribution

Feel free to open an issue or submit a pull request if you have suggestions or find a bug.

## License

This project is licensed under the [MIT License](LICENSE).
