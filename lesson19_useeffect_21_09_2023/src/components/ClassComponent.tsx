import React, { Component } from 'react'

export default class ClassComponent extends Component {

    componentDidMount(): void {
        console.log('Component is mounted');
    }

    componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void {
        console.log('Component is updated');

    }

    componentWillUnmount(): void {
        console.log('Component is unmounted');
    }

  render() {
    return (
      <div>ClassComponent</div>
    )
  }
}
