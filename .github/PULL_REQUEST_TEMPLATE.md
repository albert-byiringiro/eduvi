---
name: Eduvi PR
about: Standard template for all pull requests
title: "[TYPE][MODULE] Brief description"
labels: ''
assignees: ''

---

### 🔗 Connected Issues
<!-- Replace with your issue links -->
- Resolves #123 
- Related to #456

### 📝 Description
<!-- 1-2 sentences about what this does -->

### ✅ Checklist
#### For All PRs
- [ ] Tests passing (`npm test`)
- [ ] Documentation updated
- [ ] No console.log left behind

#### For Features
- [ ] Feature flagged (if needed)
- [ ] API documented in Swagger

#### For Database Changes
- [ ] Migration rollback tested
- [ ] Indexes added for new queries

### 🧪 Testing Steps
1. Checkout this branch
2. Run `npm run dev`
3. Verify:
   - [ ] Test case 1
   - [ ] Test case 2

### 📸 Screenshots/Logs
<!-- For UI changes or error fixes -->
| Before | After |
|--------|-------|
| <img width="300" src="..."> | <img width="300" src="..."> |
