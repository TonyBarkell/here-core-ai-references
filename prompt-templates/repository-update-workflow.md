# Repository Update Workflow - AI-Driven Learning System

## Overview
This document captures the automated learning and repository update process for HERE® Core Container reproduction samples. This workflow enables continuous improvement of prompts and patterns based on real reproduction work, with robust content preservation and README integration management.

## CRITICAL: Enhanced Error-Driven Learning with README Integration

**MANDATORY Process When Script Errors OR Content Loss OR Missing README Links Are Discovered:**

1. **Root Cause Analysis** - Identify exact pattern causing error/loss/integration gap
2. **Error Documentation** - Add pattern to script-generation-guidelines.md
3. **Content Preservation Check** - Ensure no valuable content was lost
4. **README Integration Validation** - Verify all new files are accessible via Quick Access Links
5. **Learning Integration** - Update learning log using MERGE approach
6. **Repository Update** - Include comprehensive prevention with content preservation
7. **Script Regeneration** - Create fixed version using safe patterns

### README Integration Requirements (NEW)
**Phase 2.6: README Integration Validation**

For ANY file additions, moves, or renames:
- ✅ **Update Quick Access Links** in README.md for all new/moved files
- ✅ **Verify raw.githubusercontent.com URLs** are correctly formatted
- ✅ **Test AI accessibility** by confirming files can be fetched via raw URLs
- ✅ **Update standard prompts** to reference new files where appropriate
- ✅ **Validate link integrity** - ensure no broken references

#### README Update Patterns

**When adding files to technical-patterns/:**
```markdown
### Technical Patterns
- [Platform API Patterns](https://raw.githubusercontent.com/TonyBarkell/here-core-ai-references/refs/heads/main/technical-patterns/platform-api-patterns.md)
- [NEW_FILE_NAME](https://raw.githubusercontent.com/TonyBarkell/here-core-ai-references/refs/heads/main/technical-patterns/NEW_FILE_NAME.md)
```

**When adding files to code-templates/:**
```markdown
### Code Templates
- [Script Generation Guidelines](https://raw.githubusercontent.com/TonyBarkell/here-core-ai-references/refs/heads/main/code-templates/script-generation-guidelines.md)
- [NEW_FILE_NAME](https://raw.githubusercontent.com/TonyBarkell/here-core-ai-references/refs/heads/main/code-templates/NEW_FILE_NAME.md)
```

### File-Specific Merge Strategies (Enhanced)

#### README.md Files (SECTION-BASED MERGE)
- **Strategy**: Update specific sections while preserving all existing links
- **Preservation**: Maintain complete Quick Access Links structure
- **Validation**: Verify all existing links remain functional
- **Integration**: Add new links in appropriate sections

#### Learning Log Files (APPEND-ONLY)
- **Strategy**: Insert new entries before template section
- **Preservation**: Keep ALL existing documented patterns
- **Validation**: Verify no existing entries were removed

#### Guidelines Files (SECTION-BASED)
- **Strategy**: Update specific sections while preserving others
- **Preservation**: Maintain all existing rules and patterns
- **Validation**: Check that all documented errors remain

## Standard Workflow Phases (Enhanced)

### Phase 1: Learning Detection
When AI discovers new patterns during reproduction work:

```markdown
**Learning Detected:** [PATTERN_NAME]
**Context:** [REPRODUCTION_SCENARIO]
**Script Generation Required:** [YES/NO]
**Error Discovery:** [YES/NO]
**Content Loss Risk:** [YES/NO]
**README Integration Required:** [YES/NO - NEW]

**MANDATORY README Integration Check:**
- ✅ Identify new/moved files requiring Quick Access Links
- ✅ Plan README section updates for new file categories
- ✅ Validate raw URL format for new files
- ✅ Update standard prompts to reference new files
- ✅ Test AI accessibility after README updates

**If README Integration Required - MANDATORY:**
- Update Quick Access Links section with new file URLs
- Preserve all existing README structure and links
- Validate raw.githubusercontent.com URL format
- Test that AI can access new files via updated links
- Update standard prompts to include new reference files
```

### Phase 2: Agreement and Validation
User confirms update request including:
- Content preservation approach
- Merge strategy selection
- Content integrity validation plan
- **NEW**: README integration requirements

### Phase 3: Automated File Generation with README Integration
**MANDATORY Script Generation Standards:**

```javascript
// ✅ CORRECT PATTERN - README integration included
const updateRepositoryWithReadmeIntegration = (newFiles) => {
    // MANDATORY: Read existing README content first
    const existingReadme = fs.readFileSync("README.md", "utf8");
    
    // Update Quick Access Links section
    const updatedReadme = updateQuickAccessLinks(existingReadme, newFiles);
    
    // Validate all links are properly formatted
    validateReadmeLinks(updatedReadme);
    
    // Safe README update
    fs.writeFileSync("README.md", updatedReadme);
};

// ❌ NEVER DO THIS - Missing README integration
// fs.writeFileSync(filePath, newContent);  // Files not accessible to AI!
```

## Enhanced Quality Assurance with README Integration

Before repository updates:

- ✅ All customer data sanitized
- ✅ Platform API patterns validated
- ✅ **MANDATORY**: Script generation follows coding standards
- ✅ **MANDATORY**: Syntax validation completed
- ✅ **MANDATORY**: Error-driven learning applied if errors discovered
- ✅ **MANDATORY**: Quote escaping handled safely
- ✅ **MANDATORY**: Template literal conflicts avoided
- ✅ **MANDATORY**: Content preservation strategy implemented
- ✅ **MANDATORY**: Existing valuable content validated as preserved
- ✅ **MANDATORY**: Merge strategy appropriate for file type
- ✅ **MANDATORY**: Content integrity validated before and after updates
- ✅ **NEW**: README Quick Access Links updated for new/moved files
- ✅ **NEW**: Raw GitHub URLs validated and tested
- ✅ **NEW**: AI accessibility confirmed for all new files

## Repository Safety Protocols (Enhanced)

### README Integration Requirements
1. **Always update README** when adding or moving files
2. **Validate raw URL format** for all new Quick Access Links
3. **Test AI accessibility** - confirm files can be fetched via raw URLs
4. **Update standard prompts** to reference new files where appropriate
5. **Preserve existing README structure** and all current links

### Content Loss Prevention
1. **Never use simple file replacement** for existing files with valuable content
2. **Always read existing content** before any file update
3. **Use appropriate merge strategies** based on file type and content
4. **Validate content integrity** before and after all updates
5. **Document all content changes** in commit messages
6. **NEW**: Ensure README integration doesn't break existing links

### Recovery Procedures
If content loss or README integration issues are detected:
1. **STOP all further updates** immediately
2. **Check Git history** for previous file versions
3. **Restore lost content** from Git history
4. **Fix broken README links** using Git history
5. **Analyze root cause** of content loss or integration failure
6. **Update preservation guidelines** to prevent recurrence
7. **Regenerate update** using proper content preservation and README integration

---

**Last Updated:** 19/07/2025
**Process Status:** Active with enhanced README integration and content preservation
**Error Prevention:** Template literal, quote escaping, content loss, and README integration patterns documented
**Content Protection:** Comprehensive preservation system with README management for AI accessibility