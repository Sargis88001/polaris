/* eslint-disable no-console */
const express = require('express')
const compression = require('compression')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app
  .prepare()
  .then(() => {
    const server = express()

    server.use(compression())
    server.disable('x-powered-by')

    server.use((req, res, nextFn) => {
      res.setHeader('x-Powered-By', 'BrightPath Academy')
      res.setHeader('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload')
      res.setHeader('X-Frame-Options', 'SAMEORIGIN')
      res.setHeader('X-XSS-Protection', '1; mode=block')
      res.setHeader('X-Content-Type-Options', 'nosniff')
      res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin')
      res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=()')

      if (req.url.startsWith('/_next/static') || req.url.startsWith('/images') || req.url.startsWith('/fonts')) {
        res.setHeader('Cache-Control', 'public, max-age=31536000, immutable')
      } else if (!req.url.startsWith('/_next/data') && !req.url.startsWith('/api')) {
        res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate')
      }

      nextFn()
    })

    server.all('*', (req, res) => handle(req, res))

    server.listen(port, () => {
      console.log(`> BrightPath Academy ready on http://localhost:${port}`)
    })
  })
  .catch((err) => {
    console.error('Failed to start server', err)
    process.exit(1)
  })
