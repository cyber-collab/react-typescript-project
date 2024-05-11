import React from "react";

type HeadingWrapperProps = {
    children: React.ReactNode;
}
export function HeadingWrapper(props: HeadingWrapperProps): JSX.Element {
    return (
        <h2>{props.children}</h2>
    );
}
