import * as React from 'react';

type Props = {
    styles: React.CSSProperties;
    name: string;
    age: number;
    count: number;
    incrementCount: (cnt: (cnt: number) => number) => void;
    handleClick?: (ev: React.MouseEvent<HTMLButtonElement>) => void;  // when we pass the click
    handelChange?: (ev: React.ChangeEvent<HTMLInputElement>) => void; // when we pass the change
}

export const AdvancedPropsType: React.FC<Props> = (props) => {
    const { name, age, } = props

    return (
        <>
            {name}
            {age}
            <button style={props.styles} onClick={() => props.incrementCount(cn => cn + 1)}>increment count - {props.count}</button>
        </>
    );
} 