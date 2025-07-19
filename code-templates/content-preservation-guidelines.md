# Content Preservation Guidelines - Repository Update Safety

## Overview
This document establishes mandatory guidelines for preserving valuable content during repository updates AND ensuring proper README integration for AI accessibility. These rules prevent accidental deletion of important information and ensure repository integrity with complete AI access to all files.

## Critical Content Preservation Rules

### Rule 1: NEVER Replace - Always Merge
```javascript
// ❌ DANGEROUS - Overwrites existing content
// fs.writeFileSync(filePath, newContent);

// ✅ SAFE - Preserves existing content
const existingContent = fs.readFileSync(filePath, "utf8");
const mergedContent = mergeContent(existingContent, newContent);
fs.writeFileSync(filePath, mergedContent);
```

### Rule 2: Read Before Write
**MANDATORY for ALL file updates:**
1. **Read existing file content** first
2. **Identify valuable existing entries** to preserve
3. **Plan merge strategy** for new content
4. **Validate content integrity** after merge

### Rule 3: README Integration (NEW)
**MANDATORY for ALL new or moved files:**
1. **Update Quick Access Links** in README.md
2. **Validate raw URL format** for GitHub accessibility
3. **Test AI accessibility** via raw URLs
4. **Update standard prompts** to reference new files
5. **Preserve existing README structure** and links

### Rule 4: File-Specific Preservation Strategies

#### README.md Files (SECTION-BASED MERGE WITH LINK PRESERVATION)
```javascript
const updateReadmeWithNewFiles = (newFiles) => {
    const existingReadme = fs.readFileSync("README.md", "utf8");
    
    // Find Quick Access Links section
    const quickAccessStart = existingReadme.indexOf("## Quick Access Links for AI Assistance");
    
    // Update specific subsections while preserving others
    const updatedReadme = updateQuickAccessSection(existingReadme, newFiles);
    
    // Validate all existing links are preserved
    validateExistingLinks(existingReadme, updatedReadme);
    
    return updatedReadme;
};
```

#### Learning Log Files (APPEND-ONLY)
```javascript
const addLearningEntry = (newEntry) => {
    const existingLog = fs.readFileSync("learning-log-template.md", "utf8");
    
    // Find insertion point (before Entry Template section)
    const insertionPoint = existingLog.indexOf("### Entry Template:");
    
    // Insert new entry while preserving all existing content
    const updatedLog = existingLog.slice(0, insertionPoint) + 
                      newEntry + "\n---\n\n" + 
                      existingLog.slice(insertionPoint);
    
    fs.writeFileSync("learning-log-template.md", updatedLog);
};
```

#### Guidelines Files (SECTION-BASED MERGE)
```javascript
const updateGuidelinesSection = (filePath, sectionName, newContent) => {
    const existingContent = fs.readFileSync(filePath, "utf8");
    
    // Find section boundaries
    const sectionStart = existingContent.indexOf(`## ${sectionName}`);
    const nextSectionStart = existingContent.indexOf("## ", sectionStart + 1);
    
    // Replace only the specific section
    const before = existingContent.slice(0, sectionStart);
    const after = nextSectionStart > -1 ? existingContent.slice(nextSectionStart) : "";
    
    return before + newContent + after;
};
```

## README Integration Validation Checklist

### Before Adding New Files:
- ✅ **Plan README updates** for new file categories
- ✅ **Identify appropriate section** in Quick Access Links
- ✅ **Prepare raw URL format** following existing pattern
- ✅ **Check for section reorganization** needs

### During File Updates:
- ✅ **Create/update files** using content preservation patterns
- ✅ **Update README Quick Access Links** simultaneously
- ✅ **Preserve all existing README content** and structure
- ✅ **Validate raw URL format** matches existing pattern

### After Updates:
- ✅ **Test AI accessibility** - fetch new files via raw URLs
- ✅ **Validate all existing links** still work
- ✅ **Check README structure integrity** - no broken formatting
- ✅ **Update standard prompts** to reference new files if needed

## Enhanced Error-Driven Learning Integration

### Enhanced Learning Detection Template
```markdown
🔍 **Learning Opportunity Detected**

**MANDATORY Content Preservation Check:**
- ✅ Read existing file content before updating
- ✅ Identify valuable existing entries to preserve
- ✅ Use append/merge approach, not replacement
- ✅ Validate content integrity after update
- ✅ Check for accidental deletions

**MANDATORY README Integration Check:**
- ✅ Update Quick Access Links for new/moved files
- ✅ Validate raw URL format and accessibility
- ✅ Preserve all existing README structure
- ✅ Test AI can access all files via updated links
- ✅ Update standard prompts if new references needed

**Files to Update (PRESERVE EXISTING CONTENT + README INTEGRATION):**
- [LIST_FILES_WITH_SPECIFIC_MERGE_STRATEGY]
- README.md [UPDATE_QUICK_ACCESS_LINKS_SECTION]

**Merge Strategy:**
- Learning Log: Append new entries before template section
- Guidelines: Update specific sections only
- README: Section-based merge preserving all existing links + add new ones
- Workflow: Section-based updates maintaining all steps
```

## Repository Safety Protocols (Enhanced)

### Content Loss Prevention
1. **Never use simple file replacement** for existing files
2. **Always validate content before and after** updates
3. **Use file-specific merge strategies** based on content type
4. **Test merge logic** before applying to repository
5. **Document all content changes** in commit messages
6. **NEW**: Validate README integration doesn't break existing functionality

### README Integration Protection
1. **Never overwrite entire README** - use section-based updates
2. **Always preserve existing Quick Access Links** structure
3. **Validate all raw URLs** before committing changes
4. **Test AI accessibility** for all referenced files
5. **Maintain consistent URL format** across all links
6. **Update standard prompts** when adding new reference files

### Recovery Procedures
If content loss or README integration issues are detected:
1. **Stop further updates** immediately
2. **Check Git history** for previous file versions
3. **Restore lost content** from Git history
4. **Fix broken README links** using previous working version
5. **Identify root cause** of content loss or integration failure
6. **Update preservation guidelines** to prevent recurrence
7. **Regenerate corrected update** using proper merge approach with README integration

---

**Last Updated:** 19/07/2025
**Purpose:** Prevent content loss during repository updates AND ensure AI accessibility
**Integration:** MANDATORY reference for all repository update workflows
**Status:** Active content preservation system with comprehensive README management