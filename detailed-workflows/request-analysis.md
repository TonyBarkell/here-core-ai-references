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

## Integration with Workflow

### Next Phase Routing
**If request type is clear**:
- Proceed to [API Detection](https://raw.githubusercontent.com/TonyBarkell/here-core-ai-references/refs/heads/main/detailed-workflows/api-detection.md)
- Include request type in analysis

**If clarification obtained**:
- Update analysis with confirmed request type
- Proceed to API detection phase

**If query response only**:
- Check if APIs are involved
- Access [Glossary](https://raw.githubusercontent.com/TonyBarkell/here-core-ai-references/refs/heads/main/glossary.md) for terminology
- Provide information with external documentation links

---

**Last Updated**: 20/07/2025
**Purpose**: Systematic request analysis for optimal deliverable type determination
**Integration**: First phase of AI workflow guide process
**Next Phase**: [API Detection](https://raw.githubusercontent.com/TonyBarkell/here-core-ai-references/refs/heads/main/detailed-workflows/api-detection.md) for technical scope analysis
**URLs**: Updated to raw.githubusercontent.com for AI assistant access