import { OperaModel } from './opera'

describe('OperaModel', () => {
  it('should create an opera model from a title', () => {
    const title = 'Rigoletto'
    const opera = new OperaModel(title)
    expect(opera.title).toBe(title)
  })
})