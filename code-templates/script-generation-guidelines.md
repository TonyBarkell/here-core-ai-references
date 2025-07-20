# Script Generation Guidelines - Enhanced with HERE® Core Container Requirements

## CRITICAL: Complete HERE® Core Container Project Generation

### MANDATORY: Never Generate Standalone HTML Files
When generating setup scripts for HERE® Core Container applications:

❌ **NEVER DO THIS**:
```javascript
// Generating only HTML files - WRONG!
const files = [
    { name: 'index.html', content: generateHTML() }
];
```

✅ **ALWAYS DO THIS**:
```javascript
// Generate complete HERE® Core Container project structure
const files = [
    { name: 'package.json', content: generatePackageJSON() },
    { name: 'server.js', content: generateServer() },
    { name: 'app.json', content: generateManifest() },
    { name: 'public/provider.html', content: generateProvider() },
    { name: 'public/index.html', content: generateHTML() },
    { name: 'README.md', content: generateREADME() }
];
```

### HERE® Core Container Project Generation Requirements

1. **Access Structure Requirements FIRST**:
   - [Complete Project Structure Requirements](https://raw.githubusercontent.com/TonyBarkell/here-core-ai-references/refs/heads/main/technical-patterns/complete-project-structure-requirements.md)

2. **Generate ALL Required Files**:
   - package.json (Node.js dependencies and launch scripts)
   - server.js (Express development server)
   - app.json (HERE® Core Container manifest)
   - public/provider.html (Platform provider if Platform API)
   - public/index.html (Main application)
   - README.md (Complete documentation)

3. **Validation Functions**:
   ```javascript
   // Add to all setup scripts
   const validateHereCoreProject = (files) => {
       const required = ['package.json', 'server.js', 'app.json', 'README.md'];
       const missing = required.filter(file => !files.includes(file));
       if (missing.length > 0) {
           throw new Error(`Missing required files: ${missing.join(', ')}`);
       }
   };
   ```

## Bulletproof Generation Rules (MANDATORY)

### Rule 1: String Concatenation Only
```javascript
// ✅ ALWAYS DO THIS
let content = "";
content += "First line\n";
content += "Second line\n";
return content;
```

### Rule 2: Always Use Concatenation Operators
```javascript
// ✅ CORRECT - Every string has += operator
content += "line1\n";
content += "line2\n";
content += "line3\n";
```

### Rule 3: Complete Project Structure
```javascript
// ✅ Always generate complete HERE® Core Container projects
const generateCompleteProject = () => {
    const files = [
        { name: 'package.json', content: generatePackageJSON() },
        { name: 'server.js', content: generateServer() },
        { name: 'app.json', content: generateManifest() },
        { name: 'public/provider.html', content: generateProvider() },
        { name: 'public/index.html', content: generateHTML() },
        { name: 'README.md', content: generateREADME() }
    ];
    return files;
};
```

## Error Prevention Checklist

### Before Generating Scripts:
- ✅ Plan to use string concatenation only (NO template literals)
- ✅ Access complete project structure requirements
- ✅ Plan complete HERE® Core Container project generation

### During Generation:
- ✅ Use += for every string addition
- ✅ Generate all required project files
- ✅ Validate manifest configuration
- ✅ Include multiple launch methods

### After Generation:
- ✅ Verify complete project structure generated
- ✅ Test HERE® Core Container launch methods
- ✅ Run syntax validation

## HERE® Core Container Specific Patterns

### Error Prevention Patterns:
- ✅ ALWAYS generate complete project structure
- ✅ ALWAYS include development server
- ✅ ALWAYS include HERE® Core Container manifest
- ✅ ALWAYS provide multiple launch methods
- ❌ NEVER generate standalone HTML files
- ❌ NEVER omit development server
- ❌ NEVER use `url` instead of `providerUrl` in Platform API manifests
- ❌ NEVER create projects without launch instructions

---

**Last Updated**: 2025-07-20
**Critical Update**: Added complete HERE® Core Container project structure requirements
