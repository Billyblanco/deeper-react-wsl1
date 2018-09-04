import React from 'react'

export default function(WrappedComponent) {
  return function(props) {
    return props.isAuthenticated ? <WrappedComponent /> : null
  }
}