

## Fix: Popup card alternates sides based on node position

### Problem
The desktop popup card always appears to the right of the node (`left-full`), overlapping the path when the node zigzags right. It should appear on the **opposite side** of the path direction.

### Solution

**File: `src/components/courses/LearningPath.tsx`**

1. **Pass the node index to `ModulePopup`** — add an `index: number` prop
2. **Alternate popup position on desktop**:
   - When `index % 2 === 0` (node is left / `-translate-x-16`), the path goes right → show popup on the **left** (`right-full mr-6`)
   - When `index % 2 !== 0` (node is right / `translate-x-16`), the path goes left → show popup on the **right** (`left-full ml-6`)

### Changes

In `ModulePopup`, replace the fixed desktop positioning:
```tsx
// Before (always right)
<div className="hidden md:block absolute left-full top-1/2 -translate-y-1/2 ml-6 z-50 w-72">

// After (alternates based on index)
<div className={`hidden md:block absolute top-1/2 -translate-y-1/2 z-50 w-72 ${
  index % 2 === 0 ? 'right-full mr-6' : 'left-full ml-6'
}`}>
```

This ensures the card appears on the empty side, never overlapping the path connectors.

