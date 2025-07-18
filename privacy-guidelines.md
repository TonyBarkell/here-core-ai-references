# Privacy and Data Sanitization Guidelines

## Critical Privacy Rules

**NEVER include any of the following in this repository:**

### Customer Information
- ❌ Customer names, company names, or identifying information
- ❌ Support ticket numbers or case references
- ❌ Customer quotes or communication content
- ❌ Customer environment details (domains, IPs, server names)
- ❌ Customer-specific configurations or code
- ❌ Internal customer references or classifications

### Technical Information to Avoid
- ❌ Proprietary customer implementations
- ❌ Customer-specific error messages containing identifying data
- ❌ Custom customer APIs or integrations
- ❌ Customer deployment configurations
- ❌ Any code that could identify a specific customer

## Safe to Include

### Technical Patterns
- ✅ Generic API usage patterns
- ✅ Anonymized technical issues
- ✅ Standard HERE® Core Container configurations
- ✅ Common error types (without customer context)
- ✅ Best practice patterns
- ✅ Documentation improvement suggestions

### Code Examples
- ✅ Generic manifest templates
- ✅ Standard fin API usage
- ✅ Error handling patterns
- ✅ Reproduction sample templates
- ✅ Debugging approaches

## Sanitization Process

### Before Adding Content:

1. **Remove Identifiers**
   - Replace customer names with "Customer A", "Anonymous Company", etc.
   - Remove ticket numbers and case references
   - Generalize server names to "example.com", "server.local", etc.

2. **Focus on Technical Pattern**
   - What API was involved?
   - What was the technical behavior?
   - What solution pattern worked?
   - How can this be reproduced generically?

3. **Review and Validate**
   - Could this content identify any customer?
   - Is the technical pattern clear without customer context?
   - Would this be useful for future similar technical issues?

## Examples

### ❌ BAD - Contains Customer Data:
```markdown
## ACME Corp Window Issue - Ticket #12345
Customer reported: "Our trading platform at trading.acmecorp.com 
shows windows in wrong position when using our custom layout manager..."
```

### ✅ GOOD - Sanitized Technical Pattern:
```markdown
## Window Positioning Issue Pattern
**Technical Issue:** Windows created with specific defaultWidth/Height 
combinations appear in incorrect positions when frame:false is used
**APIs Involved:** fin.Window.create(), window positioning options
**Solution Pattern:** Validate window bounds after creation
```

## Team Responsibilities

### Before Committing:
- [ ] Reviewed content for customer identifiers
- [ ] Focused on technical patterns only
- [ ] Tested that pattern is useful without customer context
- [ ] Verified no proprietary information included

### Regular Reviews:
- Monthly review of repository content
- Remove outdated or unnecessary entries
- Consolidate similar patterns
- Ensure continued compliance with privacy rules

## Violation Response

If customer data is accidentally committed:
1. **Immediately remove** the content
2. **Force push** to remove from history if necessary
3. **Review process** to prevent recurrence
4. **Document lesson learned** (without revealing what was exposed)

## Questions or Concerns

When in doubt about whether content is appropriate:
- **Don't include it** - err on the side of caution
- **Consult with team lead** before adding questionable content
- **Focus on the technical pattern** rather than the customer context

Remember: The goal is to build useful technical references while maintaining complete customer privacy and confidentiality.
