const app = require('./app')
const port = process.env.PORT || 3001

app.listen(
  port,
  () => console.log(`GraphQL server started: http://localhost:${port}`) // eslint-disable-line no-console
)
