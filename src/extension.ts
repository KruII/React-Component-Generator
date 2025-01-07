import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {
  const createComponentCommand = vscode.commands.registerCommand(
    'react-component-generator-KruII.createComponent',
    async (uri: vscode.Uri) => {
      if (!uri || !uri.fsPath) {
        vscode.window.showErrorMessage('Please select a folder where the component should be created.');
        return;
      }

      const componentName = await vscode.window.showInputBox({
        prompt: 'Enter the name of the React component',
      });

      if (!componentName) {
        vscode.window.showErrorMessage('Component name is required!');
        return;
      }

      const componentDir = path.join(uri.fsPath, componentName);

      try {
        // Create folder if it doesn't exist
        if (!fs.existsSync(componentDir)) {
          fs.mkdirSync(componentDir, { recursive: true });
        } else {
          vscode.window.showErrorMessage(`The folder "${componentName}" already exists.`);
          return;
        }

        const templates = {
          tsx: `import React from 'react';
import './${componentName}.module.css';

const ${componentName}: React.FC = () => {
  return (
    <div className="${componentName}">
      ${componentName} works!
    </div>
  );
};

export default ${componentName};
`,
          css: `.${componentName} {
  /* Styles for ${componentName} */
}`,
          test: `import React from 'react';
import { render } from '@testing-library/react';
import ${componentName} from './${componentName}';

describe('<${componentName} />', () => {
  it('renders without crashing', () => {
    render(<${componentName} />);
  });
});
`,
        };

        // Create files
        fs.writeFileSync(path.join(componentDir, `${componentName}.tsx`), templates.tsx);
        fs.writeFileSync(path.join(componentDir, `${componentName}.module.css`), templates.css);
        fs.writeFileSync(path.join(componentDir, `${componentName}.test.tsx`), templates.test);

        vscode.window.showInformationMessage(`The component "${componentName}" has been created!`);
      } catch (error) {
        if (error instanceof Error) {
          vscode.window.showErrorMessage(`Error while creating the component: ${error.message}`);
        } else {
          vscode.window.showErrorMessage('An unexpected error occurred.');
        }
      }
    }
  );

  context.subscriptions.push(createComponentCommand);
}

export function deactivate() {}
