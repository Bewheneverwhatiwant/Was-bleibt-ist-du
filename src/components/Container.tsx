import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 5rem;
  min-height: 100vh;
  padding: 0.5rem
`;

export default function Container({
	children,
}: {
	children: React.ReactNode;
}) {
	return <StyledContainer>{children}</StyledContainer>;
}