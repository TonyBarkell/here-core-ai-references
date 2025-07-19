# HERE® Core Container AI Reference System

## 🚨 CRITICAL UPDATE - 19/07/2025

**Platform API Configuration Fix Applied**
- **Issue**: Incorrect use of `platform.url` instead of `platform.providerUrl`
- **Impact**: Default provider loaded instead of custom provider  
- **Solution**: All templates updated to use correct `providerUrl` configuration
- **Automation**: Setup scripts now default delivery method with validation

## Quick Start for AI Conversations

**Standard Prompt:**
```
I'm a HERE® Core Container customer support manager. Please review my reference repository at: https://github.com/TonyBarkell/here-core-ai-references

Create a HERE® Core Container reproduction sample for [ISSUE_TYPE] using our established patterns.
```

## 🔧 Critical Fixes Applied

### Platform API Patterns (CRITICAL)
- ✅ **Fixed**: `platform.url` → `platform.providerUrl` in all templates
- ✅ **Required**: `fin.Platform.init()` call in provider HTML
- ✅ **Validated**: Setup scripts check manifest configuration

### Setup Script Automation (DEFAULT)
- ✅ **Primary Delivery**: Node.js setup scripts create complete projects
- ✅ **Validation**: Platform API configuration checking
- ✅ **Protocol Handlers**: `fin://` launch support included
- ✅ **Debugging**: HERE Process Manager integration

## Usage Guidelines

### For Support Team:
1. **Use updated prompt templates** - setup scripts are now default delivery
2. **Validate Platform API** - ensure `providerUrl` usage
3. **Include protocol handlers** - `fin://` launch instructions
4. **Reference Process Manager** - https://process-manager.here.io

### For AI Assistance:
1. **Deliver setup scripts** as primary format
2. **Validate Platform configuration** - check `providerUrl` vs `url`
3. **Include debugging support** - Process Manager references
4. **Monitor for new patterns** - update learning-log/

**Last Updated**: 2025-07-19T08:23:38.278Z
**Update Method**: Automated Git script with authentication
