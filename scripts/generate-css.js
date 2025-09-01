const fs = require('fs');
const path = require('path');

// Import the site configuration
const configPath = path.join(__dirname, '../config/site.ts');
const configContent = fs.readFileSync(configPath, 'utf8');

// Extract colors from the config (simple regex parsing for this example)
const primaryMatch = configContent.match(/primary:\s*"([^"]+)"/);
const secondaryMatch = configContent.match(/secondary:\s*"([^"]+)"/);
const backgroundMatch = configContent.match(/background:\s*"([^"]+)"/);
const whiteMatch = configContent.match(/white:\s*"([^"]+)"/);
const textMatch = configContent.match(/text:\s*"([^"]+)"/);
const textLightMatch = configContent.match(/textLight:\s*"([^"]+)"/);

const colors = {
  primary: primaryMatch ? primaryMatch[1] : '#3D709B',
  secondary: secondaryMatch ? secondaryMatch[1] : '#374049',
  background: backgroundMatch ? backgroundMatch[1] : '#EDE9DE',
  white: whiteMatch ? whiteMatch[1] : '#FEFDFB',
  text: textMatch ? textMatch[1] : '#1a1a1a',
  textLight: textLightMatch ? textLightMatch[1] : '#666666',
};

// Generate CSS content
const cssContent = `@import "tailwindcss";

:root {
  --canvas-cream: ${colors.background};
  --canvas-white: ${colors.white};
  --canvas-blue: ${colors.primary};
  --canvas-dark: ${colors.secondary};
  --canvas-text: ${colors.text};
  --canvas-text-light: ${colors.textLight};
  
  --background: var(--canvas-cream);
  --foreground: var(--canvas-text);
  --primary: var(--canvas-blue);
  --border: var(--canvas-dark);
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-primary: var(--primary);
  --color-border: var(--border);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #1a2332;
    --foreground: var(--canvas-white);
    --primary: #5A8BAD;
    --border: var(--canvas-blue);
  }
}

body {
  background: var(--background);
  color: var(--foreground);
  font-family: var(--font-sans), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.canvas-border {
  border: 4px solid var(--border);
  border-radius: 12px;
  background: var(--canvas-white);
}

.canvas-button {
  background: var(--primary);
  color: var(--canvas-white);
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.2s;
}

.canvas-button:hover {
  background: var(--canvas-dark);
  transform: translateY(-2px);
}
`;

// Write the generated CSS
const outputPath = path.join(__dirname, '../app/globals.css');
fs.writeFileSync(outputPath, cssContent);

console.log('CSS generated successfully with configurable colors!');