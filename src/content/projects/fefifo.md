---
title: Fefifo - Agri-Tech Offline-First Platform
description: 30-module offline-first agri-tech platform for field workers with low/no connectivity
tech: ['Koa.js', 'ArangoDB', 'PouchDB', 'CouchDB', 'React Native', 'React', 'Ant Design', 'MongoDB', 'AWS', 'Microservices']
featured: true
date: 2021-06-01
image: /images/projects/fefifo.png
---

## Overview

Fefifo is a large-scale agri-tech platform built for farmers and field workers to manage harvest cycles, crops, worker operations, and farm data — even in areas with little to no internet connectivity.

## Key Features

- **Offline-First Mobile App**: React Native (Expo) app with PouchDB/CouchDB sync for seamless offline operation
- **30+ Modules**: Harvest tracking, per-crop management, worker salary, notifications, and more
- **Backoffice**: React + Ant Design admin panel for operators, admins, and worker management
- **Microservices Backend**: Koa.js services with ArangoDB for complex relational agri-data
- **Private npm Package**: Shared code library across backend and mobile for consistency

## Technical Details

- Built and maintained Koa.js backend APIs across 30+ modules
- Designed ArangoDB schemas for new modules as requirements evolved
- Maintained a private npm package — versioning, publishing, and EC2 deployment
- PouchDB ↔ CouchDB sync architecture for offline data consistency
- MongoDB used for logs; AWS EC2 + S3 for hosting and file storage
- Daily client-facing standups with direct requirement clarification