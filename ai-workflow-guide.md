# AI Workflow Guide - Entry Point

## Purpose
This guide provides AI assistants with a structured workflow for HERE® Core Container customer support interactions. It serves as the entry point to all repository resources.

## Scope of Support
HERE® Core Container support encompasses multiple deliverable types:

- **Reproduction Samples**: Complete runnable projects that replicate customer issues
- **General Starters**: Foundation templates for development projects
- **Query Responses**: Information and guidance without runnable code
- **Educational Demos**: Conceptual examples and explanations
- **Technical Patterns**: Reusable implementation approaches

## Information Gathering Workflow

### Phase 1: Request Analysis
**Objective**: Understand what type of deliverable is needed

**Process**: [Request Analysis Workflow](https://raw.githubusercontent.com/TonyBarkell/here-core-ai-references/refs/heads/main/detailed-workflows/request-analysis.md)

**Key Questions**:
- What type of deliverable is needed?
- Is this reproducing a problem or demonstrating a solution?
- What is the intended audience and use case?

### Phase 2: API Detection & Confirmation
**Objective**: Identify which HERE® Core APIs are involved

**Process**: [API Detection Workflow](https://raw.githubusercontent.com/TonyBarkell/here-core-ai-references/refs/heads/main/detailed-workflows/api-detection.md)

**Key Patterns**:
- Explicit API mentions vs implicit terminology
- Clarification questions for ambiguous requests
- When to confirm vs when to proceed

### Phase 3: Method Selection
**Objective**: Choose optimal implementation approach

**Process**: [Method Selection Workflow](https://raw.githubusercontent.com/TonyBarkell/here-core-ai-references/refs/heads/main/detailed-workflows/method-selection.md)

**Conditional Access**:
- Platform API scenarios → [Platform API Patterns](https://raw.githubusercontent.com/TonyBarkell/here-core-ai-references/refs/heads/main/technical-patterns/platform-api-patterns.md)
- Multiple view scenarios → [Layout Performance Patterns](https://raw.githubusercontent.com/TonyBarkell/here-core-ai-references/refs/heads/main/technical-patterns/layout-performance-patterns.md)
- Script generation → [Script Generation Guidelines](https://raw.githubusercontent.com/TonyBarkell/here-core-ai-references/refs/heads/main/code-templates/script-generation-guidelines.md)

## Resource Navigation

### Core Resources
- **[Glossary](https://raw.githubusercontent.com/TonyBarkell/here-core-ai-references/refs/heads/main/glossary.md)**: HERE® terminology with external documentation links
- **Technical Patterns**: API-specific implementation patterns
- **Code Templates**: Script generation and bulletproof coding patterns
- **Prompt Templates**: Standard conversation starters

### Learning Integration
- **Learning Log**: Continuous improvement documentation
- **Update Process**: Each interaction can contribute to repository knowledge
- **Pattern Discovery**: New patterns automatically integrated into appropriate files

## Decision Trees

### Request Type Detection
```
Customer Request
├── "reproduce this issue" → Reproduction Sample
├── "how do I start with..." → General Starter
├── "what is..." or "how does..." → Query Response
├── "show me how..." → Educational Demo
└── ambiguous → Ask clarification
```

### API Detection Flow
```
Request Analysis
├── Explicit API mention → Proceed with detected API
├── Implicit indicators → Confirm API before proceeding
├── Multiple APIs possible → Ask for clarification
└── No API indicators → Query response or general guidance
```

### Implementation Method Flow
```
Platform API + Multiple Views
├── Performance testing focus → Layout restore (default)
├── Individual control needed → Sequential creation
├── Educational/comparison → User-selectable methods
├── Ambiguous requirements → Ask prompter for preference
└── Different configurations → Sequential creation
```

## Success Criteria

### Information Gathering Success
- **Clear deliverable type** identified before implementation
- **API scope** confirmed when technical content is involved
- **Method selection** optimized for the specific use case
- **Prompter clarification** obtained when requirements are ambiguous

### Technical Implementation Success
- **Appropriate patterns** used based on detected requirements
- **Performance optimization** applied when multiple views/windows involved
- **Error prevention** through bulletproof script generation
- **Documentation links** provided for further reference

## Learning Capture

### How to Update This Guide
**When to update**:
- New request patterns discovered
- Decision tree improvements identified
- Workflow gaps encountered
- Integration points with other files change

**Update process**:
1. Document the new pattern or improvement
2. Update relevant decision trees
3. Add cross-references to appropriate technical files
4. Test the updated workflow with example scenarios
5. Update learning log with the enhancement

---

**Last Updated**: 20/07/2025
**Purpose**: Entry point for all HERE® Core Container AI assistant workflows
**Integration**: Links to all repository resources with conditional access patterns
**Scope**: Reproduction samples, starters, queries, demos, and technical patterns
**URLs**: Updated to raw.githubusercontent.com for AI assistant access