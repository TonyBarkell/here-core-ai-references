# API Detection and Confirmation Workflow

## Purpose
Systematic identification and confirmation of HERE® Core Container APIs involved in customer requests to ensure appropriate technical guidance.

## API Categories

### Platform API
**Primary Functions**: Window and view management, layout control, platform-level operations

**Explicit Indicators**:
- "Platform API", "Platform.createWindow", "Platform.createView"
- "layout", "layout restore", "layout.replace"
- "platform provider", "providerUrl"
- "multiple views", "view arrangement"

**Implicit Indicators**:
- "window with views", "20 views", "view loading"
- "window performance", "view creation time"
- "view arrangement", "window layout"
- References to Golden Layout patterns

**Ambiguous Terms**: "window", "view", "layout" (could be Platform API or general web terminology)

### Application API
**Primary Functions**: Individual application management, lifecycle control

**Explicit Indicators**:
- "Application API", "fin.Application"
- "application lifecycle", "app startup"
- "application manifest", "app configuration"

**Implicit Indicators**:
- "application not starting", "app crashes"
- "application communication", "app integration"
- Single application focus (vs multiple views)

### Interop API
**Primary Functions**: Context sharing, inter-application communication, intents

**Explicit Indicators**:
- "Interop", "FDC3", "context sharing"
- "intents", "intent resolution"
- "broadcast", "context broker"

**Implicit Indicators**:
- "applications talking to each other"
- "share data between apps"
- "coordinate application behavior"

### System API
**Primary Functions**: System information, process management, runtime control

**Explicit Indicators**:
- "System API", "fin.System"
- "process management", "runtime version"
- "system information", "hardware details"

## Detection Process

### Step 1: Explicit API Identification
**Process**:
1. Scan request for explicit API mentions
2. Check for specific method names or patterns
3. Note any clear API-specific terminology

**If explicit API found**: Proceed with detected API
**If no explicit API found**: Continue to implicit detection

### Step 2: Implicit Pattern Analysis
**Multiple Views/Windows Pattern**:
```
Keywords: "multiple", "20 views", "window with views"
├── Performance focus → Likely Platform API
├── Layout arrangement → Likely Platform API
├── View creation timing → Platform API
└── Individual app control → Clarification needed
```

**Communication Pattern**:
```
Keywords: "sharing", "communication", "coordination"
├── Between applications → Likely Interop API
├── Within window views → Could be Platform or Interop
└── System level → System API
```

### Step 3: Ambiguity Resolution
**Common Ambiguous Scenarios**:

**"Window" without context**:
- Could be Platform API window management
- Could be Application API window creation
- Could be general browser window

**"Application" without context**:
- Could be Application API lifecycle
- Could be Platform API view content
- Could be entire HERE Core Container application

## Confirmation Questions

### Platform API Confirmation
**When to ask**: Implicit indicators present but not confirmed

**Question Templates**:
```
"Based on your mention of [windows/views/layout], this sounds like it involves the Platform API for window and view management. Is that correct?"

"Are you working with multiple views within a window, or separate windows each containing applications?"

"Does this involve the Platform API for managing window layouts and view arrangements?"
```

### Multiple API Scenarios
**When to ask**: Could involve multiple APIs

**Question Templates**:
```
"This request might involve multiple HERE Core APIs. Are you working with:
- Platform API (window/view management)
- Application API (app lifecycle)
- Interop API (app communication)
- Or a combination of these?"

"What specific HERE Core functionality are you trying to implement or debug?"
```

### No API Involvement
**When to identify**: No clear API indicators

**Response Pattern**:
```
"This appears to be a general information request about HERE Core Container concepts rather than specific API implementation. I can provide:
- Conceptual explanations
- Documentation links
- General guidance

Would this be helpful, or are you looking for specific API implementation examples?"
```

## Output Requirements

### API Detection Summary
```markdown
**Detected APIs**: [Platform | Application | Interop | System | None | Multiple]
**Confidence Level**: [High | Medium | Low - requires confirmation]
**Key Indicators**: [List of keywords/patterns that led to detection]
**Next Steps**: [Proceed to method selection | Request confirmation | Provide non-API response]
```

### Confirmation Required Output
When confirmation is needed:

```markdown
🔍 **API Confirmation Needed**

Based on your request mentioning [specific terms], this could involve:

**Most Likely**: [Primary API candidate with reasoning]
**Alternatively**: [Secondary possibilities]

Could you confirm which HERE Core APIs are involved?
```

## Integration with Technical Patterns

### Platform API Routing
**If Platform API confirmed**:
- Access [../technical-patterns/platform-api-patterns.md](../technical-patterns/platform-api-patterns.md)
- Check for multiple view scenarios → [../technical-patterns/layout-performance-patterns.md](../technical-patterns/layout-performance-patterns.md)
- Proceed to [method-selection.md](method-selection.md)

### Other API Routing
**Future API Pattern Files**:
- Application API → [../technical-patterns/application-api-patterns.md](../technical-patterns/application-api-patterns.md) *(to be created)*
- Interop API → [../technical-patterns/interop-patterns.md](../technical-patterns/interop-patterns.md) *(to be created)*
- System API → [../technical-patterns/system-api-patterns.md](../technical-patterns/system-api-patterns.md) *(to be created)*

### Non-API Routing
**If no APIs involved**:
- Access [../glossary.md](../glossary.md) for terminology
- Provide conceptual explanation
- Include external documentation links
- Skip method selection phase

## Learning Capture

### How to Update This File
**When to update**:
- New API detection patterns discovered
- Confirmation questions prove ineffective
- New APIs added to HERE Core Container
- Ambiguous scenarios not covered

**Update process**:
1. Document new patterns with specific examples
2. Update keyword lists and decision trees
3. Refine confirmation question templates
4. Add routing for new technical pattern files
5. Test detection accuracy with historical examples
6. Update [../glossary.md](../glossary.md) with new terminology
7. Update learning log with improvements

---

**Last Updated**: 20/07/2025
**Purpose**: Accurate API detection and confirmation for appropriate technical guidance
**Integration**: Second phase of ai-workflow-guide.md process
**Next Phase**: [method-selection.md](method-selection.md) for implementation approach determination