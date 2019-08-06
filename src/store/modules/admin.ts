// import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators'
import store from '@/store'

export enum DeviceType {
  Mobile,
  Desktop,
}

export interface IAppState {
  device: DeviceType
  sidebar: {
    opened: boolean
    withoutAnimation: boolean
  }
  language: string
  size: string
}

@Module({ dynamic: true, store, name: 'admin' })
// class App extends VuexModule implements IAppState {


}

export const AppModule = getModule(App)