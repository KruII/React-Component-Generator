# React Component Generator

A VS Code extension that allows you to generate React components with just one click.

## Features

- Automatically creates a React component folder.
- Generates `.tsx`, `.module.css`, and `.test.tsx` files.
- Integrates with the VS Code context menu for easy use.

## Installation

1. Open the Extensions view in VS Code (`Ctrl+Shift+X` or `Cmd+Shift+X`).
2. Search for **React Component Generator**.
3. Click **Install**.

## Usage

1. Right-click on a folder in the Explorer pane.
2. Select **"Create a New React Component"**.
3. Enter the name of the component when prompted.
4. The extension will create the component folder and the following files:
   - `<ComponentName>.tsx`
   - `<ComponentName>.module.css`
   - `<ComponentName>.test.tsx`

## Requirements

- VS Code version `1.74.0` or higher.
- Node.js and npm installed on your system.

## Known Issues

- The extension does not overwrite existing folders with the same name.
- Ensure you select a valid folder before running the command.

## Contribution

Feel free to open an issue or submit a pull request if you have suggestions or find a bug.

## License

MIT
