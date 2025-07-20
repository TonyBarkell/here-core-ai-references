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
project-name/
├── package.json              # Node.js dependencies and scripts
├── server.js                 # Express development server
├── app.json                  # HERE® Core Container manifest
├── public/                   # Static files directory
│   ├── provider.html         # Platform provider (if Platform API)
│   ├── index.html            # Main application
│   └── [other-files]         # Additional application files
└── README.md                 # Complete setup and launch instructions
```

## MANDATORY Components for All Reproduction Samples

### 1. Development Server (REQUIRED)

**File**: `server.js`
**Purpose**: Hosts the application and serves HERE® Core Container manifest

**Required Features**:
- Node.js/Express server
- CORS enabled for HERE® Core Container
- **CRITICAL: Proper routing for manifest (`/app.json`)**
- Static file serving from `public/` directory
- Health check endpoint
- Clear startup logging with launch instructions

**CRITICAL: Manifest Serving Implementation**:
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
app.get('/app.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.sendFile(path.join(__dirname, 'app.json'));
});

// Platform provider endpoint
app.get('/provider.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'provider.html'));
});

// Main application endpoint
app.get('/app.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`HERE® Core Container Development Server`);
  console.log(`Server running at: http://localhost:${PORT}`);
  console.log(`Manifest URL: http://localhost:${PORT}/app.json`);
  console.log('');
  console.log('To launch with HERE® Core Container:');
  console.log('1. Install OpenFin CLI: npm install -g @openfin/cli');
  console.log('2. Launch app: openfin --launch --manifest http://localhost:3000/app.json');
  console.log('   OR use FINS URL: fins://localhost:3000/app.json');
});
```

### 2. HERE® Core Container Manifest (REQUIRED)

**File**: `app.json`
**Purpose**: Configures HERE® Core Container application launch
**Location**: Root directory (NOT in public folder)

**Critical Configuration**:
- Must use `providerUrl` (NOT `url`) for Platform API applications
- Proper runtime version specification
- License key configuration
- Shortcut and support information

**Platform API Manifest Pattern**:
```json
{
  "licenseKey": "openfin-demo-license",
  "runtime": {
    "version": "34.83.74.18"
  },
  "platform": {
    "uuid": "unique-platform-id",
    "name": "Application Name",
    "providerUrl": "http://localhost:3000/provider.html",
    "autoShow": false,
    "defaultWindowOptions": {
      "frame": true,
      "resizable": true,
      "autoShow": true
    }
  },
  "shortcut": {
    "company": "HERE Core Container",
    "description": "Application Description",
    "name": "Application Name",
    "target": ["desktop", "start-menu"]
  },
  "supportInformation": {
    "company": "HERE Core Container Support",
    "product": "Application Name",
    "email": "support@here.io"
  }
}
```

### 3. Platform Provider (REQUIRED for Platform API)

**File**: `public/provider.html`
**Purpose**: Initializes Platform API and creates application windows

**Required Implementation**:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Platform Provider</title>
</head>
<body>
    <script>
        const initializePlatform = async () => {
            try {
                console.log('Initializing Platform Provider...');
                
                // CRITICAL: Initialize the platform
                await fin.Platform.init();
                
                console.log('Platform Provider initialized successfully');
                
                // Create the main application window
                const platform = await fin.Platform.getCurrent();
                
                await platform.createWindow({
                    name: 'main-window',
                    defaultWidth: 1200,
                    defaultHeight: 800,
                    layout: {
                        content: [{
                            type: 'component',
                            componentName: 'view',
                            componentState: {
                                name: 'main-view',
                                url: 'http://localhost:3000/index.html'
                            }
                        }]
                    }
                });
                
                console.log('Main application window created');
                
            } catch (error) {
                console.error('Platform Provider initialization failed:', error);
            }
        };
        
        // Initialize when HERE Core Container is ready
        if (window.fin) {
            initializePlatform();
        } else {
            window.addEventListener('fin-ready', initializePlatform);
        }
    </script>
</body>
</html>
```

### 4. Package.json with Launch Scripts (REQUIRED)

**File**: `package.json`
**Purpose**: Manages dependencies and provides launch commands

**Required Scripts**:
```json
{
  "name": "project-name",
  "version": "1.0.0",
  "description": "HERE Core Container Application",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "node server.js",
    "launch": "openfin --launch --manifest http://localhost:3000/app.json",
    "launch-fins": "start fins://localhost:3000/app.json"
  },
  "dependencies": {
    "express": "^4.18.2",
    "cors": "^2.8.5"
  },
  "keywords": ["HERE", "Core", "Container"],
  "author": "HERE Core Container Support",
  "license": "MIT"
}
```

### 5. Complete Documentation (REQUIRED)

**File**: `README.md`
**Purpose**: Provides complete setup and launch instructions

**Must Include**:
- Installation instructions (`npm install`)
- Server startup (`npm start`)
- **Manifest URL verification** (`http://localhost:3000/app.json`)
- Multiple launch methods:
  - OpenFin CLI: `npm run launch`
  - FINS URL: `fins://localhost:3000/app.json`
  - Direct manifest download
- Troubleshooting section
- Links to HERE Process Manager for debugging

## Launch Method Requirements

ALL reproduction samples must support multiple launch methods:

### 1. OpenFin CLI Launch
```bash
npm install -g @openfin/cli
npm run launch
```

### 2. FINS URL Launch
```
fins://localhost:3000/app.json
```

### 3. Direct Manifest Launch
- Download `http://localhost:3000/app.json`
- Double-click the downloaded file
- HERE® Core Container RVM launches the application

## Validation Checklist for AI Assistants

Before delivering any reproduction sample, verify:

### Project Structure Validation:
- [ ] Express server included (`server.js`)
- [ ] HERE® Core Container manifest included (`app.json` in root)
- [ ] Platform provider included if Platform API (`public/provider.html`)
- [ ] Package.json with launch scripts included
- [ ] Public directory structure created
- [ ] Complete README with setup instructions

### Configuration Validation:
- [ ] Manifest uses `providerUrl` (NOT `url`) for Platform API
- [ ] Platform provider calls `fin.Platform.init()`
- [ ] CORS enabled on Express server
- [ ] **CRITICAL: Manifest endpoint configured (`/app.json` route)**
- [ ] Multiple launch methods documented
- [ ] Port configuration consistent across files

### Server Configuration Validation:
- [ ] Manifest served at `/app.json` endpoint
- [ ] Proper JSON content-type headers set
- [ ] CORS headers configured for manifest endpoint
- [ ] Static files served from `public/` directory
- [ ] All endpoints properly configured

## Common Errors to Prevent

### ❌ Manifest Not Served by Server
**Problem**: Server only serves HTML files, not the manifest
**Solution**: Always include dedicated `/app.json` endpoint in server

### ❌ Incorrect Manifest Configuration
**Problem**: Using `url` instead of `providerUrl` in Platform API manifests
**Solution**: Always use `providerUrl` for Platform API applications

### ❌ Missing CORS Headers
**Problem**: HERE® Core Container cannot access manifest due to CORS
**Solution**: Enable CORS for all endpoints, especially manifest

### ❌ Missing Platform Initialization
**Problem**: Platform provider doesn't call `fin.Platform.init()`
**Solution**: Always include platform initialization in provider

---

**Last Updated**: 20/07/2025
**Purpose**: Define complete project structure requirements for HERE® Core Container
**Critical**: Prevents standalone HTML file generation - ensures complete, ready-to-run projects
**Critical Update**: Added manifest serving configuration requirements
