# Complete HERE® Core Container Project Structure Requirements

## Purpose
This document defines the mandatory components for all HERE® Core Container reproduction samples and applications to ensure they are complete, ready-to-run projects.

## CRITICAL: Never Generate Standalone HTML Files

❌ **INCORRECT Approach**:
```
project/
└── index.html    # Standalone HTML file - WILL NOT WORK
```

✅ **CORRECT Approach**:
```
project-name/                 # MUST create project subfolder
├── package.json              # Node.js dependencies and scripts
├── server.js                 # Express development server
├── app.json                  # HERE® Core Container manifest (ROOT level)
├── public/                   # Static files directory
│   ├── provider.html         # Platform provider (if Platform API)
│   ├── index.html            # Main application
│   └── [other-files]         # Additional application files
└── README.md                 # Complete setup and launch instructions
```

## MANDATORY Project Creation Rules

### 1. Directory Structure (CRITICAL)
- ✅ **ALWAYS create a project subfolder** (never generate files in current directory)
- ✅ Project name should be descriptive and kebab-case
- ✅ `app.json` goes in ROOT of project folder (NOT in public/)
- ✅ Static files go in `public/` subdirectory
- ❌ **NEVER generate files directly in script execution directory**

### 2. Express Server Configuration (CRITICAL)

**File**: `server.js`
**Purpose**: Hosts the application and serves HERE® Core Container manifest

**CORRECT Server Implementation**:
```javascript
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

// Enable CORS for HERE® Core Container
app.use(cors());

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// CRITICAL: HERE® Core Container manifest endpoint
// This MUST serve the app.json file from the root directory
app.get('/app.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    // Serve app.json from root directory (same level as server.js)
    res.sendFile(path.resolve(__dirname, 'app.json'));
});

// Platform provider endpoint (serves from public directory)
app.get('/provider.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'provider.html'));
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Start server with detailed launch information
app.listen(PORT, () => {
    console.log(`🚀 HERE® Core Container Development Server`);
    console.log(`📡 Server running at: http://localhost:${PORT}`);
    console.log(`📋 Manifest URL: http://localhost:${PORT}/app.json`);
    console.log(`🔗 Provider URL: http://localhost:${PORT}/provider.html`);
    console.log('');
    console.log('🎯 Launch Methods:');
    console.log('1. FIN Protocol (Recommended):');
    console.log(`   fin://localhost:${PORT}/app.json`);
    console.log('2. OpenFin CLI:');
    console.log(`   openfin --launch --manifest http://localhost:${PORT}/app.json`);
    console.log('3. Direct Download:');
    console.log(`   Download http://localhost:${PORT}/app.json and double-click`);
    console.log('');
    console.log('🐛 Debug: https://process-manager.here.io');
});
```

### 3. HERE® Core Container Manifest (REQUIRED)

**File**: `app.json`
**Location**: Root directory of project (same level as server.js)
**Purpose**: Configures HERE® Core Container application launch

**Critical Configuration**:
- Must use `providerUrl` (NOT `url`) for Platform API applications
- Proper runtime version specification
- License key configuration
- Shortcut and support information

### 4. Launch Methods (ALL REQUIRED)

ALL reproduction samples must support multiple launch methods:

#### Method 1: FIN Protocol (PRIMARY - Most Reliable)
```
fin://localhost:3000/app.json
```
- **Primary launch method** for HERE® Core Container
- Works directly in browser address bar
- Most reliable for customer environments
- Automatically handled by RVM

#### Method 2: OpenFin CLI (Development)
```bash
npm install -g @openfin/cli
npm run launch
```
- Good for development environments
- Requires CLI installation

#### Method 3: Direct Manifest Download (Fallback)
```
1. Visit: http://localhost:3000/app.json
2. Download the manifest file
3. Double-click the downloaded app.json file
```
- Fallback method when other options don't work
- Always works if RVM is installed

### 5. Package.json with Launch Scripts (REQUIRED)

**Required Scripts with FIN Protocol Priority**:
```json
{
  "scripts": {
    "start": "node server.js",
    "dev": "node server.js",
    "launch": "openfin --launch --manifest http://localhost:3000/app.json",
    "launch-fin": "start fin://localhost:3000/app.json",
    "test-manifest": "curl http://localhost:3000/app.json"
  }
}
```

### 6. README Documentation (REQUIRED)

**Must Include Launch Priority Order**:
```markdown
## Launch Methods (In Order of Preference)

### 1. 🎯 FIN Protocol (Recommended)
Click this link or paste into browser: [fin://localhost:3000/app.json](fin://localhost:3000/app.json)

### 2. 🛠️ OpenFin CLI
```bash
npm run launch
```

### 3. 📥 Direct Download
1. Download: http://localhost:3000/app.json
2. Double-click the downloaded file
```

## Validation Checklist for AI Assistants

Before delivering any reproduction sample, verify:

### Project Structure Validation:
- [ ] **Project created in subfolder** (not current directory)
- [ ] Express server included (`server.js`)
- [ ] HERE® Core Container manifest included (`app.json` in root)
- [ ] Platform provider included if Platform API (`public/provider.html`)
- [ ] Package.json with launch scripts included
- [ ] Public directory structure created
- [ ] Complete README with setup instructions

### Server Configuration Validation:
- [ ] **CRITICAL: `/app.json` endpoint properly configured**
- [ ] Manifest served from root directory (not public/)
- [ ] Proper JSON content-type headers set
- [ ] CORS headers configured for all endpoints
- [ ] Static files served from `public/` directory
- [ ] Health check endpoint included

### Launch Method Validation:
- [ ] **FIN Protocol link included as primary method**
- [ ] OpenFin CLI method documented
- [ ] Direct download method provided
- [ ] All launch methods tested and working
- [ ] Launch priority clearly documented

## Common Errors to Prevent

### ❌ Files Generated in Wrong Directory
**Problem**: Files created in script execution directory instead of project subfolder
**Solution**: Always create project subfolder first, then generate files inside it

### ❌ Manifest Not Served Correctly
**Problem**: Server doesn't serve app.json or serves from wrong location
**Solution**: Configure dedicated `/app.json` endpoint serving from root directory

### ❌ Missing FIN Protocol Launch Method
**Problem**: Only provides CLI or download methods
**Solution**: Always include FIN protocol as primary launch method

### ❌ Incorrect Manifest Location
**Problem**: app.json placed in public/ directory instead of root
**Solution**: app.json must be in root directory, served via `/app.json` endpoint

## Testing Validation

After generating any project, verify:
1. **Project Structure**: Files in proper subfolder
2. **Server Starts**: `npm start` works without errors
3. **Manifest Accessible**: `http://localhost:3000/app.json` returns valid JSON
4. **FIN Protocol Works**: `fin://localhost:3000/app.json` launches application
5. **All Launch Methods Documented**: README includes all three methods

---

**Last Updated**: 20/07/2025
**Purpose**: Define complete project structure requirements for HERE® Core Container
**Critical**: Prevents standalone HTML file generation - ensures complete, ready-to-run projects
**Critical Updates**: 
- Fixed directory structure requirements
- Fixed manifest serving configuration
- Added FIN protocol as primary launch method
