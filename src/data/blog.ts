export const blogPosts = [
  {
    slug: 'offline-first-architecture',
    title: 'Building Offline-First Apps with PouchDB and CouchDB',
    description: 'How we built a React Native app for field workers with zero internet connectivity using PouchDB/CouchDB sync',
    date: new Date('2024-03-01'),
    tags: ['react-native', 'pouchdb', 'couchdb', 'offline-first', 'architecture'],
    content: `
## The Problem

Field workers on the Fefifo agri-tech platform worked in areas with little to no internet connectivity. A standard REST API-based app would be completely unusable in these conditions.

## The Solution: Offline-First Architecture

Instead of building an app that fails gracefully without internet, we built one that works natively offline and syncs when connectivity is restored.

### How PouchDB + CouchDB Sync Works

PouchDB runs inside the React Native app as a local database. CouchDB runs on the server. When connectivity is available, they sync automatically — bidirectionally.

\`\`\`javascript
// Initialize local PouchDB instance
const localDB = new PouchDB('fefifo_local');

// Set up sync with remote CouchDB
const sync = localDB.sync('https://your-couchdb-server/fefifo', {
  live: true,
  retry: true
}).on('change', (info) => {
  console.log('Sync change:', info);
}).on('error', (err) => {
  console.error('Sync error:', err);
});
\`\`\`

### Conflict Resolution

When the same document is edited offline on two devices, CouchDB creates a conflict. We handled this by always preferring the most recent edit based on timestamp.

## Lessons Learned

- Design your data model for sync from day one — retrofitting is painful
- Keep documents small and focused — large documents cause slow syncs
- Always show the user their sync status clearly in the UI
    `
  },
  {
    slug: 'postgresql-performance-75k-transactions',
    title: 'How We Fixed PostgreSQL Performance at 75,000+ Transactions',
    description: 'Real fixes we applied when our PostgreSQL database started slowing down under heavy transactional load',
    date: new Date('2024-04-01'),
    tags: ['postgresql', 'performance', 'backend', 'database'],
    content: `
## The Problem

Our internal platform was processing 75,000+ transactions and queries were taking 10-15 seconds. The app was becoming unusable.

## What We Found

Running \`EXPLAIN ANALYZE\` on slow queries revealed three main issues:

1. Sequential scans on large tables with no indexes
2. Read and write queries competing on the same connection pool
3. Knex transactions left open due to missing \`trx.commit()\` / \`trx.rollback()\` calls

## Fix 1: Indexing

\`\`\`sql
-- Before: sequential scan on 75k rows
SELECT * FROM transactions WHERE user_id = $1 AND status = $2;

-- Add composite index
CREATE INDEX idx_transactions_user_status 
ON transactions(user_id, status);
\`\`\`

## Fix 2: Separate Read and Write Connections

\`\`\`javascript
// Write connection pool
const writePool = knex({
  client: 'pg',
  connection: process.env.DATABASE_WRITE_URL,
  pool: { min: 2, max: 10 }
});

// Read connection pool  
const readPool = knex({
  client: 'pg',
  connection: process.env.DATABASE_READ_URL,
  pool: { min: 2, max: 20 }
});
\`\`\`

## Fix 3: Always Close Knex Transactions

\`\`\`javascript
// Wrong — transaction left open on error
const trx = await knex.transaction();
const result = await someQuery(trx);
await trx.commit();

// Correct — always handle errors
const trx = await knex.transaction();
try {
  const result = await someQuery(trx);
  await trx.commit();
} catch (err) {
  await trx.rollback();
  throw err;
}
\`\`\`

## Results

Query times dropped from 10-15 seconds to under 200ms.
    `
  },
  {
    slug: 'redis-pubsub-websockets',
    title: 'Scaling WebSockets with Redis Pub/Sub',
    description: 'How we built a horizontally scalable real-time sports scoring system using Socket.io and Redis Pub/Sub',
    date: new Date('2024-05-01'),
    tags: ['redis', 'websockets', 'socket-io', 'scaling', 'backend'],
    content: `
## The Problem

A single Node.js WebSocket server can't scale horizontally. If user A is connected to server 1 and user B is connected to server 2, a message sent to server 1 never reaches user B.

## The Solution: Redis Pub/Sub

Redis acts as a message broker between server instances. When any server receives a score update, it publishes to Redis. All servers are subscribed and broadcast to their connected clients.

\`\`\`javascript
const { createClient } = require('redis');
const { Server } = require('socket.io');

const publisher = createClient({ url: process.env.REDIS_URL });
const subscriber = createClient({ url: process.env.REDIS_URL });

await publisher.connect();
await subscriber.connect();

// When score update comes in
app.post('/score-update', async (req, res) => {
  const { matchId, score } = req.body;
  await publisher.publish('score-updates', JSON.stringify({ matchId, score }));
  res.json({ success: true });
});

// All server instances subscribe and broadcast to their clients
await subscriber.subscribe('score-updates', (message) => {
  const data = JSON.parse(message);
  io.to(\`match:\${data.matchId}\`).emit('score', data.score);
});
\`\`\`

## Result

Any number of Node.js instances can now run behind a load balancer. Every connected client receives updates regardless of which server they're on.
    `
  },
  {
    slug: 'rtsp-hls-node',
    title: 'Streaming Live RTSP Camera Feeds in a Web Browser with Node.js and HLS',
    description: 'How I set up a media server to convert RTSP camera streams into HLS for playback in a React backoffice',
    date: new Date('2024-06-01'),
    tags: ['rtsp', 'hls', 'node-js', 'streaming', 'ffmpeg'],
    content: `
## The Problem

IP cameras output RTSP streams. Browsers can't play RTSP natively. We needed to display live warehouse camera feeds inside a React backoffice.

## The Solution: RTSP → FFmpeg → HLS → Browser

FFmpeg converts the RTSP stream into HLS (HTTP Live Streaming) segments that any browser can play.

\`\`\`javascript
const { spawn } = require('child_process');
const path = require('path');

function startStream(cameraId, rtspUrl) {
  const outputDir = path.join(__dirname, 'streams', cameraId);
  
  const ffmpeg = spawn('ffmpeg', [
    '-i', rtspUrl,
    '-c:v', 'libx264',
    '-preset', 'ultrafast',
    '-tune', 'zerolatency',
    '-f', 'hls',
    '-hls_time', '2',
    '-hls_list_size', '3',
    '-hls_flags', 'delete_segments',
    path.join(outputDir, 'stream.m3u8')
  ]);

  ffmpeg.stderr.on('data', (data) => {
    console.log(\`Camera \${cameraId}:\`, data.toString());
  });

  return ffmpeg;
}
\`\`\`

## Playing HLS in React

\`\`\`javascript
import Hls from 'hls.js';
import { useEffect, useRef } from 'react';

export function CameraFeed({ cameraId }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const hls = new Hls();
    hls.loadSource(\`/streams/\${cameraId}/stream.m3u8\`);
    hls.attachMedia(videoRef.current);
    return () => hls.destroy();
  }, [cameraId]);

  return <video ref={videoRef} autoPlay muted />;
}
\`\`\`

## Key Settings for Low Latency

- \`-preset ultrafast\` — reduces encoding time
- \`-tune zerolatency\` — removes buffering optimizations that add delay
- \`-hls_time 2\` — 2 second segments keep latency low
- \`-hls_list_size 3\` — only keep last 3 segments in playlist
    `
  },
  {
    slug: 'puppeteer-rpa',
    title: 'Building RPA Workflows with Puppeteer in Node.js',
    description: 'How I automated third-party website interactions using Puppeteer to eliminate hours of manual data entry',
    date: new Date('2024-07-01'),
    tags: ['puppeteer', 'rpa', 'automation', 'node-js', 'backend'],
    content: `
## What is RPA?

Robotic Process Automation (RPA) means automating repetitive tasks that a human would normally do manually in a UI — clicking buttons, filling forms, extracting data.

## Our Use Case

We needed to automatically create user accounts on a third-party website and extract transaction data from it. The site had no API. Puppeteer was the solution.

## Account Creation Automation

\`\`\`javascript
const puppeteer = require('puppeteer');

async function createAccount(userData) {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto('https://third-party-site.com/register');
  
  // Fill in the form
  await page.type('#firstName', userData.firstName);
  await page.type('#lastName', userData.lastName);
  await page.type('#email', userData.email);
  await page.type('#password', userData.password);
  
  // Submit and wait for navigation
  await Promise.all([
    page.waitForNavigation(),
    page.click('#submit-btn')
  ]);

  // Extract the new account ID from the success page
  const accountId = await page.$eval('#account-id', el => el.textContent);
  
  await browser.close();
  return accountId;
}
\`\`\`

## Handling Common Issues

**1. Dynamic content** — use \`waitForSelector\` instead of fixed delays

**2. Rate limiting** — add random delays between requests

\`\`\`javascript
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
await delay(Math.random() * 2000 + 1000); // 1-3 second random delay
\`\`\`

**3. Session management** — save cookies to avoid re-logging in

\`\`\`javascript
const cookies = await page.cookies();
await fs.writeFile('session.json', JSON.stringify(cookies));
\`\`\`

## Lessons Learned

- Always run headless in production but headed locally for debugging
- Third-party sites change their UI — build selectors that are resilient
- Queue your automation jobs with SQS to avoid hammering the target site
    `
  },
];