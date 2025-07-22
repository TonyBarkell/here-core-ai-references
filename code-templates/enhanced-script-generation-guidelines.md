# Enhanced Script Generation Guidelines - Error Prevention System 3.0

## 🚨 CRITICAL UPDATE - Based on Real MacOS Node.js Failures

### Documented Error Patterns from Production Failures
**Error #1:** `SyntaxError: Invalid or unexpected token` (Line 347)
- **Cause:** Unescaped single quotes in string concatenation
- **Solution:** Use double quotes outside, single quotes inside

**Error #2:** `SyntaxError: Unexpected token '}'` (Line 580)
- **Cause:** Missing concatenation operators
- **Solution:** Use incremental building with explicit += operators

## BULLETPROOF PATTERNS (MANDATORY)

### Pattern A: Incremental String Building
```javascript
const generateContent = () => {
    let content = "";
    content += "line 1\n";
    content += "line 2\n";
    return content;
};
```

## MANDATORY PRE-GENERATION CHECKLIST

**Before ANY script generation, Claude MUST state:**
```
🛡️ SCRIPT GENERATION SAFETY MODE ACTIVE
✅ Using incremental string building
✅ Quote handling strategy confirmed
✅ No template literals for content generation
✅ Every content line uses += operator
```

## MANDATORY POST-GENERATION VALIDATION

**After script generation, Claude MUST state:**
```
🔍 SCRIPT VALIDATION COMPLETE
✅ All content built with incremental pattern
✅ No quote escaping conflicts detected
✅ Ready for Node.js execution
```

---
**Last Updated:** 2025-07-22
