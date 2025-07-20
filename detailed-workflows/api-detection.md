# API Detection and Confirmation Workflow

## Purpose
Systematic identification and confirmation of HERE® Core Container APIs involved in customer requests to ensure appropriate technical guidance.

## Platform API Detection

**Explicit Indicators**:
- "Platform API", "Platform.createWindow", "Platform.createView"
- "layout", "layout restore", "layout.replace"
- "platform provider", "providerUrl"
- "multiple views", "view arrangement"

**Implicit Indicators**:
- "window with views", "20 views", "view loading"
- "window performance", "view creation time"
- "view arrangement", "window layout"

## Integration with Technical Patterns

### Platform API Routing
**If Platform API confirmed**:
- Access [Platform API Patterns](https://raw.githubusercontent.com/TonyBarkell/here-core-ai-references/refs/heads/main/technical-patterns/platform-api-patterns.md)
- Check for multiple view scenarios → [Layout Performance Patterns](https://raw.githubusercontent.com/TonyBarkell/here-core-ai-references/refs/heads/main/technical-patterns/layout-performance-patterns.md)
- Proceed to [Method Selection](https://raw.githubusercontent.com/TonyBarkell/here-core-ai-references/refs/heads/main/detailed-workflows/method-selection.md)

### Non-API Routing
**If no APIs involved**:
- Access [Glossary](https://raw.githubusercontent.com/TonyBarkell/here-core-ai-references/refs/heads/main/glossary.md) for terminology
- Provide conceptual explanation
- Include external documentation links
- Skip method selection phase

---

**Last Updated**: 20/07/2025
**Purpose**: Accurate API detection and confirmation for appropriate technical guidance
**Integration**: Second phase of AI workflow guide process
**Next Phase**: [Method Selection](https://raw.githubusercontent.com/TonyBarkell/here-core-ai-references/refs/heads/main/detailed-workflows/method-selection.md) for implementation approach determination
**URLs**: Updated to raw.githubusercontent.com for AI assistant access