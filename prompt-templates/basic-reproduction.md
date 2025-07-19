# Basic Reproduction Sample Prompt Template

## Standard AI Prompt for HERE® Core Container Issues

```
I'm a HERE® Core Container customer support manager. Please review my reference repository at: https://github.com/TonyBarkell/here-core-ai-references

Create a HERE® Core Container reproduction sample for [ISSUE_TYPE].

**MANDATORY CLARIFICATION STEP:**
Before creating the sample, ask me to confirm your understanding of:
- Views vs Windows terminology (default: "multiple views" = views within same window)
- Platform API usage expectations
- Any ambiguous technical terms in the issue description
- Expected user interaction flow

**Delivery Format (REQUIRED):**
1. **Primary**: Complete Node.js setup script that creates all files automatically
2. **Secondary**: Individual file artifacts only if requested

**CRITICAL Platform API Requirements:**
- MUST use `providerUrl` (NOT `url`) in platform manifest for custom providers
- Custom provider HTML MUST call `fin.Platform.init()` to initialize platform
- Use `Platform.createWindow()` with layout containing embedded views
- Include HERE Process Manager debugging: https://process-manager.here.io

**Technical Issue Details (Sanitized):**
- Issue Type: [Bug/Feature Request/Query/Problem/Solution Request]
- Severity: [Critical/High/Medium/Low]
- HERE® Core Version: [SPECIFIC_VERSION or "latest stable"]
- Technical Description: "[ANONYMIZED_TECHNICAL_ISSUE]"
- Expected Behavior: [WHAT_SHOULD_HAPPEN]
- Actual Behavior: [WHAT_IS_HAPPENING]
- APIs Involved: [Platform/Interop/Application/System]

**Setup Script Requirements:**
- Create project directory with descriptive name
- Generate all necessary files with proper content
- Include validation for Platform API configuration
- Provide clear launch instructions with protocol handlers
- Handle template literal escaping correctly
- Include error handling and debugging support

**Launch Instructions Template:**
```
🚀 Launch Options:
📋 Protocol Handler (Recommended):
   fin://localhost:3000/manifest.fin.json
   fins://localhost:3000/manifest.fin.json
📋 RVM Command Line:
   OpenFinRVM.exe --config="http://localhost:3000/manifest.fin.json"
🔍 Monitor: https://process-manager.here.io
```

**Privacy Reminder:**
Ensure no customer data, names, or identifying information appears in the sample.
```

## Benefits of Clarification Step:
- **Prevents misconceptions** about views vs windows
- **Saves token usage** by avoiding incorrect samples
- **Improves accuracy** through upfront alignment
- **Reduces iterations** needed for correct reproduction

## Benefits of Setup Script Approach:
- **90% faster deployment** vs manual file creation
- **Zero copy/paste errors** in reproduction samples
- **Automated Platform API validation**
- **Consistent project structure**
- **Built-in protocol handler support**

**Last Updated**: 19/07/2025
**Method**: Complete integration with clarification process and README fixes