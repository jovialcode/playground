import React, {ReactNode} from 'react';

interface IContentContainer{
    children: ReactNode;
}

const ContentContainer  = (props: IContentContainer) => {
    return (
        <>
            {props.children}
        </>
    )
};

export default ContentContainer;