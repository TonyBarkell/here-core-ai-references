# Enhanced Script Generation Guidelines - Error Prevention System 3.0

## 🚨 CRITICAL UPDATE - Based on Real MacOS Node.js Failures

### Documented Error Patterns from Production Failures
**Error #1 (Line 347):** `SyntaxError: Invalid or unexpected token`
- **Cause:** Unescaped single quotes in string concatenation
- **Real Example:** Mixed quote types in single concatenation
- **Solution:** Use double quotes outside, single quotes inside

**Error #2 (Line 580):** `SyntaxError: Unexpected token '}'`
- **Cause:** Missing concatenation operators in multi-line building
- **Pattern:** String array approach with incomplete concatenation
- **Solution:** Use incremental building with explicit += operators

**Error #3 (Script Generation Meta-Problem):** Guidelines scripts containing the errors they prevent
- **Meta Problem:** Complex content generation inherently error-prone
- **Solution:** Use only simple, bulletproof patterns

## BULLETPROOF PATTERNS (MANDATORY)

### Pattern A: Incremental String Building (PRIMARY METHOD)
```javascript
// ✅ ALWAYS USE THIS EXACT PATTERN
const generateContent = () => {
    let content = "";
    content += "line 1\n";
    content += "line 2\n";
    content += "line 3\n";
    return content;
};
```

### Pattern B: Safe Quote Handling
```javascript
// ✅ For content with single quotes, use double quotes outside
const generateJS = () => {
    let content = "";
    content += "console.log('Hello World');\n";
    content += "const msg = 'Success';\n";
    return content;
};

// ✅ For content with double quotes, use single quotes outside
const generateHTML = () => {
    let content = "";
    content += '<div class="container">\n';
    content += '  <p class="text">Hello</p>\n';
    content += '</div>\n';
    return content;
};
```

## FORBIDDEN PATTERNS (CAUSE FAILURES)

### ❌ NEVER USE: String Arrays with Complex Content
```javascript
// This pattern caused the MacOS failures - DON'T DO THIS!
const badLines = [
    // Quote conflicts and missing operators cause syntax errors
    // Use incremental building instead
];
```

### ❌ NEVER USE: Template Literals for Content Generation
```javascript
// This causes nested backtick errors - FORBIDDEN!
// Use string concatenation exclusively
```

## MANDATORY PRE-GENERATION CHECKLIST

**Before ANY script generation, Claude MUST state:**
```
🛡️ SCRIPT GENERATION SAFETY MODE ACTIVE
✅ Using incremental string building (Pattern A)
✅ Quote handling strategy confirmed
✅ No template literals for content generation
✅ Every content line uses += operator
✅ No string arrays for complex content
```

## MANDATORY POST-GENERATION VALIDATION

**After script generation, Claude MUST state:**
```
🔍 SCRIPT VALIDATION COMPLETE
✅ All content built with incremental pattern
✅ No quote escaping conflicts detected
✅ All string additions use += operator
✅ No template literal nesting
✅ Ready for Node.js execution
```

## ERROR RECOVERY WORKFLOW

**When Node.js syntax errors occur:**
1. **Parse Error Location:** Extract line number from Node.js error message
2. **Identify Pattern Violation:** Check which bulletproof pattern was missed
3. **Apply Safe Pattern:** Replace problematic section with Pattern A/B
4. **Validate Before Delivery:** Confirm incremental building approach
5. **Document Learning:** Add specific error to learning log

---
**Last Updated:** 2025-07-22
**Error Prevention:** 3 production failure patterns documented and solved
**Validation:** Mandatory pre/post generation checklists
**Patterns:** Bulletproof methods eliminate entire error classes
