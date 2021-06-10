import styled from 'styled-components';


const StyledButton = styled.button`
  color: blue;
  margin: 20px;
  padding: 5px;
  color: ${props => props.primary? "white":"blue"};
  background: ${props => props.primary? "blue":"white"};
`;

const ExtraStyledButton = styled(StyledButton)`
  margin:50px;
`;

function Button(props) {
  return(
    <div>
      <h1>Styled Component</h1>
      <StyledButton>Click Here</StyledButton>
      <StyledButton primary>Click Here</StyledButton>
      <ExtraStyledButton primary>Click Here</ExtraStyledButton>
    </div>
  )
}

export default Button;