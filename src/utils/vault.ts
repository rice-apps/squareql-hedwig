import NodeVault from 'node-vault'
import { VAULT_ROOT_TOKEN, VAULT_KEYS } from '../config'

const vault = NodeVault({
  apiVersion: 'v1',
  endpoint: 'https://hedwig-vault.riceapps.org:8200',
  token: VAULT_ROOT_TOKEN
})

const keys = (VAULT_KEYS as string).split(';')

keys.forEach(async key => await vault.unseal({ key: key }))

export default vault
