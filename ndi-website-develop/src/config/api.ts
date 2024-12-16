/* eslint-disable @typescript-eslint/no-explicit-any */
import { Amplify, DataStore } from 'aws-amplify'

import config from '../aws-exports'

Amplify.configure({ ...config, ssr: true })

const get = (modalName: any): any => DataStore.query(modalName)
const save = (body: any): any => DataStore.save(body)
const observe = (modalName: any) => DataStore.observe(modalName)
const clear = (): any => DataStore.clear()
const start = (): any => DataStore.start()
export { get, save, observe, clear, start }
