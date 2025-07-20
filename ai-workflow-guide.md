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

## CRITICAL: Complete Project Structure Requirements

### For ALL Reproduction Samples:
When creating reproduction samples, AI assistants MUST generate complete HERE® Core Container projects including:

1. **Access Project Structure Requirements**: [Complete Project Structure Requirements](https://raw.githubusercontent.com/TonyBarkell/here-core-ai-references/refs/heads/main/technical-patterns/complete-project-structure-requirements.md)

2. **Generate Complete Project**: Never generate standalone HTML files
   - ALWAYS include development server (Node.js/Express)
   - ALWAYS include HERE® Core Container manifest (app.json)
   - ALWAYS include platform provider (for Platform API)
   - ALWAYS include launch instructions with multiple methods
   - ALWAYS use bulletproof script generation patterns

3. **Validation Required**: 
   - Check manifest uses `providerUrl` for Platform API (NOT `url`)
   - Verify platform provider calls `fin.Platform.init()`
   - Include multiple launch methods (CLI, FINS, direct)
   - Provide complete setup documentation

### Project Structure Validation Checklist:
- [ ] Express server with CORS for HERE® Core Container
- [ ] HERE® Core Container manifest (app.json) with proper configuration
- [ ] Platform provider (provider.html) if Platform API
- [ ] Package.json with dependencies and launch scripts
- [ ] Public directory structure for static files
- [ ] Complete README with setup and launch instructions
- [ ] Multiple launch methods (CLI, FINS URL, direct manifest)

### ERROR PREVENTION:
- ❌ NEVER generate standalone HTML files for HERE® Core Container
- ❌ NEVER omit development server infrastructure
- ❌ NEVER use `url` instead of `providerUrl` in Platform API manifests
- ❌ NEVER create projects without launch instructions

---

**Last Updated**: 20/07/2025
**Critical Update**: Added complete project structure requirements for HERE® Core Container
