// IMPORT PLUGIN
import React from 'react';
import PropTypes from 'prop-types';

// IMPORT STYLES
import { Search, Input, Button, PlaceholderDiv } from './style/style';

// IMPORT COMPONENT
import Icon from '../../icon/icon';

// IMPORT SETTINGS STYLE
import theme from '../../../../layouts/theme/settings2';

// CREATE NEW COMPONENT

class SearchComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: false,
      value: '',
    };
  }

  onFocusInput = () => {
    this.setState({ placeholder: true });
  };

  onBlurInput = () => {
    const { value } = this.state;
    if (value.length === 0) {
      this.setState({ placeholder: false });
    } else {
      this.setState({ placeholder: true });
    }
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    const { placeholder } = this.state;
    const { items, secondary } = this.props;
    return (
      <>
        {items.map(item => (
          <Search theme={theme} secondary={secondary ? 1 : 0}>
            <Input
              type="search"
              onBlur={this.onBlurInput}
              onFocus={this.onFocusInput}
              onChange={this.handleChange}
              secondary={secondary ? 1 : 0}
            />
            <PlaceholderDiv
              theme={theme}
              active={placeholder}
              type="search"
              secondary={secondary ? 1 : 0}
              dangerouslySetInnerHTML={{ __html: item.placeholder }}
            />
            <Button theme={theme} active={placeholder} secondary={secondary ? 1 : 0}>
              <Icon search secondary width="30px" />
            </Button>
          </Search>
        ))}
      </>
    );
  }
}

export default SearchComponent;

SearchComponent.propTypes = {
  item: PropTypes.shape({
    label: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string.isRequired,
  }),
  secondary: PropTypes.bool,
};

SearchComponent.defaultProps = {
  item: PropTypes.shape({
    label: null,
    placeholder: 'Add Placeholder',
  }),
  secondary: null,
};
