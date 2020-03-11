import { expose } from 'threads/worker'
 
expose((precision) => precision * 2)