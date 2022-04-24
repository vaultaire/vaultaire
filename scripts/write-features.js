import fs from "fs";
import Commands from "../src/commands";

const result = Object.keys(Commands).map(name => {
  const command = Commands[name];

  return `
## vault.${name}

\`${command.method} ${command.path}\`
`;
});

result.unshift(`# Supported vaultaire features

 This is a generated list of Vault features supported by vaultaire.`);
fs.writeFileSync('./features.md', result.join('\n'));
