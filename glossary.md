# HERE® Core Container Glossary

## Purpose
Comprehensive terminology reference for HERE® Core Container with external documentation links and common confusion clarifications.

## How to Use This Glossary
- **Terms** are organized by category for quick navigation
- **External Links** provide authoritative HERE® documentation
- **Common Confusion** sections prevent misunderstandings
- **Related Patterns** link to implementation guidance

## Platform API Terms

### View
**Definition**: Individual web content container within a HERE® Core Container window. Each view hosts a separate web application or page.

**External Documentation**: https://resources.here.io/docs/core/container/views

**Common Confusion**:
- **View vs Window**: A view is content within a window; a window can contain multiple views
- **View vs Application**: A view hosts an application but is not the application itself
- **View vs Tab**: Views can be arranged in tabs but are distinct from browser tabs

**Related Patterns**: [technical-patterns/platform-api-patterns.md](technical-patterns/platform-api-patterns.md)

**API Examples**:
- `fin.Platform.createView()` - Create individual view
- View configuration in layout definitions

### Window
**Definition**: Container that hosts one or more views in HERE® Core Container. Windows provide the frame and management for view arrangements.

**External Documentation**: https://resources.here.io/docs/core/container/windows

**Common Confusion**:
- **Window vs View**: Windows contain views; views contain content
- **Platform Window vs Application Window**: Platform API manages windows differently than Application API

**Related Patterns**: [technical-patterns/platform-api-patterns.md](technical-patterns/platform-api-patterns.md)

**API Examples**:
- `Platform.createWindow()` - Create window with layout
- Window options and configuration

### Layout
**Definition**: Configuration that defines how views are arranged and behave within a window. Layouts control positioning, sizing, and interaction patterns.

**External Documentation**: https://resources.here.io/docs/core/container/layouts/save-layouts

**Performance Considerations**: Layout restore vs sequential view creation for multiple views

**Common Confusion**:
- **Layout vs View Arrangement**: Layouts define the rules; arrangement is the result
- **Layout Restore vs Sequential Creation**: Different methods with significant performance implications

**Related Patterns**: [technical-patterns/layout-performance-patterns.md](technical-patterns/layout-performance-patterns.md)

**API Examples**:
- `layout.replace()` - Apply new layout configuration
- `layout.getConfig()` - Retrieve current layout
- Layout definitions in Platform.createWindow()

### Platform Provider
**Definition**: Custom HTML page that initializes and manages Platform API functionality. Providers enable custom platform behavior and window management.

**External Documentation**: https://resources.here.io/docs/core/container/platform-provider

**Critical Configuration**: Must use `providerUrl` (not `url`) in manifest

**Common Confusion**:
- **Provider vs Application**: Provider manages platform; applications run within it
- **Custom vs Default Provider**: Custom providers require specific initialization

**Related Patterns**: [technical-patterns/platform-api-patterns.md](technical-patterns/platform-api-patterns.md)

**API Examples**:
- `fin.Platform.init()` - Required in custom providers
- Provider configuration in manifest files

## Application API Terms

### Application
**Definition**: Individual software component running within HERE® Core Container. Applications can be web-based or native integrations.

**External Documentation**: https://resources.here.io/docs/core/container/applications

**Common Confusion**:
- **Application vs View**: Applications run in views but are separate concepts
- **Application vs Platform**: Platform manages applications; applications provide functionality

**Related Patterns**: [technical-patterns/application-api-patterns.md](technical-patterns/application-api-patterns.md) *(future)*

## Interop API Terms

### Context Sharing
**Definition**: Mechanism for applications to share data and coordinate behavior through HERE® Core Container messaging.

**External Documentation**: https://resources.here.io/docs/core/container/interop

**Related Patterns**: [technical-patterns/interop-patterns.md](technical-patterns/interop-patterns.md) *(future)*

### Intents
**Definition**: Standardized workflow instructions that applications can send to request specific actions from other applications.

**External Documentation**: https://resources.here.io/docs/core/container/intents

## Development and Deployment Terms

### Manifest
**Definition**: JSON configuration file that defines HERE® Core Container application settings, runtime requirements, and API configurations.

**External Documentation**: https://resources.here.io/docs/core/container/manifest

**Critical Patterns**: Platform API requires `providerUrl` not `url`

**Related Patterns**: [api-reference/manifest-templates.md](api-reference/manifest-templates.md)

### HERE Process Manager
**Definition**: Web-based tool for monitoring and debugging HERE® Core Container applications and system architecture.

**External Link**: https://process-manager.here.io

**Usage**: Essential for performance debugging and system monitoring

**Related Patterns**: Included in all reproduction samples for debugging support

## Deliverable Types

### Reproduction Sample
**Definition**: Complete runnable project that replicates a specific customer issue for debugging and resolution.

**Characteristics**:
- Full project structure with setup scripts
- Demonstrates both expected and actual behavior
- Includes debugging and monitoring capabilities
- Performance measurement when applicable

**Related Patterns**: [prompt-templates/basic-reproduction.md](prompt-templates/basic-reproduction.md)

### General Starter
**Definition**: Foundation template project that provides a starting point for HERE® Core Container development.

**Characteristics**:
- Clean, documented codebase
- Best practices implementation
- Extensible architecture
- Educational comments and guidance

### Query Response
**Definition**: Information and guidance provided without runnable code, typically answering conceptual or procedural questions.

**Characteristics**:
- Explanatory content
- Links to external documentation
- Code snippets for illustration
- No complete runnable project

### Educational Demo
**Definition**: Conceptual example that demonstrates specific HERE® Core Container capabilities or patterns.

**Characteristics**:
- Focused on teaching specific concepts
- Simplified for clarity
- Clear documentation of demonstrated patterns
- May include interactive elements

## Learning Integration

### How to Update This Glossary
**When to update**:
- New HERE® terminology encountered
- Clarification of existing terms needed
- New external documentation discovered
- Common misconceptions identified
- New deliverable types or patterns emerge

**Update process**:
1. Add new term with complete definition
2. Include external documentation link when available
3. Document common confusion points
4. Link to relevant technical patterns
5. Provide API examples when applicable
6. Update cross-references in related files
7. Add entry to learning log

### Cross-Reference Maintenance
When updating this glossary:
- Update [ai-workflow-guide.md](ai-workflow-guide.md) if new decision points emerge
- Update relevant technical pattern files with new terminology
- Update [detailed-workflows/](detailed-workflows/) if clarification questions change
- Ensure [learning-log/](learning-log/) captures the enhancement

---

**Last Updated**: 20/07/2025
**Purpose**: Comprehensive HERE® Core Container terminology reference with external links
**Integration**: Cross-referenced with all technical patterns and workflow guides
**Maintenance**: Continuously updated as new terminology and patterns are discovered