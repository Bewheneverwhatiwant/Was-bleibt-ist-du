import styled from "styled-components";
import React, { ReactNode, CSSProperties } from "react";

interface CustomBoxProps {
  $width?: string;
  $height?: string;
  $gap?: string;
  $display?: string;
  $flexdirection?: string;
  $alignitems?: string;
  $justifycontent?: string;
  $margin?: string;
  $margintop?: string;
  $padding?: string;
  $backgroundcolor?: string;
  $color?: string;
  $border?: string;
  $borderradius?: string;
  $overflowy?: string;
  $overflowx?: string;
  $zindex?: string;
  $boxshadow?: string;
  $minHeight?: string;
  children?: ReactNode;
  style?: CSSProperties;
}

const StyledCustomBox = styled.div<CustomBoxProps>`
  width: ${(props) => props.$width || "100%"};
  height: ${(props) => props.$height || "auto"};
  gap: ${(props) => props.$gap || "1rem"};
  display: ${(props) => props.$display || "flex"};
  flex-direction: ${(props) => props.$flexdirection || 'column'};
  align-items: ${(props) => props.$alignitems || "center"};
  justify-content: ${(props) => props.$justifycontent || "center"};
  margin: ${(props) => props.$margin || "0"};
  margin-top: ${(props) => props.$margintop || '0'};
  padding: ${(props) => props.$padding || "0"};
  background: ${(props) => props.$backgroundcolor || "#1E1E1E"};
  color: ${(props) => props.color || "black"};
  border: ${(props) => props.$border || "none"};
  border-radius: ${(props) => props.$borderradius || "0.5rem"};
  overflow: visible;
  z-index: ${(props) => props.$zindex || '3'};
  box-shadow: ${(props) => props.$boxshadow || "none"};
  min-height: ${(props) => props.$minHeight || "10rem"};

  /* 스크롤바 스타일 */
  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #D9D9D9;
    border-radius: 5px;
    border: none;
  }

`;

const CustomBox = React.forwardRef<HTMLDivElement, CustomBoxProps>((props, ref) => {
  const { children, style, ...rest } = props; // style 및 children 분리
  return (
    <StyledCustomBox ref={ref} style={style} {...rest}>
      {children}
    </StyledCustomBox>
  );
});

export default CustomBox;