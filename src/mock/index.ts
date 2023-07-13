import { MockMethod } from "vite-plugin-mock"

const mock: Array<MockMethod> = [
    {
      url: '/api/test',
      method: 'get',
      response: () => {
          return {
              status: 200,
              message: 'success',
              data: 'Hello World'
          }
      }
    },
    {
      url: '/api/getRoutes',
      method: 'get',
      response: () => {
        const routes = [
          {
              path: '/Page1',
              name: 'Page1',
              component: 'Pages/index'
          },
          {
              path: '/Page2',
              name: 'Page2',
              component: 'Pages/index'
          }
        ]
        return {
            status: 200,
            message: 'success',
            data: routes
        }
      }
    }
]

export default mock