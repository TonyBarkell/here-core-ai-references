# Platform API Patterns and Best Practices

## CRITICAL: Custom Platform Provider Configuration

### ❌ INCORRECT Manifest Pattern:
```json
{
  "platform": {
    "uuid": "my-platform",
    "url": "http://localhost:3000/provider.html",  // WRONG!
    "autoShow": false
  }
}
```

### ✅ CORRECT Manifest Pattern:
```json
{
  "platform": {
    "uuid": "my-platform", 
    "providerUrl": "http://localhost:3000/provider.html",  // CORRECT!
    "autoShow": false
  }
}
```

## Launch Methods Priority (NEW)

### Primary Launch Method: FIN Protocol
```
fin://localhost:3000/app.json
```
- **Most reliable** for customer environments
- Works directly in browser address bar
- Automatically handled by HERE® Core Container RVM
- **Always include as primary launch method**

### Secondary Launch Methods
```bash
# OpenFin CLI (development)
openfin --launch --manifest http://localhost:3000/app.json

# Direct download (fallback)
# Download http://localhost:3000/app.json and double-click
```

## Setup Script Validation Pattern
```javascript
// Add to all Platform API setup scripts
const validatePlatformManifest = (manifestContent) => {
    if (manifestContent.platform && manifestContent.platform.url && !manifestContent.platform.providerUrl) {
        console.warn('⚠️  WARNING: Platform manifest uses "url" instead of "providerUrl"');
        console.warn('⚠️  This will use default provider instead of custom provider');
        console.warn('⚠️  Change "url" to "providerUrl" for custom platform provider');
        return false;
    }
    return true;
};

const validateDirectoryStructure = (outputDir) => {
    if (outputDir === '.' || outputDir === './') {
        console.error('❌ ERROR: Files should be generated in project subfolder, not current directory');
        return false;
    }
    return true;
};

const validateManifestServing = (serverContent) => {
    if (!serverContent.includes('app.get(\'/app.json\')')) {
        console.error('❌ ERROR: Server missing /app.json endpoint configuration');
        return false;
    }
    return true;
};
```

## Custom Provider Implementation (MANDATORY)
```html
<!DOCTYPE html>
<html>
<head>
    <script>
        const initializePlatform = async () => {
            // CRITICAL: Initialize the platform
            await fin.Platform.init();
            
            // Create application windows
            const platform = await fin.Platform.getCurrent();
            await platform.createWindow({
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
        };

        if (window.fin) {
            initializePlatform();
        } else {
            window.addEventListener('fin-ready', initializePlatform);
        }
    </script>
</head>
<body></body>
</html>
```

## Debugging with HERE Process Manager
- **URL**: https://process-manager.here.io
- **Purpose**: Validate platform architecture and monitor performance
- **Usage**: Include in all reproduction samples

---

**Last Updated**: 20/07/2025
**Status**: Enhanced with FIN protocol launch methods and validation patterns
**Critical Updates**: Added FIN protocol as primary launch method, directory structure validation
