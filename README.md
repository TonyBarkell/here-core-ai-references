# HERE® Core Container AI Reference System

## Purpose
Comprehensive reference repository for AI assistants supporting HERE® Core Container customer interactions.

## 🚀 For Support Team - How to Use This Repository

### Current AI Workflow Prompt (USE THIS)
**For all HERE® Core Container AI assistance, use this prompt:**

```
Working with HERE® Core Container support team. Please review the AI workflow guide at:
https://raw.githubusercontent.com/TonyBarkell/here-core-ai-references/refs/heads/main/ai-workflow-guide.md

Then follow the information gathering workflow for this request: [CUSTOMER_REQUEST]
```

### Why This Prompt Works
- ✅ **Systematic information gathering** before creating deliverables
- ✅ **API detection and confirmation** for accurate technical guidance
- ✅ **Optimal method selection** (layout restore vs sequential creation)
- ✅ **Performance optimization** for Platform API scenarios
- ✅ **Error prevention** through structured workflow

### ❌ Deprecated Templates (DO NOT USE)
These templates will cause method selection issues:

- ~~prompt-templates/basic-reproduction.md (OLD)~~ - Jumps to implementation without workflow

**Problem:** They bypass information gathering that prevents layout vs sequential confusion.

### Usage Example
**Customer Request:** Loading a Platform API window with 20 views takes 5 minutes

**Complete Prompt:**
```
Working with HERE® Core Container support team. Please review the AI workflow guide at:
https://raw.githubusercontent.com/TonyBarkell/here-core-ai-references/refs/heads/main/ai-workflow-guide.md

Then follow the information gathering workflow for this request:
Loading a Platform API window with 20 views takes 5 minutes to complete.
```

**Expected AI Behavior:**
1. ✅ Access workflow guide
2. ✅ Detect Platform API + performance issue
3. ✅ Ask about method preference: layout restore vs sequential
4. ✅ Implement with optimal approach

## Repository Structure

### Core Workflow Files
- **ai-workflow-guide.md** - Entry point for all AI workflows
- **glossary.md** - HERE® terminology with external links
- **detailed-workflows/** - Step-by-step processes

### Technical Resources
- **technical-patterns/** - API-specific patterns
- **code-templates/** - Script generation guidelines
- **prompt-templates/** - Current conversation starters

## Supported Deliverable Types

- **Reproduction Samples** - Complete runnable projects
- **General Starters** - Foundation templates
- **Query Responses** - Information without code
- **Educational Demos** - Conceptual examples

## Key Features

### Performance Optimization
- Layout restore vs sequential creation guidance
- Method selection based on use case
- Performance measurement patterns

### Error Prevention
- Bulletproof script generation guidelines
- Platform API configuration validation
- Terminology confusion prevention

## Support Team Guidelines

### For Customer Support Representatives
- **Always use current workflow prompt**
- **Never use deprecated templates**
- **Expect systematic information gathering**

### For Technical Support Engineers
- **Verify AI follows workflow**
- **Access technical patterns for guidance**
- **Contribute new patterns to repository**

## Troubleshooting

### If AI Skips Information Gathering
- ✅ Check prompt template usage
- ❌ Avoid old basic-reproduction.md
- 🔧 Reference workflow guide directly

### If AI Makes Wrong Method Selection
- ✅ Verify API detection phase
- ✅ Check method selection reasoning
- 🔧 Provide clarification on requirements

---

**Last Updated**: 20/07/2025
**Critical**: Always use current AI workflow prompt for optimal results