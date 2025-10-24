// Simple deployment script for GitHub Pages
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Configuration
const BUILD_COMMAND = 'npm run build';
const DIST_FOLDER = 'dist';
const BRANCH = 'gh-pages';

// Helper to run commands
const run = (command) => {
  try {
    execSync(command, { stdio: 'inherit' });
  } catch (error) {
    console.error(`Failed to execute ${command}`, error);
    process.exit(1);
  }
};

// Main deployment logic
async function deploy() {
  // Ensure we're on main branch
  run('git checkout main');
  
  // Build the project
  console.log('\nBuilding the project...');
  run(BUILD_COMMAND);

  // Create and switch to a temporary branch
  const tempBranch = `temp-deploy-${Date.now()}`;
  run(`git checkout --orphan ${tempBranch}`);

  // Move dist contents to root and remove dist folder
  console.log('\nPreparing files for deployment...');
  const distPath = path.join(process.cwd(), DIST_FOLDER);
  const files = fs.readdirSync(distPath);
  
  files.forEach(file => {
    fs.renameSync(
      path.join(distPath, file),
      path.join(process.cwd(), file)
    );
  });
  fs.rmdirSync(distPath);

  // Commit and push to gh-pages
  console.log('\nPushing to gh-pages...');
  run('git add .');
  run('git commit -m "Deploy to GitHub Pages"');
  run(`git push origin ${tempBranch}:${BRANCH} --force`);

  // Cleanup: switch back to main and delete temporary branch
  console.log('\nCleaning up...');
  run('git checkout main');
  run(`git branch -D ${tempBranch}`);

  console.log('\nDeployment complete! 🎉');
}

deploy().catch(console.error);