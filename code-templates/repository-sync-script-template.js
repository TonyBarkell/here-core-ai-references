// HERE® Core Container AI References - Repository Update Script Template
// Generated automatically when new learning patterns are discovered

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const readline = require('readline');

// Configuration - Update these values for your specific update
const REPO_URL = 'https://github.com/TonyBarkell/here-core-ai-references.git';
const REPO_DIR = 'here-core-ai-references-repo';
const UPDATE_DIR = 'here-core-ai-references-updates';

// Learning context - Update with specific learning details
const LEARNING_CONTEXT = {
    patternName: '[PATTERN_NAME]',
    apisFocus: '[PRIMARY_APIS]',
    issuePattern: '[TECHNICAL_DESCRIPTION]',
    solutionPattern: '[HOW_RESOLVED]',
    filesUpdated: ['[LIST_OF_FILES_BEING_UPDATED]'],
    learningLogEntry: `### ${new Date().toLocaleDateString()} - [PATTERN_NAME]
**API Focus:** [PRIMARY_APIS]
**Issue Pattern:** [TECHNICAL_DESCRIPTION]
**Solution Pattern:** [HOW_RESOLVED]
**Code Pattern:** [KEY_CODE_STRUCTURE]
**Reusability:** [APPLICATION_TO_SIMILAR_ISSUES]
**Reference Added:** [WHICH_REFERENCE_FILE_UPDATED]`
};

// Create readline interface for user prompts
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const question = (prompt) => {
    return new Promise((resolve) => {
        rl.question(prompt, resolve);
    });
};

console.log('🔄 HERE® Core AI References - Learning-Driven Repository Update');
console.log('================================================================');
console.log(`📚 Learning Pattern: ${LEARNING_CONTEXT.patternName}`);
console.log(`🔧 APIs Involved: ${LEARNING_CONTEXT.apisFocus}`);
console.log(`📁 Files to Update: ${LEARNING_CONTEXT.filesUpdated.join(', ')}`);

// Git authentication setup (same as existing script)
const setupGitAuth = async () => {
    console.log('🔐 Git Authentication Setup');
    console.log('GitHub requires authentication for pushing changes.');
    
    const authMethod = await question('Choose authentication method:\n1. Personal Access Token (Recommended)\n2. SSH Key\n3. Skip automation (generate files only)\nEnter choice (1/2/3): ');
    
    if (authMethod === '3') {
        return { method: 'skip' };
    }
    
    if (authMethod === '2') {
        console.log('📝 SSH Key Setup:');
        console.log('Make sure your SSH key is added to GitHub and ssh-agent is running');
        const sshConfirm = await question('Is your SSH key configured? (y/n): ');
        if (sshConfirm.toLowerCase() !== 'y') {
            console.log('Please set up SSH key first: https://docs.github.com/en/authentication/connecting-to-github-with-ssh');
            return { method: 'skip' };
        }
        return { method: 'ssh', repoUrl: 'git@github.com:TonyBarkell/here-core-ai-references.git' };
    }
    
    // Personal Access Token (default)
    console.log('📝 Personal Access Token Setup:');
    console.log('1. Go to: https://github.com/settings/tokens');
    console.log('2. Click "Generate new token (classic)"');
    console.log('3. Select "repo" scope');
    console.log('4. Copy the generated token');
    
    const username = await question('GitHub username: ');
    const token = await question('Personal Access Token (paste here): ');
    
    if (!username || !token) {
        console.log('❌ Username and token are required');
        return { method: 'skip' };
    }
    
    const authUrl = `https://${username}:${token}@github.com/TonyBarkell/here-core-ai-references.git`;
    return { method: 'token', repoUrl: authUrl, username, token };
};

