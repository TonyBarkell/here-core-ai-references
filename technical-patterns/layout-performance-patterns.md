# Layout Performance Patterns - Multiple View Optimization

## Overview
When creating reproduction samples that require multiple views, choosing the right approach significantly impacts performance. This document outlines the key patterns for optimal multiple view creation.

## Performance Comparison: Sequential vs Layout Restore

### ❌ Sequential View Creation (Slower)
**Use Case**: When views need different individual configurations
**Performance**: Each view created individually with separate API calls
**Code Pattern:**
```javascript
// Sequential creation - slower for multiple views
const views = [];
for (let i = 0; i < viewCount; i++) {
    const view = await fin.Platform.createView({
        name: `view-${i}`,
        url: `http://localhost:3000/view${i}.html`,
        target: { name: windowName }
    });
    views.push(view);
    console.log(`View ${i} created at: ${Date.now()}`);
}
```

### ✅ User-Selectable Creation Method (Flexible)
**Use Case**: When both methods could be valid or user wants to compare
**Performance**: User can test and compare both approaches
**Code Pattern:**
```html
<!-- HTML UI for method selection -->
<div class="creation-controls">
    <h3>View Creation Method</h3>
    <button id="sequential-btn">Sequential Creation</button>
    <button id="layout-btn">Layout Restore</button>
    <div id="timing-display"></div>
</div>
```

```javascript
// User-selectable creation methods with timing comparison
document.getElementById('sequential-btn').addEventListener('click', async () => {
    const startTime = performance.now();
    await createViewsSequentially();
    const duration = performance.now() - startTime;
    displayResult('Sequential', duration);
});

document.getElementById('layout-btn').addEventListener('click', async () => {
    const startTime = performance.now();
    await createViewsViaLayout();
    const duration = performance.now() - startTime;
    displayResult('Layout Restore', duration);
});

const createViewsSequentially = async () => {
    for (let i = 0; i < 5; i++) {
        await fin.Platform.createView({
            name: `sequential-view-${i}`,
            url: 'http://localhost:3000/test.html',
            target: { name: windowName }
        });
    }
};

const createViewsViaLayout = async () => {
    const multiViewLayout = {
        content: [{
            type: 'stack',
            content: [
                { type: 'component', componentName: 'view', 
                  componentState: { name: 'layout-view-1', url: 'http://localhost:3000/test.html' } },
                { type: 'component', componentName: 'view', 
                  componentState: { name: 'layout-view-2', url: 'http://localhost:3000/test.html' } },
                { type: 'component', componentName: 'view', 
                  componentState: { name: 'layout-view-3', url: 'http://localhost:3000/test.html' } },
                { type: 'component', componentName: 'view', 
                  componentState: { name: 'layout-view-4', url: 'http://localhost:3000/test.html' } },
                { type: 'component', componentName: 'view', 
                  componentState: { name: 'layout-view-5', url: 'http://localhost:3000/test.html' } }
            ]
        }]
    };
    
    const layout = fin.Platform.Layout.wrapSync(windowIdentity);
    await layout.replace(multiViewLayout);
};

const displayResult = (method, duration) => {
    const display = document.getElementById('timing-display');
    display.innerHTML += `<p>${method}: ${duration.toFixed(2)}ms</p>`;
};
```

## Advanced Layout Patterns

### Grid Layout for Performance Testing
```javascript
// Grid layout preset for systematic performance testing
const layout = fin.Platform.Layout.wrapSync(windowIdentity);
await layout.applyPreset({ 
    presetType: 'grid',
    options: {
        views: [
            { name: 'test-view-1', url: 'http://localhost:3000/test.html' },
            { name: 'test-view-2', url: 'http://localhost:3000/test.html' },
            { name: 'test-view-3', url: 'http://localhost:3000/test.html' },
            { name: 'test-view-4', url: 'http://localhost:3000/test.html' }
        ]
    }
});
```

### Dynamic Layout Generation
```javascript
// Generate layout with configurable view count
const generatePerformanceLayout = (viewCount, baseUrl) => {
    const views = [];
    
    for (let i = 0; i < viewCount; i++) {
        views.push({
            type: 'component',
            componentName: 'view',
            componentState: {
                name: `perf-view-${i}`,
                url: `${baseUrl}/test${i}.html`
            }
        });
    }
    
    return {
        content: [{
            type: 'stack',
            content: views
        }]
    };
};

