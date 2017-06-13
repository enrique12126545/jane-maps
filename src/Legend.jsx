import React from 'react'; // eslint-disable-line
import PropTypes from 'prop-types';

class Legend extends React.Component {

  static contextTypes = {
    addLegend: PropTypes.func,
    removeLegend: PropTypes.func,
  };

  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object,
    ]),
  }

  static defaultProps = {
    children: null,
  }

  componentDidMount() {
    this.context.addLegend(this.props.children);
  }

  componentWillUnmount() {
    this.context.removeLegend(this.props.children);
  }

  render() {
    return null;
  }
}

export default Legend;
