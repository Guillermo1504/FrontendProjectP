import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  height: auto;
`;

export const ContentInformation = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url("https://www.timeforkids.com/wp-content/uploads/2019/09/final-cover-forest.jpg?w=1024");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
export const Input = styled.input`
  display: flex;
  width: 20%;
  height: 25px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Span = styled.span<{ Color?: string }>`
  width: 20%;
  border: none;
  margin: 1px 0px;
  padding: 5.2px 0px;
  font-size: 12px;
  font-family: monospace;
  text-align: start;
  white-space: nowrap;
  font-weight: 800;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const Button = styled.button`
  display: flex;
  justify-content: space-around;
  width: 10%;
  height: 35px;
  padding: 8px;
  margin-top: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #ffff;
  font-family: monospace;
  font-weight: bold;
`;

export const Title = styled.div<{ Color?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
  border: none;
  margin: 1px 0px;
  padding: 5.2px 0px;
  font-size: 20px;
  text-align: start;
  white-space: nowrap;
  font-weight: 800;
  text-overflow: ellipsis;
  overflow: hidden;
  font-family: monospace;
`;
