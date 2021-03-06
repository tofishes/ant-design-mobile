/* eslint no-console:0 */
import * as React from 'react';
import PopupDatePicker from 'rmc-date-picker/lib/Popup';
import { getFormatter, getProps } from './utils';
import assign from 'object-assign';
import tsPropsType from './PropsType';

function getDefaultProps() {
  return assign({
    prefixCls: 'am-date-picker',
    pickerPrefixCls: 'am-date-picker-picker',
    popupPrefixCls: 'am-date-picker-popup',
  }, getProps());
}

// api changed by chengyu(yiminghe)
export default class DatePicker extends React.Component<tsPropsType, any> {
  static defaultProps = getDefaultProps();

  format(v) {
    const { format = getFormatter(this.props.mode) } = this.props;
    return v.format(format);
  }

  render() {
    const { children, extra, value, defaultDate } = this.props;
    const extraProps = {
      extra: value ? this.format(value) : extra,
    };
    return (
      <PopupDatePicker {...this.props}
        WrapComponent="div"
        popupTransitionName="am-slide-fade"
        maskTransitionName="am-fade"
        date={value || defaultDate}
      >
        {React.cloneElement(children, extraProps)}
      </PopupDatePicker>
    );
  }
}
