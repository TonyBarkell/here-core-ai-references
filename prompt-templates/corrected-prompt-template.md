# Corrected Prompt Template for AI Workflow

## Primary Prompt Template (CORRECTED FOR RAW URLs)

### Basic Workflow Prompt
```
Working with HERE® Core Container support team. Please review the AI workflow guide at:
https://raw.githubusercontent.com/TonyBarkell/here-core-ai-references/refs/heads/main/ai-workflow-guide.md

Then follow the information gathering workflow for this request: [CUSTOMER_REQUEST]
```

### Enhanced Prompt with Key References
```
Working with HERE® Core Container support team. Please review these reference files:

**Entry Point (MANDATORY)**:
- AI Workflow Guide: https://raw.githubusercontent.com/TonyBarkell/here-core-ai-references/refs/heads/main/ai-workflow-guide.md

**Core References (Access as needed)**:
- Glossary: https://raw.githubusercontent.com/TonyBarkell/here-core-ai-references/refs/heads/main/glossary.md
- Platform API Patterns: https://raw.githubusercontent.com/TonyBarkell/here-core-ai-references/refs/heads/main/technical-patterns/platform-api-patterns.md
- Layout Performance: https://raw.githubusercontent.com/TonyBarkell/here-core-ai-references/refs/heads/main/technical-patterns/layout-performance-patterns.md
- Script Guidelines: https://raw.githubusercontent.com/TonyBarkell/here-core-ai-references/refs/heads/main/code-templates/script-generation-guidelines.md

CRITICAL: Follow the systematic information gathering process before creating any deliverable.

[CUSTOMER_REQUEST]
```

## Key Changes from Previous Version

### URL Format Updates
**OLD (Non-functional for AI)**:
```
https://github.com/TonyBarkell/here-core-ai-references/blob/main/ai-workflow-guide.md
```

**NEW (Functional for AI)**:
```
https://raw.githubusercontent.com/TonyBarkell/here-core-ai-references/refs/heads/main/ai-workflow-guide.md
```

### Why This Matters
- **AI assistants can only access raw.githubusercontent.com URLs**
- **Regular GitHub blob URLs return HTML pages, not file content**
- **Raw URLs return the actual file content for AI processing**
- **This is critical for the workflow system to function**

## URL Reference Guide

### Core Workflow Files (Raw URLs)
- **Entry Point**: https://raw.githubusercontent.com/TonyBarkell/here-core-ai-references/refs/heads/main/ai-workflow-guide.md
- **Request Analysis**: https://raw.githubusercontent.com/TonyBarkell/here-core-ai-references/refs/heads/main/detailed-workflows/request-analysis.md
- **API Detection**: https://raw.githubusercontent.com/TonyBarkell/here-core-ai-references/refs/heads/main/detailed-workflows/api-detection.md
- **Method Selection**: https://raw.githubusercontent.com/TonyBarkell/here-core-ai-references/refs/heads/main/detailed-workflows/method-selection.md

### Supporting Resources (Raw URLs)
- **Glossary**: https://raw.githubusercontent.com/TonyBarkell/here-core-ai-references/refs/heads/main/glossary.md
- **Platform API Patterns**: https://raw.githubusercontent.com/TonyBarkell/here-core-ai-references/refs/heads/main/technical-patterns/platform-api-patterns.md
- **Layout Performance**: https://raw.githubusercontent.com/TonyBarkell/here-core-ai-references/refs/heads/main/technical-patterns/layout-performance-patterns.md
- **Script Generation**: https://raw.githubusercontent.com/TonyBarkell/here-core-ai-references/refs/heads/main/code-templates/script-generation-guidelines.md

---

**Last Updated**: 20/07/2025
**Purpose**: Corrected prompt templates with functional raw GitHub URLs
**Critical Fix**: All URLs updated to raw.githubusercontent.com for AI assistant access
**Integration**: Use these templates for all future HERE® Core Container AI workflows