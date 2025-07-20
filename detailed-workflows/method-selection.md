# Method Selection Workflow (Enhanced with Script Generation)

## Purpose
Systematic selection of optimal implementation methods with bulletproof script generation.

## Implementation Routing

### Platform API Implementation
**For confirmed Platform API requests**:

**1. Access Required Patterns**:
- Platform API Patterns - Always required
- Layout Performance Patterns - If multiple views
- Script Generation Guidelines - If creating setup script

**2. MANDATORY Script Generation Protocol (NEW)**:
**Before creating ANY Node.js/JavaScript files**:

CRITICAL STEP: Access Script Generation Guidelines First

Apply Bulletproof Patterns:
✅ String concatenation only (no template literals)
✅ Explicit concatenation operators on every line
✅ Safe quote handling
✅ Incremental building pattern
✅ Syntax validation

**3. Implementation Approach**:
- Use selected method (layout restore, sequential, or user-selectable)
- Include performance measurement when applicable
- Add debugging support (HERE Process Manager)
- **Follow bulletproof script generation patterns (CRITICAL)**

### Script Generation Error Prevention (NEW)

**Common Script Generation Errors to Avoid**:

**Error Pattern #1: Template Literal Nesting**
// ❌ CAUSES ERROR - Template literals with backticks
// const content = template literal with backticks;

// ✅ CORRECT - String concatenation only
let content = "";
content += "const example = 'template';\n";

**Error Pattern #2: Quote Escaping Conflicts**
// ❌ CAUSES ERROR - Unescaped quotes
// content += 'const msg = 'Hello';';

// ✅ CORRECT - Proper quote handling
content += "const msg = 'Hello';\n";

**Error Pattern #3: Missing Concatenation Operators**
// ❌ CAUSES ERROR - Missing + operator
// content += "first line"
//            "second line";

// ✅ CORRECT - Explicit operators
content += "first line\n";
content += "second line\n";

### Script Generation Validation (NEW)
**Before delivering ANY scripts, verify**:
- [ ] Script generation guidelines accessed and followed
- [ ] String concatenation used exclusively
- [ ] Explicit concatenation operators on every line
- [ ] Safe quote handling applied throughout
- [ ] Incremental building pattern used
- [ ] Mental syntax validation completed

---

**Last Updated**: 20/07/2025
**Enhancement**: Mandatory bulletproof script generation integration