# Basic HERE® Core Container Reproduction Template

## Template Structure

This template provides a minimal HERE® Core Container application structure for creating reproduction samples.

```
basic-reproduction-template/
├── README.md                  # This file
├── manifest.fin.json          # HERE® Core Container manifest
├── package.json              # Local development server
├── index.html                # Main application entry
├── app.js                    # Application logic with fin APIs
└── style.css                 # Basic styling
```

## Files Overview

### manifest.fin.json
- Standard HERE® Core Container application manifest
- Configurable runtime version
- Basic window options for reproduction testing

### index.html
- Minimal HTML structure
- Loads fin APIs and application scripts
- Basic UI for reproduction testing

### app.js
- HERE® Core Container API initialization
- Error handling and logging structure
- Placeholder for reproduction-specific logic

### package.json
- Development dependencies for local server
- Scripts for building and serving
- Standard configuration for HTTP serving

## Usage Instructions

### 1. Copy Template Files
Copy all files from this template to your new reproduction sample directory.

### 2. Customize for Specific Issue
- Update `manifest.fin.json` with appropriate runtime version
- Modify `app.js` to include reproduction logic
- Update `index.html` if UI changes needed
- Customize `README.md` with specific issue details

### 3. Update Configuration
```bash
# Install dependencies
npm install

# Start local server
npm start

# Launch HERE® Core Container application
# Use HERE® RVM to open manifest.fin.json
```

### 4. Test Reproduction
- Verify issue reproduces consistently
- Check console logs for debugging information
- Document exact steps to reproduce

## Template Customization

### For Platform API Issues:
- Change manifest to platform configuration
- Add platform provider and consumer files
- Include platform-specific API calls

### For Interop Issues:
- Create multiple application manifests
- Add interop communication logic
- Include context sharing examples

### For Window Management:
- Focus on window creation and manipulation
- Add window option variations
- Include window state management

## Standard Debugging Approach

### Console Logging:
```javascript
console.log('HERE Core API Operation:', operationType);
console.log('Expected Result:', expectedResult);
console.log('Actual Result:', actualResult);
```

### Error Handling:
```javascript
try {
  // fin API operation
} catch (error) {
  console.error('API Error:', error);
  console.error('Error Details:', JSON.stringify(error, null, 2));
}
```

### Window/Application State:
```javascript
// Log current state for debugging
const windowInfo = await fin.Window.getCurrent().getInfo();
console.log('Current Window State:', windowInfo);
```

## File Templates

Each file in this template contains:
- Standard boilerplate for HERE® Core Container
- Placeholder comments for customization
- Basic error handling and logging
- Documentation comments explaining purpose

## Best Practices

### Keep It Minimal:
- Only include code necessary for reproduction
- Remove unrelated functionality
- Focus on the specific issue being demonstrated

### Include Debugging:
- Add console logging for key operations
- Include error handling for API calls
- Log expected vs actual behavior

### Document Steps:
- Clear reproduction steps in README
- Expected vs actual behavior description
- Environment and version information

## Common Modifications

### Runtime Version:
Update `manifest.fin.json` with specific version:
```json
{
  "runtime": {
    "version": "41.134.102.5"
  }
}
```

### Window Options:
Customize window behavior in manifest:
```json
{
  "startup_app": {
    "defaultWidth": 800,
    "defaultHeight": 600,
    "autoShow": true,
    "frame": true
  }
}
```

### API Focus:
Update `app.js` to focus on specific APIs:
```javascript
// For window management issues
const window = await fin.Window.create(options);

// For platform issues
const platform = await fin.Platform.getCurrent();

// For interop issues
const interop = await fin.Interop.connectToProvider();
```
