# AI Workflow Guide - Entry Point (Enhanced with Script Generation)

## Purpose
This guide provides AI assistants with a structured workflow for HERE® Core Container customer support interactions.

## Scope of Support
HERE® Core Container support encompasses multiple deliverable types:

- **Reproduction Samples**: Complete runnable projects that replicate customer issues
- **General Starters**: Foundation templates for development projects
- **Query Responses**: Information and guidance without runnable code
- **Educational Demos**: Conceptual examples and explanations

## Information Gathering Workflow

### Phase 1: Request Analysis
**Objective**: Understand what type of deliverable is needed

**Process**: [Request Analysis Workflow](https://raw.githubusercontent.com/TonyBarkell/here-core-ai-references/refs/heads/main/detailed-workflows/request-analysis.md)

### Phase 2: API Detection & Confirmation
**Objective**: Identify which HERE® Core APIs are involved

**Process**: [API Detection Workflow](https://raw.githubusercontent.com/TonyBarkell/here-core-ai-references/refs/heads/main/detailed-workflows/api-detection.md)

### Phase 3: Method Selection
**Objective**: Choose optimal implementation approach

**Process**: [Method Selection Workflow](https://raw.githubusercontent.com/TonyBarkell/here-core-ai-references/refs/heads/main/detailed-workflows/method-selection.md)

### Phase 4: Implementation with Script Generation Validation (NEW)
**Objective**: Create deliverable while ensuring bulletproof script generation

**MANDATORY Script Generation Protocol**:
When creating ANY Node.js scripts, setup scripts, or JavaScript files:

1. **FIRST**: Access Script Generation Guidelines
2. **APPLY**: Bulletproof patterns (string concatenation only)
3. **VALIDATE**: Syntax patterns before delivery
4. **VERIFY**: No template literals, proper escaping

**Critical Error Prevention**:
- ❌ NEVER use template literals for content generation
- ❌ NEVER mix quote types without proper escaping
- ❌ NEVER omit concatenation operators
- ✅ ALWAYS use string concatenation pattern

## Resource Navigation

### Core Resources
- **Glossary**: HERE® terminology with external documentation links
- **Technical Patterns**: API-specific implementation patterns
- **Code Templates**: Script generation and bulletproof coding patterns

### Script Generation Resources (MANDATORY)
- **Script Generation Guidelines**: Bulletproof error prevention patterns
- **Content Preservation Guidelines**: Safe content handling

## Decision Trees

### Script Generation Decision Flow (NEW)
Implementation Phase
├── Requires Node.js/JavaScript files → MANDATORY: Access script guidelines first
├── Setup script needed → Apply bulletproof patterns
├── Template generation → Use string concatenation only
└── No scripts needed → Proceed with standard patterns

## Success Criteria

### Script Generation Success (NEW)
- **Bulletproof patterns applied** to all JavaScript/Node.js files
- **Syntax validation** completed before delivery
- **Error prevention guidelines** followed throughout
- **Template literal avoidance** in all content generation

---

**Last Updated**: 20/07/2025
**Enhancement**: Mandatory bulletproof script generation integration
**URLs**: Updated to raw.githubusercontent.com for AI assistant access