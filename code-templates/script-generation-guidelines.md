# Script Generation Guidelines - Error-Driven Learning System

## Overview
This document captures THREE real-world script generation errors and their prevention patterns.

## Discovered Error Patterns

### Error #1: Template Literal Nesting
**Error**: SyntaxError: Invalid or unexpected token (template literals within template literals)
**Cause**: Using backticks to generate content containing backticks
**Solution**: Use string concatenation instead of template literals

### Error #2: Quote Escaping Conflicts
**Error**: SyntaxError: Invalid or unexpected token (unescaped quotes)
**Cause**: Single quotes in string concatenation containing single quotes
**Solution**: Use double quotes for outer strings with single quote content

### Error #3: Missing Concatenation Operators
**Error**: SyntaxError: Unexpected identifier (missing + operators)
**Cause**: Missing + operators between string parts in concatenation
**Solution**: Always use += or + operators between string segments

## Bulletproof Generation Rules

1. **NEVER use template literals** for content generation
2. **ALWAYS use += operators** for string building
3. **Use double quotes** for strings containing single quotes
4. **Build incrementally** - one line at a time
5. **Test syntax** with node --check before delivery

## Safe Patterns

### Pattern 1: Basic String Building
```javascript
let content = "";
content += "First line\n";
content += "Second line\n";
return content;
```

### Pattern 2: Code Examples with Backticks
```javascript
let content = "";
content += "```javascript\n";
content += "const template = `Hello ${name}`;\n";
content += "```\n";
return content;
```

### Pattern 3: Mixed Quote Handling
```javascript
let content = "";
content += "const msg = 'Hello World';\n";
content += "console.log(msg);\n";
return content;
```

## Error Prevention Checklist

- Check for missing + or += operators
- Verify quote escaping in mixed content
- Avoid template literals entirely
- Test with node --check
- Build strings incrementally

**Last Updated**: 2025-07-19T13:04:04.193Z
**Error Patterns**: 3 documented with prevention solutions