// Usage for performance testing
const testLayout = generatePerformanceLayout(10, 'http://localhost:3000');
await layout.replace(testLayout);
```

## Layout Capture for Reuse

### Capturing Current Layout Configuration
```javascript
// Capture current layout for reuse in reproduction samples
const captureLayoutForReproduction = async () => {
    const layout = await fin.Platform.Layout.getCurrent();
    const layoutConfig = await layout.getConfig();
    
    // Save for reproduction sample
    console.log('Layout configuration:');
    console.log(JSON.stringify(layoutConfig, null, 2));
    
    return layoutConfig;
};
```

## Decision Matrix: When to Use Each Approach

| Scenario | Recommended Approach | Reason |
|----------|---------------------|--------|
| **Performance testing multiple views** | Layout Restore OR User Choice | Simultaneous creation, accurate timing |
| **Views with identical content** | Layout Restore OR User Choice | Efficient, consistent setup |
| **Testing view opening times** | User Choice with both options | Let user compare methods |
| **Views with different URLs/configs** | Sequential Creation | Individual customization needed |
| **User interaction testing** | Sequential Creation | Control timing between creations |
| **Memory usage testing** | Layout Restore OR User Choice | Realistic simultaneous load |
| **Method comparison needed** | User-Selectable UI | Side-by-side performance testing |
| **Uncertain which is better** | Ask Prompter | Get clarification on requirements |

## AI Decision Guidelines for Reproduction Samples

### When to Ask the Prompter:
- **Ambiguous requirements**: "Create multiple views" without clear performance intent
- **Mixed scenarios**: Could benefit from either approach
- **Testing focus unclear**: Not sure if timing, functionality, or comparison is the goal
- **User research**: Customer wants to understand the differences

### Prompter Clarification Questions:
```
"I can create this sample using either:
1. Layout Restore (faster, simultaneous view creation)
2. Sequential Creation (individual control, slower)
3. User-selectable buttons (let end-user choose and compare)

Which approach would be most helpful for your use case?"
```

### When to Default to User-Selectable:
- **Performance comparison needed**
- **Educational/demonstration purposes**
- **Customer wants to test both methods**
- **Reproducing timing-related issues**

## Performance Measurement Patterns

### Timing Layout Operations
```javascript
const measureLayoutPerformance = async (layoutConfig) => {
    const startTime = performance.now();
    
    const layout = fin.Platform.Layout.wrapSync(windowIdentity);
    await layout.replace(layoutConfig);
    
    const endTime = performance.now();
    const duration = endTime - startTime;
    
    console.log(`Layout applied in ${duration.toFixed(2)}ms`);
    return duration;
};
```

### Memory Impact Assessment
```javascript
const assessMemoryImpact = async (layoutConfig) => {
    // Measure before
    const beforeMemory = await fin.System.getProcessList();
    
    // Apply layout
    const layout = fin.Platform.Layout.wrapSync(windowIdentity);
    await layout.replace(layoutConfig);
    
    // Wait for stabilization
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Measure after
    const afterMemory = await fin.System.getProcessList();
    
    console.log('Memory impact:', {
        before: beforeMemory,
        after: afterMemory
    });
};
```

## Troubleshooting Layout Issues

### Common Layout Problems
1. **Views not appearing**: Check componentState configuration
2. **Performance slower than expected**: Verify using layout restore vs sequential
3. **Layout not applying**: Ensure fin.Platform.Layout.init() called for custom platforms
4. **Memory leaks**: Check view cleanup when replacing layouts

### Debugging Layout Operations
```javascript
const debugLayoutOperation = async (layoutConfig) => {
    try {
        console.log('Applying layout:', layoutConfig);
        
        const layout = fin.Platform.Layout.wrapSync(windowIdentity);
        await layout.replace(layoutConfig);
        
        // Verify layout applied
        const currentConfig = await layout.getConfig();
        console.log('Layout applied successfully:', currentConfig);
        
    } catch (error) {
        console.error('Layout operation failed:', error);
        console.error('Failed layout config:', layoutConfig);
    }
};
```

---

**Last Updated**: 19/07/2025
**Purpose**: Optimize multiple view creation performance in reproduction samples
**Documentation**: https://resources.here.io/docs/core/container/layouts/save-layouts
**Integration**: Reference for performance testing and multiple view scenarios