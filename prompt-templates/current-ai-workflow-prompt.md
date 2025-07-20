# Current AI Workflow Prompt Template

## ✅ CURRENT - Use This Prompt

### Standard Workflow Prompt
```
Working with HERE® Core Container support team. Please review the AI workflow guide at:
https://raw.githubusercontent.com/TonyBarkell/here-core-ai-references/refs/heads/main/ai-workflow-guide.md

Then follow the information gathering workflow for this request: [CUSTOMER_REQUEST]
```

### Enhanced Prompt (For Complex Scenarios)
```
Working with HERE® Core Container support team. Please review the AI workflow guide at:
https://raw.githubusercontent.com/TonyBarkell/here-core-ai-references/refs/heads/main/ai-workflow-guide.md

**Additional Context** (access as needed):
- Glossary: https://raw.githubusercontent.com/TonyBarkell/here-core-ai-references/refs/heads/main/glossary.md
- Platform Patterns: https://raw.githubusercontent.com/TonyBarkell/here-core-ai-references/refs/heads/main/technical-patterns/platform-api-patterns.md

CRITICAL: Follow systematic information gathering before creating deliverables.

[CUSTOMER_REQUEST]
```

## Why This Prompt Works

### Systematic Process
1. **Request Analysis** - Determines deliverable type
2. **API Detection** - Identifies HERE® Core APIs
3. **Method Selection** - Chooses optimal approach
4. **Implementation** - Creates deliverable

### Prevents Common Issues
- **Layout vs Sequential Confusion** - Systematic method selection
- **Premature Implementation** - Information gathering first
- **API Assumptions** - Explicit confirmation
- **Performance Anti-patterns** - Optimal approach selection

## Usage Examples

### Reproduction Sample
**Customer Request:** Platform API window with 20 views takes 5 minutes

**Expected AI Behavior:**
1. ✅ Access workflow guide
2. ✅ Detect Platform API + performance
3. ✅ Ask method preference
4. ✅ Implement optimal approach

### Information Request
**Customer Request:** What is difference between views and windows?

**Expected AI Behavior:**
1. ✅ Access workflow guide
2. ✅ Detect query response type
3. ✅ Access glossary
4. ✅ Provide explanation with links

---

**Last Updated**: 20/07/2025
**Purpose**: Current AI workflow prompt for HERE® Core Container support
**Critical**: Use this instead of deprecated templates