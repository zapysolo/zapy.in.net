---
title: SportsBuzz - Live Sports Scoring Platform
description: Real-time horizontally scalable sports score platform with WebSocket and Redis Pub/Sub
tech: ['Node.js', 'Express', 'Socket.io', 'Redis', 'MongoDB', 'AWS']
featured: true
date: 2022-10-01
image: /images/projects/sportsbuzz.png
---

## Overview

SportsBuzz is a real-time sports scoring platform delivering live score updates to thousands of concurrent users during sporting events.

## Key Features

- **Real-Time Updates**: WebSocket architecture using Socket.io for live score delivery
- **Horizontally Scalable**: Redis Pub/Sub enables scaling across multiple server instances
- **High Concurrency**: System architected to handle up to 1M concurrent users
- **AWS Hosted**: Deployed and monitored on AWS infrastructure

## Technical Details

- Co-designed and implemented Redis Pub/Sub architecture for event-driven score broadcasting
- Built Express + Node.js backend with Socket.io for persistent client connections
- MongoDB for data storage; AWS for hosting and scaling
- Mentored 2 junior engineers — assigned scoped tasks and reviewed contributions