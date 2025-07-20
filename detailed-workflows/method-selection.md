# Method Selection Workflow

## Purpose
Systematic selection of optimal implementation methods based on confirmed APIs and requirements to ensure efficient and appropriate technical solutions.

## Platform API Method Selection

### Multiple View Scenarios
**When applicable**: Request involves creating multiple views within windows

**Method Options**:

**1. Layout Restore (Recommended for most cases)**
- **Best for**: Performance testing, multiple similar views, timing accuracy
- **Characteristics**: Simultaneous view creation, faster execution, realistic load patterns
- **Use cases**: "20 views take 5 minutes to load", performance reproduction, memory testing

**2. Sequential Creation**
- **Best for**: Individual view control, different configurations, controlled timing
- **Characteristics**: One-by-one creation, individual customization, slower execution
- **Use cases**: Views with different URLs, user interaction testing, step-by-step debugging

**3. User-Selectable Methods (Educational/Comparison)**
- **Best for**: Demonstrating differences, performance comparison, educational purposes
- **Characteristics**: UI buttons for both methods, side-by-side timing, educational value
- **Use cases**: Method comparison research, educational demos, unclear requirements

### Decision Matrix for Multiple Views
```
Multiple View Request Analysis
├── Performance testing mentioned → Layout Restore
├── "Views with same content" → Layout Restore
├── "Different view configurations" → Sequential Creation
├── "Compare methods" or "research" → User-Selectable
├── Educational/demo purpose → User-Selectable
├── Timing accuracy critical → Layout Restore
├── Individual control needed → Sequential Creation
└── Ambiguous requirements → Ask Prompter
```

## Implementation Routing

### Platform API Implementation
**For confirmed Platform API requests**:

**1. Access Required Patterns**:
- [Platform API Patterns](https://raw.githubusercontent.com/TonyBarkell/here-core-ai-references/refs/heads/main/technical-patterns/platform-api-patterns.md) - Always required
- [Layout Performance Patterns](https://raw.githubusercontent.com/TonyBarkell/here-core-ai-references/refs/heads/main/technical-patterns/layout-performance-patterns.md) - If multiple views
- [Script Generation Guidelines](https://raw.githubusercontent.com/TonyBarkell/here-core-ai-references/refs/heads/main/code-templates/script-generation-guidelines.md) - If creating setup script

**2. Implementation Approach**:
- Use selected method (layout restore, sequential, or user-selectable)
- Include performance measurement when applicable
- Add debugging support (HERE Process Manager)
- Follow bulletproof script generation patterns

**3. Validation Requirements**:
- Ensure providerUrl (not url) in manifest
- Include fin.Platform.init() in custom providers
- Add protocol handler launch instructions
- Include external documentation references

### Query Response Implementation
**For information-only requests**:
- Use [Glossary](https://raw.githubusercontent.com/TonyBarkell/here-core-ai-references/refs/heads/main/glossary.md) for accurate terminology
- Include external documentation links
- Provide code snippets for illustration when helpful
- Offer to create runnable examples if needed

---

**Last Updated**: 20/07/2025
**Purpose**: Optimal implementation method selection for confirmed technical requirements
**Integration**: Final phase of AI workflow guide before implementation
**Implementation**: Proceed with selected method using appropriate technical patterns
**URLs**: Updated to raw.githubusercontent.com for AI assistant access