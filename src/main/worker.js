import { expose } from 'threads/worker'
 
expose((number) => number * 2)