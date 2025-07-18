# Basic Reproduction Sample Prompt Template

## Standard AI Prompt for HERE® Core Container Issues

```
I'm a HERE® Core Container customer support manager. Please review my reference repository at: https://github.com/[USERNAME]/here-core-ai-references

Create a HERE® Core Container reproduction sample for [ISSUE_TYPE].

**Reference Documentation:**
- Review /technical-patterns/ for similar issue patterns
- Use templates from /api-reference/ for manifest and code structure
- Follow patterns from /code-templates/ for project organization

**Technical Issue Details (Sanitized):**
- Issue Type: [Bug/Feature Request/Query/Problem/Solution Request]
- Severity: [Critical/High/Medium/Low]
- HERE® Core Version: [SPECIFIC_VERSION or "latest stable"]
- Technical Description: "[ANONYMIZED_TECHNICAL_ISSUE]"
- Expected Behavior: [WHAT_SHOULD_HAPPEN]
- Actual Behavior: [WHAT_IS_HAPPENING]
- APIs Involved: [Platform/Interop/Application/System]

**Requirements:**
- Minimal reproduction case (eliminate external variables)
- Complete, runnable project structure
- HTTP servable with local development server
- Include error handling and console logging for debugging
- Focus on demonstrating the specific technical behavior

**Project Structure Required:**
1. manifest.fin.json (with specified runtime version)
2. index.html (main application entry point)
3. app.js/app.ts (using relevant 'fin' APIs)
4. package.json (for local HTTP server setup)
5. README.md (with launch instructions)

**Documentation References:**
- HERE® Core Container API: https://cdn.openfin.co/docs/javascript/[VERSION]/
- Platform API: https://resources.here.io/docs/core/container/platform/
- Manifest Configuration: https://resources.here.io/docs/core/develop/manifests/

**Learning Documentation Request:**
After creating the sample, please suggest updates to our reference repository:
1. New technical patterns discovered (for /technical-patterns/)
2. Useful code structures (for /api-reference/)
3. Documentation gaps encountered (for /learning-log/documentation-gaps.md)
4. API patterns worth capturing (for /learning-log/api-discoveries.md)

**Privacy Reminder:**
Ensure no customer data, names, or identifying information appears in the sample or suggestions.
```

## Usage Instructions

### For Support Team:
1. **Copy this template** for each new reproduction request
2. **Replace bracketed placeholders** with sanitized technical details
3. **Update GitHub username** in repository URL
4. **Specify HERE® Core version** if known, otherwise use "latest stable"
5. **Focus on technical behavior** rather than customer context

### Template Customization:
- For **Platform API issues**: Add "Review /technical-patterns/platform-api-patterns.md"
- For **Interop issues**: Add "Review /technical-patterns/interop-patterns.md" 
- For **Critical issues**: Add "Priority: Create minimal reproduction immediately"
- For **Feature requests**: Add "Focus: Demonstrate desired vs current behavior"

## Examples of Good Technical Descriptions:

### Window Management Issue:
```
Technical Description: "Windows created with fin.Window.create() using specific 
width/height combinations appear in different positions than specified in options"
Expected: Window appears at coordinates specified in defaultLeft/defaultTop
Actual: Window appears at system-determined position
```

### Platform API Issue:
```
Technical Description: "Platform views created with createView() lose focus 
when parent window is minimized and restored"
Expected: View maintains focus state through parent window state changes
Actual: View focus is lost and cannot be restored programmatically
```

### Interop Issue:
```
Technical Description: "Context sharing between applications via fin.Interop 
fails when context object contains specific data types"
Expected: All context data types are transmitted successfully
Actual: Context transmission fails silently with certain object structures
```

## Prompt Variations by Severity

### Critical Issues:
Add: "**URGENT**: Create minimal reproduction immediately to isolate core functionality failure"

### Feature Requests:
Add: "**ENHANCEMENT**: Demonstrate current limitations and desired behavior patterns"

### General Queries:
Add: "**EDUCATIONAL**: Create clear example with best practices and common pitfalls"
