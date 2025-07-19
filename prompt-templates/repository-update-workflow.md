# Repository Update Workflow - AI-Driven Learning System

## Overview
This document captures the automated learning and repository update process for HERE® Core Container reproduction samples. This workflow enables continuous improvement of prompts and patterns based on real reproduction work.

## Workflow Phases

### Phase 1: Learning Detection
**When AI discovers new patterns during reproduction work:**

```markdown
**Learning Detected:** [PATTERN_NAME]
**Context:** [REPRODUCTION_SCENARIO]
**Technical Pattern:** [SPECIFIC_API_USAGE_OR_CONFIGURATION]
**Improvement Opportunity:** [WHAT_SHOULD_BE_UPDATED]

**Recommendation:** Update repository with this learning?
**Files to Update:**
- [LIST_SPECIFIC_FILES]
- [README.md for new direct URLs]

**Learning Log Entry:**
### [DATE] - [PATTERN_NAME]
**API Focus:** [PRIMARY_API]
**Issue Pattern:** [TECHNICAL_DESCRIPTION]
**Solution Pattern:** [HOW_RESOLVED]
**Code Pattern:** [KEY_CODE_STRUCTURE]
**Reusability:** [APPLICATION_TO_SIMILAR_ISSUES]
**Reference Added:** [UPDATED_REFERENCE_FILE]
```

### Phase 2: Agreement and Validation
**User confirms the update request:**

1. **Review Recommendation:** User evaluates the proposed changes
2. **Confirm Update Scope:** Agree on which files need updates
3. **Validate Learning Entry:** Ensure pattern is accurately captured
4. **Approve Automation:** Confirm automated repository update

### Phase 3: Automated File Generation
**AI generates Node.js script for local file creation:**

```javascript
// Standard script structure based on git_auth_fixed_script.js
const generateUpdateFiles = () => {
    // Create updated files with new patterns
    // Include README.md with direct URL updates
    // Validate Platform API configurations
    // Generate proper file structure
};

const main = async () => {
    // Generate files locally
    // Setup Git authentication
    // Clone repository
    // Copy updated files  
    // Commit with descriptive message
    // Push changes to GitHub
    // Cleanup temporary files
};
```

### Phase 4: Repository Synchronization
**Automated Git operations:**

1. **Authentication Setup:** Personal Access Token or SSH
2. **Repository Clone:** Fresh clone of current state
3. **File Updates:** Copy generated files to repository
4. **Commit Creation:** Descriptive commit message with learning details
5. **GitHub Push:** Automated push to main branch
6. **README Update:** Direct URLs for any new/moved files

## Integration with Existing Templates

### Enhanced Basic Reproduction Prompt
**Add this section to all reproduction prompts:**

```markdown
**Learning Capture (AUTOMATIC):**
- Monitor for new API patterns during reproduction
- Document any HERE® Core configuration discoveries
- Note debugging approaches that prove effective
- Identify reusable code structures

**Repository Update Trigger:**
If new patterns are discovered, recommend repository updates with:
1. Specific files requiring updates
2. Learning log entry format
3. Node.js automation script for local generation
4. README direct URL updates for accessibility
```

### Learning Log Integration
**Standard learning detection pattern:**

```markdown
🔍 **Learning Opportunity Detected**

**Pattern:** [TECHNICAL_PATTERN_FOUND]
**Context:** [REPRODUCTION_SCENARIO]
**Files to Update:** 
- prompt-templates/[RELEVANT_TEMPLATE].md
- technical-patterns/[RELEVANT_PATTERN].md
- learning-log/learning-log-template.md
- README.md (add direct URLs)

**Proposed Learning Log Entry:**
### [DATE] - [PATTERN_NAME]
**API Focus:** [PRIMARY_API_INVOLVED]
**Issue Pattern:** [TECHNICAL_DESCRIPTION]
**Solution Pattern:** [HOW_RESOLVED]
**Code Pattern:** [KEY_CODE_THAT_WORKED]
**Reusability:** [APPLICATION_TO_SIMILAR_ISSUES]
**Reference Added:** [WHICH_REFERENCE_FILE_UPDATED]

**Generate automated update script?** (Y/N)
```

## Automation Script Template
**When generating update scripts, include:**

1. **File Generation:** Create all updated files locally
2. **README Management:** Automatically add direct URLs for new files
3. **Git Authentication:** Support both PAT and SSH methods
4. **Validation:** Check Platform API configurations
5. **Cleanup:** Remove temporary files after completion

## Quality Assurance
**Before repository updates:**

- ✅ All customer data sanitized
- ✅ Platform API patterns validated (`providerUrl` vs `url`)
- ✅ Direct URLs added to README
- ✅ Learning log entry follows template format
- ✅ Code patterns tested in reproduction context

## Usage Instructions

### For AI Assistants:
1. **Monitor** reproduction work for new patterns
2. **Detect** learning opportunities automatically
3. **Recommend** specific repository updates
4. **Generate** Node.js automation scripts upon agreement
5. **Include** README direct URL updates

### For Support Team:
1. **Review** AI learning recommendations
2. **Validate** proposed pattern updates
3. **Approve** automated repository synchronization
4. **Monitor** GitHub repository for successful updates

## Success Metrics
- **Pattern Reuse:** How often new patterns get applied to future reproductions
- **Update Frequency:** Number of learning-driven repository updates
- **Automation Success:** Percentage of successful automated Git operations
- **Team Adoption:** Usage of updated patterns by support team

---

**Last Updated:** 19/07/2025
**Process Status:** Active - Continuous learning enabled
**Integration:** Embedded in all reproduction workflows