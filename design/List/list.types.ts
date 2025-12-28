import type { InjectionKey } from "vue"

export interface ListContext {
    key: string | Object
}

export const  listKey:InjectionKey<ListContext> = Symbol('ListContext')