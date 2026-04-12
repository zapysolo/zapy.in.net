export const blogPosts = [
  {
    slug: 'astro-intro',
    title: 'Getting Started with Astro - A Modern Web Framework',
    description: 'Learn how to build fast, content-focused websites with Astro',
    date: new Date('2024-01-15'),
    tags: ['astro', 'web-development', 'javascript'],
    content: `
## Introduction to Astro

Astro is a modern web framework that's changing how we think about web development. It brings together the best of static site generation and dynamic applications.

### What Makes Astro Special?

**1. Ship Less JavaScript**
Astro sends only the HTML and CSS needed to render your page, with zero JavaScript by default. This results in faster page loads and better performance.

**2. Component Framework Agnostic**
Mix and match components from React, Vue, Svelte, and more in the same project. Each component gets the right tool for the job.

**3. Built for Content**
With file-based routing and content collections, Astro is perfect for blogs, documentation sites, and content-heavy applications.

Learn more at [astro.build](https://astro.build)
    `
  },
  {
    slug: 'react-state-management',
    title: 'React State Management Best Practices',
    description: 'Explore modern approaches to managing state in React applications',
    date: new Date('2024-01-20'),
    tags: ['react', 'state-management', 'javascript'],
    content: `
## Managing State in React

State management is one of the most critical aspects of building React applications. Let's explore best practices and modern approaches.

### Evolution of State Management

- Initial: Props drilling and component state
- 2015-2017: Redux dominance
- 2018-2019: Context API improvements
- 2020-Present: Community solutions and hooks

### Best Practices

1. **Start Simple**: Use useState for most cases
2. **Avoid Deep Nesting**: Keep component hierarchy flat
3. **Separate Concerns**: Keep UI and business logic apart
4. **Optimize Re-renders**: Use memo and useMemo
5. **Test State Logic**: Test your reducers and selectors
    `
  },
  {
    slug: 'web-performance',
    title: 'Web Performance Optimization Tips',
    description: 'Essential techniques to improve your website\'s performance',
    date: new Date('2024-02-01'),
    tags: ['performance', 'web-development', 'optimization'],
    content: `
## Optimizing Web Performance

Performance is a feature. Users expect fast websites, and slow sites lose visitors.

### Core Web Vitals

Google's Core Web Vitals measure user experience:

1. **Largest Contentful Paint (LCP)** - Target: < 2.5 seconds
2. **First Input Delay (FID)** - Target: < 100ms
3. **Cumulative Layout Shift (CLS)** - Target: < 0.1

### Image Optimization

Images often account for 50%+ of page weight:
- Use modern formats (WebP, AVIF)
- Implement responsive images
- Use lazy loading
- Compress aggressively
    `
  },
  {
    slug: 'nodejs-security',
    title: 'Node.js Security Best Practices',
    description: 'Secure your Node.js applications with these essential practices',
    date: new Date('2024-02-10'),
    tags: ['nodejs', 'security', 'backend'],
    content: `
## Securing Node.js Applications

Security isn't optional - it's mandatory. Let's explore essential practices for hardening Node.js applications.

### OWASP Top 10 Vulnerabilities

1. **Injection** - SQL, NoSQL, Command
2. **Broken Authentication** - Weak passwords, session issues
3. **Sensitive Data Exposure** - Unencrypted data, exposed keys
4. **XML External Entities (XXE)**
5. **Broken Access Control**

### Essential Security Packages

- helmet: Secure HTTP headers
- bcrypt: Password hashing
- jsonwebtoken: JWT tokens
- dotenv: Environment variables
    `
  },
  {
    slug: 'git-workflows',
    title: 'Version Control with Git - Advanced Workflows',
    description: 'Master advanced Git workflows and collaboration strategies',
    date: new Date('2024-02-15'),
    tags: ['git', 'workflow', 'collaboration'],
    content: `
## Git Workflows for Teams

Git is more than just version control - it's the foundation of team collaboration.

### Common Git Workflows

**1. Feature Branch Workflow**
Best for: Small to medium teams

**2. Gitflow**
Best for: Large teams with scheduled releases

**3. Trunk-Based Development**
Best for: Continuous deployment teams

### Branching Strategy

Naming Conventions:
- feature/user-authentication
- bugfix/login-error
- hotfix/critical-crash
- release/v1.0.0

### Pull Request Best Practices

Good PR titles:
- feat: Add two-factor authentication
- fix: Resolve memory leak in cache
- docs: Update README with install instructions
    `
  }
];
