---
title: Goldman City - Email & WhatsApp Notifier
description: Automated notification system for Gmail and WhatsApp
tech: ['Node.js', 'Gmail API', 'WhatsApp API', 'Express']
github: https://github.com/nikpatil2123/gmail-whatsapp-notifier
featured: false
date: 2023-03-10
image: /images/projects/goldman-city.png
---

## Overview

Goldman City is an intelligent automation tool that monitors your Gmail inbox and sends customized notifications via WhatsApp, keeping you updated without constant email checking.

### Key Features

- **Gmail Integration**: Seamless Gmail API integration
- **Smart Filtering**: Customizable rules and filters
- **WhatsApp Notifications**: Instant alerts to your phone
- **Multi-account Support**: Handle multiple Gmail accounts
- **Scheduling**: Set notification preferences by time

### Architecture

- Node.js backend for server operations
- Gmail API for email monitoring
- WhatsApp Business API for notifications
- Express.js for REST endpoints
- MongoDB for configuration storage

### Use Cases

- Critical email alerts for businesses
- Important notification filtering
- Automated customer support responses
- Integration with existing workflows

### Technical Challenges Solved

- OAuth2 authentication for Gmail
- API rate limiting handling
- Message queue implementation
- Error recovery mechanisms
