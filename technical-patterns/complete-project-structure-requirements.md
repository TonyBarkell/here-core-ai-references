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
- Proper routing for manifest (`/app.json`)
- Static file serving from `public/` directory
- Health check endpoint
- Clear startup logging with launch instructions

### 2. HERE® Core Container Manifest (REQUIRED)

**File**: `app.json`
**Purpose**: Configures HERE® Core Container application launch

**Critical Configuration**:
- Must use `providerUrl` (NOT `url`) for Platform API applications
- Proper runtime version specification
- License key configuration
- Shortcut and support information

### 3. Platform Provider (REQUIRED for Platform API)

**File**: `public/provider.html`
**Purpose**: Initializes Platform API and creates application windows

**Required Implementation**:
- Must call `fin.Platform.init()`
- Creates application windows
- Validates manifest configuration

### 4. Package.json with Launch Scripts (REQUIRED)

**File**: `package.json`
**Purpose**: Manages dependencies and provides launch commands

**Required Scripts**:
- `start`: Development server startup
- `launch`: OpenFin CLI launch
- `launch-fins`: FINS URL launch

### 5. Complete Documentation (REQUIRED)

**File**: `README.md`
**Purpose**: Provides complete setup and launch instructions

**Must Include**:
- Installation instructions
- Server startup instructions
- Multiple launch methods
- Troubleshooting section
- HERE Process Manager links

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
- Download app.json file
- Double-click to launch

## Validation Checklist for AI Assistants

Before delivering any reproduction sample, verify:

### Project Structure Validation:
- [ ] Express server included
- [ ] HERE® Core Container manifest included
- [ ] Platform provider included if Platform API
- [ ] Package.json with launch scripts included
- [ ] Public directory structure created
- [ ] Complete README with setup instructions

### Configuration Validation:
- [ ] Manifest uses `providerUrl` (NOT `url`) for Platform API
- [ ] Platform provider calls `fin.Platform.init()`
- [ ] CORS enabled on Express server
- [ ] Multiple launch methods documented
- [ ] Port configuration consistent across files

---

**Last Updated**: 20/07/2025
**Purpose**: Define complete project structure requirements for HERE® Core Container
**Critical**: Prevents standalone HTML file generation - ensures complete, ready-to-run projects
