import React, { Component } from 'react'

import './fonts/index.css'
import * as styles from './styles.css'

export default class Container extends Component {
  render() {
    return (
    	<div className={styles.app}>
				{this.props.children}
			</div>
    )
  }
}