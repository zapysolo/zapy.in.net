---
title: Version Control with Git - Advanced Workflows
description: Master advanced Git workflows and collaboration strategies
date: 2024-02-15
tags: ['git', 'workflow', 'collaboration']
draft: false
image: /images/blog/git-workflow.png
---

## Git Workflows for Teams

Git is more than just version control - it's the foundation of team collaboration. Let's explore advanced workflows that scale.

### Common Git Workflows

**1. Feature Branch Workflow**
Best for: Small to medium teams

```bash
git checkout -b feature/new-feature
# Make changes
git commit -m "Add new feature"
git push origin feature/new-feature
# Create Pull Request
```

**2. Gitflow**
Best for: Large teams with scheduled releases

```
main (production)
  ├── release/v1.0
  └── hotfix/critical-bug
develop (staging)
  ├── feature/feature-1
  ├── feature/feature-2
  └── feature/feature-3
```

**3. Trunk-Based Development**
Best for: Continuous deployment teams

- Work on `main` branch
- Short-lived feature branches (< 1 day)
- Feature flags for incomplete features
- Heavy testing and CI/CD

### Branching Strategy

**Naming Conventions**
```
feature/user-authentication
bugfix/login-error
hotfix/critical-crash
release/v1.2.0
chore/update-dependencies
docs/api-documentation
```

**Branch Rules**
- Never push directly to main
- Require code reviews (2+ reviewers)
- All checks must pass before merge
- Delete branch after merge

### Pull Request Best Practices

**Good PR Title**
```
feat: Add two-factor authentication
fix: Resolve memory leak in cache
docs: Update README with install instructions
```

**PR Description Template**
```markdown
## Description
Brief description of changes

## Related Issue
Fixes #123

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation

## Testing
- [ ] Unit tests added
- [ ] Integration tests passed
- [ ] Manual testing completed

## Checklist
- [ ] Code follows style guide
- [ ] Self-review completed
- [ ] Comments added for complex logic
```

### Merge Strategies

**1. Merge Commit**
Preserves full history, creates merge commit

**2. Squash & Merge**
Combines all commits into one, cleaner history

**3. Rebase & Merge**
Linear history, no merge commits

### Handling Conflicts

```bash
# Identify conflicts
git status

# Edit conflicted files
# Mark as resolved
git add .

# Complete merge/rebase
git commit
```

### Advanced Git Commands

**Interactive Rebase**
```bash
git rebase -i HEAD~3  # Rebase last 3 commits
# Pick, squash, reorder commits
```

**Cherry Pick**
```bash
git cherry-pick abc123  # Apply specific commit
```

**Git Bisect**
```bash
git bisect start
# Find which commit introduced bug
```

### Team Collaboration Rules

1. **Commit Frequently**: Small, logical commits
2. **Write Clear Messages**: Explain the why
3. **Review Code**: Thoughtful, constructive feedback
4. **Automate Testing**: Don't rely on manual testing
5. **Keep Main Stable**: Main branch is always deployable
6. **Communicate**: Discuss decisions in PRs

### Useful Git Aliases

```bash
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.st status
git config --global alias.unstage 'reset HEAD --'
git config --global alias.last 'log -1 HEAD'
git config --global alias.visual 'log --graph --oneline --all'
```

### Tools & Integrations

- **GitHub**: Web-based Git hosting
- **GitLab**: Open-source alternative
- **Bitbucket**: Atlassian solution
- **Husky**: Git hooks automation
- **Conventional Commits**: Standardized commit format

### Troubleshooting Common Issues

**Accidentally committed to main**
```bash
git reset --soft HEAD~1
git stash
git checkout -b feature/new-feature
git stash pop
```

**Need to revert a commit**
```bash
git revert abc123  # Creates new revert commit
```

**Lost a commit**
```bash
git reflog  # Find lost commits
git reset --hard <commit-hash>
```

### Conclusion

Mastering Git workflows is essential for effective team collaboration. Choose a workflow that matches your team's needs, establish clear rules, and use tooling to enforce standards. Happy coding!