// Generate update files with new learning patterns
const generateUpdateFiles = () => {
    console.log('📝 Generating update files with new learning patterns...');
    
    if (!fs.existsSync(UPDATE_DIR)) {
        fs.mkdirSync(UPDATE_DIR, { recursive: true });
    }

    const dirs = [
        'prompt-templates',
        'technical-patterns', 
        'api-reference',
        'learning-log',
        'code-templates'
    ];

    dirs.forEach(dir => {
        const fullPath = path.join(UPDATE_DIR, dir);
        if (!fs.existsSync(fullPath)) {
            fs.mkdirSync(fullPath, { recursive: true });
        }
    });

    // Template for files with learning updates - CUSTOMIZE THESE FOR YOUR SPECIFIC LEARNING
    const files = {
        // Update README with new direct URLs
        'README.md': generateUpdatedReadme(),
        
        // Update relevant prompt templates with new patterns
        'prompt-templates/basic-reproduction.md': generateUpdatedReproductionTemplate(),
        
        // Update learning log with new entry
        'learning-log/learning-log-template.md': generateUpdatedLearningLog()
    };

    // Write files
    Object.entries(files).forEach(([filePath, content]) => {
        if (content) { // Only write if content is generated
            const fullPath = path.join(UPDATE_DIR, filePath);
            const dir = path.dirname(fullPath);
            
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir, { recursive: true });
            }
            
            fs.writeFileSync(fullPath, content);
            console.log(`✅ Generated: ${filePath}`);
        }
    });
    
    console.log(`📁 Update files created in: ${UPDATE_DIR}`);
};

// Placeholder functions - customize these based on your specific learning
const generateUpdatedReadme = () => {
    return `# HERE® Core Container AI Reference System

## 🚨 LEARNING UPDATE - ${new Date().toLocaleDateString()}

**New Pattern Discovery: ${LEARNING_CONTEXT.patternName}**
- **APIs Involved**: ${LEARNING_CONTEXT.apisFocus}
- **Pattern Applied**: ${LEARNING_CONTEXT.issuePattern}
- **Solution**: ${LEARNING_CONTEXT.solutionPattern}
- **Files Updated**: ${LEARNING_CONTEXT.filesUpdated.join(', ')}

[REST OF README CONTENT]

**Last Updated**: ${new Date().toISOString()}
**Update Method**: AI-driven learning automation
**Pattern**: ${LEARNING_CONTEXT.patternName}
`;
};

const generateUpdatedReproductionTemplate = () => {
    return `# Basic Reproduction Sample Prompt Template

## Updated with Learning: ${LEARNING_CONTEXT.patternName}

**New Pattern Integration:**
- **Discovery**: ${LEARNING_CONTEXT.issuePattern}
- **Solution**: ${LEARNING_CONTEXT.solutionPattern}  
- **Application**: Now included in standard reproduction workflow

[EXISTING_TEMPLATE_CONTENT_WITH_NEW_PATTERNS]

**Last Updated**: ${new Date().toLocaleDateString()}
**Learning Integration**: ${LEARNING_CONTEXT.patternName}
`;
};

const generateUpdatedLearningLog = () => {
    return `# API Discoveries and Patterns

## Log of Technical Patterns Discovered

${LEARNING_CONTEXT.learningLogEntry}

---

[EXISTING_LEARNING_LOG_CONTENT]

**Last Updated**: ${new Date().toLocaleDateString()}
**Latest Pattern**: ${LEARNING_CONTEXT.patternName}
`;
};

// Main execution
const main = async () => {
    try {
        console.log('📚 Learning Context:');
        console.log(`   Pattern: ${LEARNING_CONTEXT.patternName}`);
        console.log(`   APIs: ${LEARNING_CONTEXT.apisFocus}`);
        console.log(`   Files: ${LEARNING_CONTEXT.filesUpdated.join(', ')}`);
        
        // Generate update files with new learning
        generateUpdateFiles();
        
        // Setup authentication
        const authConfig = await setupGitAuth();
        
        if (authConfig.method === 'skip') {
            console.log(`📁 Update files generated in: ${UPDATE_DIR}`);
            console.log('📋 Manual steps:');
            console.log('1. Review generated files for learning integration');
            console.log('2. Copy files to your GitHub repository');
            console.log('3. Commit and push changes manually');
            rl.close();
            return;
        }
        
        // REST OF IMPLEMENTATION GOES HERE
        // (Cloning, copying, committing, pushing)
        
    } catch (error) {
        console.error('❌ Learning integration failed:', error.message);
        console.log(`📁 Update files available in: ${UPDATE_DIR}`);
    } finally {
        rl.close();
    }
};

module.exports = {
    LEARNING_CONTEXT,
    setupGitAuth,
    generateUpdateFiles,
    main
};