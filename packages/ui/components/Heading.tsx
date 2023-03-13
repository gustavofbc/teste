import { ComponentProps, ElementType } from "react";
import { styled } from "../styles";

export const Heading = styled('h2', {
    fontFamily: '$default'
})

export interface HeadingProps extends ComponentProps<typeof Heading> {
    as?: ElementType;
}