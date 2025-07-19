# Terminology Clarification Guide

## Common Customer Terminology Confusion

### Views vs Windows
**Customer Says:** "Multiple views"
**Default Assumption:** Views within the same window (Golden Layout style)
**Clarification Required:** Always confirm if they mean:
- Views within one window (most common)
- Separate windows each containing views
- Mix of both patterns

**Customer Says:** "Multiple windows"
**Default Assumption:** Separate windows, each potentially containing multiple views
**Clarification Required:** Confirm:
- Each window content structure
- Inter-window communication requirements
- Window management expectations

### Platform API Terminology
**Customer Says:** "Platform"
**Could Mean:**
- HERE® Core Container runtime
- Platform API for window/view management
- Custom platform provider
**Always Clarify:** Which platform component they're referring to

### Application vs View Terminology
**Customer Says:** "Application"
**Could Mean:**
- Entire HERE® Core Container application
- Individual view within a window
- Separate application in the runtime
**Always Clarify:** Scope and boundaries of what they call "application"

## Mandatory Clarification Questions

### Before Creating Any Sample:
1. **"When you say \"multiple views\", do you mean views within the same window or separate windows?"**
2. **"Are you using a custom platform provider or the default provider?"**
3. **"What should the user see and interact with in this reproduction?"**
4. **"Which APIs are you expecting to use: Platform, Application, Interop, or System?"**

### For Complex Scenarios:
5. **"Should this demonstrate the problem or the expected solution?"**
6. **"What specific behavior should I reproduce vs what should work correctly?"**
7. **"Are there any customer-specific configurations I should avoid?"**

**Last Updated**: 19/07/2025
**Purpose**: Prevent costly misconceptions in sample creation
