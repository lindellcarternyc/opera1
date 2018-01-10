// @flow

import * as React from 'react'
import './App.css'

type Props = {
  opera: {
    title: string
  }
}

class App extends React.Component<Props> {
  static defaultProps: Props = {
    opera: {
      title: 'Rigoletto'
    }
  }
  constructor(props: Props) {
    super(props)
  }
  render() {
    const { opera } = this.props
    return (
      <h1>{opera.title}</h1>
    );
  }
}

export default App;
