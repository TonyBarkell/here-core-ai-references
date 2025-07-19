# Repository Update Workflow - Error-Driven Learning

## MANDATORY Error-Driven Learning Process

When script errors are discovered:

1. **Document Error Pattern** - Add to script-generation-guidelines.md
2. **Update Learning Log** - Create entry with error details
3. **Fix Script** - Use bulletproof patterns only
4. **Update Repository** - Include comprehensive prevention
5. **Regenerate** - Create working script with safe patterns

## Bulletproof Script Generation Standards

### NEVER Use Template Literals
```javascript
// NEVER DO THIS
// const content = `some ${variable}`;  // FORBIDDEN

// ALWAYS DO THIS
let content = "";
content += "some " + variable;
```

### Always Use Concatenation Operators
```javascript
// NEVER DO THIS
// let content = "line1"
//              "line2";  // MISSING +

// ALWAYS DO THIS
let content = "";
content += "line1\n";
content += "line2\n";
```

### Handle Quotes Safely
```javascript
// For content with single quotes, use double quotes
content += "const msg = 'Hello World';\n";
// For content with double quotes, use single quotes
content += 'const msg = "Hello World";\n';
```

## Quality Assurance

Before any script delivery:
- Verify all string concatenation has + or += operators
- Check quote escaping patterns
- Run node --check on generated scripts
- Follow documented error prevention patterns

**Last Updated**: 19/07/2025
**Status**: Active error-driven learning with bulletproof patterns