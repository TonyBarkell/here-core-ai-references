# Method Selection Workflow

## Purpose
Systematic selection of optimal implementation methods based on confirmed APIs and requirements to ensure efficient and appropriate technical solutions.

## Method Selection by API

### Platform API Method Selection

#### Multiple View Scenarios
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

#### Decision Matrix for Multiple Views
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

#### Single Window Scenarios
**When applicable**: Request involves single window creation or management

**Standard Approach**: 
- Use `Platform.createWindow()` with appropriate layout
- Include provider configuration validation
- Reference [../technical-patterns/platform-api-patterns.md](../technical-patterns/platform-api-patterns.md)

### Application API Method Selection
**Note**: Detailed patterns to be documented when application-api-patterns.md is created

**Current Guidance**:
- Standard Application API lifecycle patterns
- Individual application management
- Reference official HERE documentation

### Interop API Method Selection
**Note**: Detailed patterns to be documented when interop-patterns.md is created

**Current Guidance**:
- Context sharing patterns
- Intent-based communication
- Reference official HERE documentation

## Prompter Consultation Process

### When to Ask Prompter
**Scenarios requiring clarification**:
- Multiple valid methods with unclear requirements
- Performance vs functionality trade-offs
- Educational vs production use cases
- Customer research or comparison needs

### Prompter Question Templates

#### Platform API Multiple Views
```markdown
🎯 **Method Selection for Multiple Views**

For your Platform API scenario with multiple views, I can implement:

**Option 1: Layout Restore (Recommended for performance testing)**
- ✅ Faster execution (simultaneous view creation)
- ✅ More realistic timing measurements
- ✅ Better for reproducing performance issues
- ✅ Efficient for multiple similar views

**Option 2: Sequential Creation**
- ✅ Individual control over each view
- ✅ Different configurations per view
- ✅ Controlled timing between creations
- ✅ Step-by-step debugging capability

**Option 3: User-Selectable Interface**
- ✅ Buttons to test both methods
- ✅ Side-by-side performance comparison
- ✅ Educational value for understanding differences
- ✅ Research and analysis capabilities

Which approach would be most helpful for your specific use case?
```

#### General Method Selection
```markdown
🔧 **Implementation Approach Selection**

Based on your requirements, I can create:

**[Method A]**: [Description and benefits]
**[Method B]**: [Description and benefits]
**[Method C]**: [Description and benefits]

Considering your specific needs for [context], which approach would work best?
```

## Implementation Routing

### Platform API Implementation
**For confirmed Platform API requests**:

**1. Access Required Patterns**:
- [../technical-patterns/platform-api-patterns.md](../technical-patterns/platform-api-patterns.md) - Always required
- [../technical-patterns/layout-performance-patterns.md](../technical-patterns/layout-performance-patterns.md) - If multiple views
- [../code-templates/script-generation-guidelines.md](../code-templates/script-generation-guidelines.md) - If creating setup script

**2. Implementation Approach**:
- Use selected method (layout restore, sequential, or user-selectable)
- Include performance measurement when applicable
- Add debugging support (HERE Process Manager)
- Follow bulletproof script generation patterns

**3. Validation Requirements**:
- Ensure `providerUrl` (not `url`) in manifest
- Include `fin.Platform.init()` in custom providers
- Add protocol handler launch instructions
- Include external documentation references

### Non-Platform API Implementation
**For other APIs**:
- Access appropriate technical pattern files when available
- Reference [../glossary.md](../glossary.md) for terminology
- Include relevant external documentation links
- Follow standard HERE Core Container best practices

### Query Response Implementation
**For information-only requests**:
- Use [../glossary.md](../glossary.md) for accurate terminology
- Include external documentation links
- Provide code snippets for illustration when helpful
- Offer to create runnable examples if needed

## Quality Assurance

### Method Selection Validation
**Before implementation, verify**:
- Method matches use case requirements
- Performance considerations addressed
- Educational value appropriate for audience
- Technical complexity suitable for context

### Implementation Checklist
**Platform API Multiple Views**:
- [ ] Method selection rationale documented
- [ ] Performance measurement included
- [ ] User interface for method selection (if applicable)
- [ ] Timing comparison capability (if user-selectable)
- [ ] Debugging support included

**All Implementations**:
- [ ] Appropriate technical patterns referenced
- [ ] External documentation links included
- [ ] Error prevention guidelines followed
- [ ] Learning capture opportunities identified

## Learning Capture

### How to Update This File
**When to update**:
- New method selection patterns discovered
- Prompter consultation questions prove ineffective
- New APIs require method selection guidance
- Performance optimization opportunities identified
- User feedback on method effectiveness

**Update process**:
1. Document new method selection scenarios
2. Update decision matrices and templates
3. Refine prompter consultation questions
4. Add routing for new technical pattern files
5. Update quality assurance checklists
6. Test method selection with various scenarios
7. Update learning log with effectiveness data

### Cross-File Integration
When updating method selection:
- Update [../technical-patterns/layout-performance-patterns.md](../technical-patterns/layout-performance-patterns.md) with new optimization insights
- Update [../glossary.md](../glossary.md) with new method terminology
- Update [../ai-workflow-guide.md](../ai-workflow-guide.md) decision trees if routing changes
- Ensure [../code-templates/script-generation-guidelines.md](../code-templates/script-generation-guidelines.md) covers new patterns

---

**Last Updated**: 20/07/2025
**Purpose**: Optimal implementation method selection for confirmed technical requirements
**Integration**: Final phase of ai-workflow-guide.md before implementation
**Implementation**: Proceed with selected method using appropriate technical patterns