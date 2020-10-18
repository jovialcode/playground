import React from 'react';

import classNames from 'classnames/bind';
import css from './Toast.scss';
import {observer} from "mobx-react";
import ToastVM from "../../../viewModel/ToastVM";

const cx = classNames.bind(css);

const Toast = observer(() => {
    const msg = ToastVM.getInstance()?.toastMsg;

    return msg ? (
        <div className={cx('toastContainer')}>
            <div className={cx('toastMsgContainer')}>
                <span className={cx('toastMsg')}>{msg}</span>
            </div>
        </div>
    ) : null;
});

export default Toast;