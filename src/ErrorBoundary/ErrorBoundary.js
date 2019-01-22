import React, { Component }  from 'react';

class ErrorBoundary extends React.Component {
  state = {has_error: false, message: "Something went wrong."}

  componentDidCatch(error, info) {
    // Display fallback UI in case error occurs
    this.setState({ has_error: true, message: error.message });
    // You can also log the error to an error reporting service
  }

  render() {
    if (this.state.has_error) {
      // You can render any custom fallback UI
      return <h1>{this.state.message}</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;