# Request Analysis Workflow

## Purpose
Systematic analysis of customer requests to determine deliverable type and scope before technical implementation.

## Request Type Detection

### Reproduction Sample Indicators
**Keywords**: "reproduce", "replicate", "issue", "problem", "bug", "not working", "takes too long"

**Patterns**:
- "Loading a Platform API window with 20 views takes 5 minutes"
- "Views are not appearing correctly"
- "Application crashes when..."
- "Performance issue with..."

**Required Information**:
- Expected vs actual behavior
- Technical description of the issue
- APIs involved
- Environmental factors

### General Starter Indicators
**Keywords**: "how to start", "template", "foundation", "getting started", "basic setup"

**Patterns**:
- "How do I create a basic Platform API application?"
- "Template for multiple view application"
- "Starting point for HERE Core development"
- "Foundation project with best practices"

**Required Information**:
- Intended functionality scope
- Target APIs and features
- Development experience level
- Specific requirements or constraints

### Query Response Indicators
**Keywords**: "what is", "how does", "explain", "difference between", "when to use"

**Patterns**:
- "What is the difference between views and windows?"
- "How does layout restore work?"
- "When should I use Platform API vs Application API?"
- "Explain the HERE Core Container architecture"

**Required Information**:
- Specific aspect of interest
- Context for the question
- Intended use of the information
- Technical depth required

### Educational Demo Indicators
**Keywords**: "show me", "demonstrate", "example of", "how to use", "tutorial"

**Patterns**:
- "Show me how to implement context sharing"
- "Demonstrate layout performance optimization"
- "Example of custom platform provider"
- "Tutorial for view management"

**Required Information**:
- Specific concept to demonstrate
- Audience technical level
- Interactive vs static demo preference
- Scope and complexity desired

## Analysis Process

### Step 1: Initial Categorization
**Process**:
1. Scan request for primary keywords
2. Identify request type using patterns above
3. Note any ambiguous or mixed indicators
4. Flag requests that might need clarification

**Decision Matrix**:
```
Keywords Found
├── Reproduction + Technical Issue → Reproduction Sample
├── Starter + Template + Foundation → General Starter
├── Question + Explanation → Query Response
├── Demo + Example + Show → Educational Demo
├── Mixed indicators → Ask clarification
└── No clear indicators → Default to Query Response + Ask clarification
```

### Step 2: Scope Assessment
**Technical Complexity**:
- Single API vs multiple APIs
- Simple configuration vs complex integration
- Standard patterns vs custom implementation

**Resource Requirements**:
- Quick answer vs comprehensive project
- Documentation reference vs runnable code
- Basic example vs production-ready sample

### Step 3: Information Gap Identification
**Missing Critical Information**:
- Deliverable type unclear
- Technical requirements undefined
- Success criteria not specified
- Use case context missing

**Clarification Questions**:
- "What type of deliverable would be most helpful: runnable sample, starter template, or information/guidance?"
- "Are you looking to reproduce a specific issue or create something new?"
- "What HERE Core APIs or features should be involved?"
- "Who is the intended audience for this deliverable?"

## Output Requirements

### Analysis Summary Format
```markdown
**Request Type**: [Reproduction Sample | General Starter | Query Response | Educational Demo]
**Technical Scope**: [API(s) involved, complexity level]
**Deliverable**: [What will be created/provided]
**Next Steps**: [Proceed to API detection | Request clarification | Provide immediate response]
```

### Clarification Required Format
When analysis indicates clarification is needed:

```markdown
🤔 **Request Clarification Needed**

I can help with this request, but I want to ensure I provide the most useful deliverable.

**I can provide**:
- **Reproduction Sample**: Complete runnable project that demonstrates the issue
- **General Starter**: Foundation template for development
- **Information/Guidance**: Explanation and documentation links
- **Educational Demo**: Example showing specific concepts

Which would be most helpful for your needs?
```

## Integration with Workflow

### Next Phase Routing
**If request type is clear**:
- Proceed to [api-detection.md](api-detection.md)
- Include request type in analysis

**If clarification obtained**:
- Update analysis with confirmed request type
- Proceed to API detection phase

**If query response only**:
- Check if APIs are involved
- Access [glossary.md](../glossary.md) for terminology
- Provide information with external documentation links

## Learning Capture

### How to Update This File
**When to update**:
- New request patterns encountered
- Clarification questions prove ineffective
- Request type detection accuracy issues
- New deliverable types emerge

**Update process**:
1. Document new patterns with examples
2. Update keyword lists and decision matrix
3. Refine clarification question templates
4. Test updated analysis with historical examples
5. Update learning log with improvements

---

**Last Updated**: 20/07/2025
**Purpose**: Systematic request analysis for optimal deliverable type determination
**Integration**: First phase of ai-workflow-guide.md process
**Next Phase**: [api-detection.md](api-detection.md) for technical scope analysis