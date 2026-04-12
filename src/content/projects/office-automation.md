---
title: Office Automation - Account & Transaction Management
description: Internal platform managing account creation, transaction reconciliation, and bonus allocation across 6 offices
tech: ['Node.js', 'Express', 'PostgreSQL', 'Knex', 'Puppeteer', 'React', 'Next.js', 'Tailwind', 'SQS', 'MongoDB', 'AWS']
featured: true
date: 2023-03-01
image: /images/projects/office-automation.png
---

## Overview

A large-scale internal platform handling account creation, transaction reconciliation, bonus allocation, and reporting across 6 offices with multiple sub-branches each.

## Key Features

- **RPA Automation**: Puppeteer workflows to automate account creation and data extraction from third-party websites
- **Transaction Management**: Reconciliation and tracking of 75,000+ transactions
- **Multi-Office Support**: Database designed and maintained across 6 offices with sub-branches
- **Dual Frontend**: React backoffice for internal use + Next.js/Tailwind client-facing mobile website
- **Async Processing**: SQS queues and third-party webhooks for payment confirmations and balance updates

## Technical Details

- Built v2 from scratch, improving on the original architecture
- Resolved critical DB performance issues via indexing, read/write query separation, query optimisation, and fixing unclosed Knex transactions
- Integrated SQS for reliable async transaction processing
- EC2 deployment with PM2 process management and MongoDB for logs