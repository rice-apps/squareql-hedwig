import dotenv from 'dotenv'
import log from 'loglevel'

dotenv.config()

if (process.env.NODE_ENV === 'development') {
  log.setLevel('trace')
}

// const ALLOWED_ORIGINS = process.env.ALLOWED_ORIGINS.split(',')
const DEV_PORT = parseInt(process.env.DEV_PORT as string, 10)
const {
  MONGODB_URL,
  REDISHOST,
  SHOPIFY_DOMAIN,
  SHOPIFY_STOREFRONT_TOKEN,
  SHOPIFY_API_KEY,
  SHOPIFY_PASSWORD,
  SQUARE_APPLICATION_ID,
  SQUARE_APPLICATION_SECRET,
  TWILIO_ACCOUNT_SID,
  TWILIO_AUTH_TOKEN,
  VAULT_KEYS,
  VAULT_ROOT_TOKEN
} = process.env
const REDISPORT = parseInt(process.env.REDISPORT as string, 10)

const MONGOOSE_CONFIG = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}

const REDIS_OPTIONS = {
  host: REDISHOST,
  port: REDISPORT,
  retryStrategy: (times: number) => Math.min(times * 50, 2000)
}

export {
  DEV_PORT,
  MONGODB_URL,
  MONGOOSE_CONFIG,
  REDIS_OPTIONS,
  SHOPIFY_DOMAIN,
  SHOPIFY_STOREFRONT_TOKEN,
  SHOPIFY_API_KEY,
  SHOPIFY_PASSWORD,
  SQUARE_APPLICATION_ID,
  SQUARE_APPLICATION_SECRET,
  TWILIO_ACCOUNT_SID,
  TWILIO_AUTH_TOKEN,
  VAULT_KEYS,
  VAULT_ROOT_TOKEN
}
