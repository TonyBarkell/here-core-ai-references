# HERE® Core Container Manifest Templates

## Standard Manifest Configurations

### Basic Application Manifest

```json
{
  "licenseKey": "YOUR_LICENSE_KEY",
  "runtime": {
    "version": "41.134.102.5"
  },
  "startup_app": {
    "name": "ReproductionSample",
    "uuid": "reproduction-sample-uuid",
    "url": "http://localhost:3000/index.html",
    "autoShow": true,
    "defaultWidth": 800,
    "defaultHeight": 600,
    "defaultLeft": 100,
    "defaultTop": 100,
    "resizable": true,
    "maximizable": true,
    "minimizable": true
  }
}
```

### Platform Application Manifest

```json
{
  "licenseKey": "YOUR_LICENSE_KEY",
  "runtime": {
    "version": "41.134.102.5"
  },
  "platform": {
    "uuid": "reproduction-platform-uuid",
    "name": "ReproductionPlatform",
    "url": "http://localhost:3000/platform.html",
    "autoShow": true,
    "defaultWindowOptions": {
      "defaultWidth": 800,
      "defaultHeight": 600,
      "resizable": true,
      "maximizable": true
    },
    "defaultViewOptions": {
      "url": "about:blank"
    }
  }
}
```

### Minimal Debug Manifest

```json
{
  "licenseKey": "YOUR_LICENSE_KEY",
  "runtime": {
    "version": "41.134.102.5",
    "arguments": "--enable-logging --log-level=0"
  },
  "startup_app": {
    "name": "DebugSample",
    "uuid": "debug-sample-uuid",
    "url": "http://localhost:3000/index.html",
    "autoShow": true,
    "defaultWidth": 400,
    "defaultHeight": 300
  }
}
```

## Common Manifest Options

### Window Options
```json
{
  "defaultWidth": 800,
  "defaultHeight": 600,
  "defaultLeft": 100,
  "defaultTop": 100,
  "minWidth": 400,
  "minHeight": 300,
  "maxWidth": 1200,
  "maxHeight": 900,
  "resizable": true,
  "maximizable": true,
  "minimizable": true,
  "frame": true,
  "autoShow": true,
  "alwaysOnTop": false,
  "showTaskbarIcon": true
}
```

### Development Options
```json
{
  "runtime": {
    "version": "41.134.102.5",
    "arguments": "--enable-logging --log-level=0 --enable-devtools"
  }
}
```

### Security Options
```json
{
  "permissions": {
    "System": {
      "launchExternalProcess": true,
      "readRegistryValue": false,
      "terminateExternalProcess": false
    }
  }
}
```

## Runtime Versions

### Latest Stable
- **Production**: Use specific version number
- **Development**: Can use "stable" channel
- **Testing**: Use exact version to ensure consistency

### Common Versions
```json
{
  "runtime": {
    "version": "41.134.102.5"  // Current stable
  }
}
```

### Version with Fallback
```json
{
  "runtime": {
    "version": "41.134.102.5",
    "fallbackVersion": "40.130.95.2"
  }
}
```

## Platform-Specific Configurations

### Platform Provider Manifest
```json
{
  "platform": {
    "uuid": "platform-provider-uuid",
    "name": "PlatformProvider",
    "url": "http://localhost:3000/provider.html",
    "autoShow": false,
    "defaultWindowOptions": {
      "autoShow": true,
      "frame": true,
      "defaultWidth": 1000,
      "defaultHeight": 700
    }
  }
}
```

### Platform Consumer Manifest
```json
{
  "startup_app": {
    "name": "PlatformConsumer",
    "uuid": "platform-consumer-uuid",
    "url": "http://localhost:3000/consumer.html",
    "autoShow": true,
    "defaultWidth": 600,
    "defaultHeight": 400
  }
}
```

## Usage Guidelines

### For Reproduction Samples:
- Always use specific runtime version (not "stable")
- Include `autoShow: true` for easy testing
- Set reasonable default dimensions
- Enable logging for debugging

### For Platform Applications:
- Use separate UUIDs for provider and consumer
- Configure appropriate default options
- Consider view vs window requirements

### For Development:
- Enable dev tools and logging
- Use localhost URLs
- Include fallback versions for stability

## Template Selection Guide

| Issue Type | Recommended Template |
|------------|---------------------|
| Basic Window Issues | Basic Application Manifest |
| Platform API Issues | Platform Application Manifest |
| Debugging/Investigation | Minimal Debug Manifest |
| Performance Issues | Basic + logging arguments |
| Interop Issues | Platform Application (multiple apps) |

## Common Pitfalls

### Avoid:
- Using production license keys in samples
- Hardcoded production URLs
- Missing autoShow for development
- Overly complex initial configurations

### Best Practices:
- Use placeholder license key text
- Use localhost:3000 as standard
- Include basic window options
- Keep manifests minimal for reproduction
