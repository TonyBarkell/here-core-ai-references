# Script Generation Guidelines - Error-Driven Learning System

## Overview
This document captures THREE real-world script generation errors discovered during the development of HERE® Core Container reproduction automation. Each error led to systematic improvements in our error prevention approach.

## Complete Error Pattern Documentation

### Error #1: Template Literal Nesting
**Date Discovered:** 19/07/2025
**Error Message:** `SyntaxError: Invalid or unexpected token at line 147`
**Root Cause:** Using template literals to generate content containing backticks
**Problematic Pattern:**
```javascript
// ❌ CAUSES ERROR
const content = `const backticksPattern = '\\\\\\`literal\\\\\\`';`;
```
**Solution:** Replace ALL template literal content generation with string concatenation
**Prevention Rule:** NEVER use template literals for generating code that contains backticks

### Error #2: Quote Escaping Conflicts
**Date Discovered:** 19/07/2025
**Error Message:** `SyntaxError: Invalid or unexpected token at line 101`
**Root Cause:** Unescaped single quote within string concatenation containing backticks
**Problematic Pattern:**
```javascript
// ❌ CAUSES ERROR - Unescaped quote
content += '    \'console.log(`Status: ${status}`);\'';\n';
```
**Solution:** Use double quotes for outer strings when inner content contains single quotes
**Prevention Rule:** When string content contains both quotes and backticks, use double quotes for outer string

### Error #3: Missing Concatenation Operators
**Date Discovered:** 19/07/2025
**Error Message:** `SyntaxError: Unexpected identifier at line 849`
**Root Cause:** Missing + operator between string parts in multi-line concatenation
**Problematic Pattern:**
```javascript
// ❌ CAUSES ERROR - Missing + operator
content += "First part"
           "Second part";  // Missing + before this line
```
**Solution:** Always use += for incremental string building or + for explicit concatenation
**Prevention Rule:** Every string segment must have a concatenation operator before it

## Why These Errors Keep Occurring

### The Meta-Problem Pattern
**Observation:** Each script documenting error prevention contained the very errors it was meant to prevent!

**Root Causes:**
1. **Cognitive Load Cascade** - Documenting complex error patterns increases mental load
2. **Pattern Blindness** - Focusing on one error type makes us miss others
3. **Meta-Cognitive Conflict** - Simultaneously avoiding errors while documenting them
4. **Complexity Multiplication** - Each error fix increases documentation complexity

### The Solution: Bulletproof Patterns
**Approach:** Use only the safest possible patterns that eliminate entire error classes

## Bulletproof Generation Rules (MANDATORY)

### Rule 1: String Concatenation Only
```javascript
// ✅ ALWAYS DO THIS
let content = "";
content += "First line\n";
content += "Second line\n";
return content;

// ❌ NEVER DO THIS
// const content = `template ${variable}`;  // FORBIDDEN
```

### Rule 2: Always Use Concatenation Operators
```javascript
// ✅ CORRECT - Every string has += operator
content += "line1\n";
content += "line2\n";
content += "line3\n";

// ❌ INCORRECT - Missing operators
// content += "line1"
//            "line2";  // SYNTAX ERROR!
```

### Rule 3: Safe Quote Handling
```javascript
// ✅ For content with single quotes, use double quotes
content += "const msg = 'Hello World';\n";

// ✅ For content with double quotes, use single quotes
content += 'const msg = "Hello World";\n';

// ✅ For mixed content, choose carefully
content += "console.log(`template ${var}`);";
```

### Rule 4: Incremental Building
```javascript
// ✅ Build content incrementally
const generateContent = () => {
    let content = "";
    content += buildHeader();
    content += buildBody();
    content += buildFooter();
    return content;
};
```

### Rule 5: Syntax Validation
```bash
# ALWAYS test generated scripts
node --check generated-script.js
```

## Error Prevention Checklist

### Before Generating Scripts:
- ✅ Plan to use string concatenation only (NO template literals)
- ✅ Identify quote types needed and choose outer quote type
- ✅ Plan incremental building approach
- ✅ Reference this document for known error patterns

### During Generation:
- ✅ Use += for every string addition
- ✅ Verify quote escaping as you build
- ✅ Check for missing + operators
- ✅ Build and test incrementally when possible

### After Generation:
- ✅ Run `node --check script.js` for syntax validation
- ✅ Visual inspection for unmatched quotes/operators
- ✅ Test execution in safe environment
- ✅ If errors found, follow error-driven learning process

## Integration with Repository Workflow

### MANDATORY: Error-Driven Learning Process
When ANY script error is discovered:

1. **Document Error Pattern** - Add to this guidelines file
2. **Analyze Root Cause** - Understand WHY the error occurred
3. **Update Learning Log** - Create detailed learning entry
4. **Create Prevention Rule** - Add to bulletproof patterns
5. **Update Repository** - Include comprehensive error prevention
6. **Generate Fixed Script** - Use only bulletproof patterns

### Success Metrics
- **Error Pattern Documentation:** 3/3 discovered errors documented
- **Prevention Rules:** Bulletproof patterns eliminate error classes
- **Learning Integration:** Self-improving system active
- **Script Quality:** Syntax errors prevented through systematic approach

---

**Last Updated:** 2025-07-19T13:09:32.438Z
**Error Patterns Documented:** 3 (Template Literal, Quote Escaping, Missing Operators)
**Prevention System:** Bulletproof patterns with error-driven learning
**Integration:** MANDATORY reference for ALL script generation workflows